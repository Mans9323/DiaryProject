import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Profile } from './profile.model';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _profile = new BehaviorSubject<Profile[]>([]);

  get profile() {
    return this._profile.asObservable();
  };


  constructor(private authService: AuthService, private http: HttpClient) { }


  getProfile(){
    let fetchedUserId: string;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if(!userId) {
          throw new Error('User not found!');
        }
        fetchedUserId = userId;
        return this.authService.token;
    }),
    take(1),
    switchMap(token => {
      return this.http.get<{ [key:string]: Profile}>(
        `https://diary-project-13101.firebaseio.com/profiles.json?orderBy="userId"&equalTo="${fetchedUserId}"&auth=${token}`
      );
    }),
      map(resData => {
        const profiles = [];
        for(const key in resData) {
          if(resData.hasOwnProperty(key)){
            profiles.push(new Profile(
              key,
              resData[key].firstname,
              resData[key].lastname,
              resData[key].birthday,
              resData[key].userId
          ))
      }
    }
    return profiles;
  }),
  tap(profile => {
    this._profile.next(profile);
    })
  );
}


  addProfile(firstname:string, lastname:string, birthday:string) {
    let generatedId: string;
    let newProfile: Profile;
    let fetchedUserId: string;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if(!userId) {
          throw new Error('No user id found!');
        }
        fetchedUserId = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap(token => {
        newProfile = new Profile(
          Math.random.toString(),
          firstname,
          lastname,
          birthday,
          fetchedUserId
        );
        return this.http.post<{ name: string }>(
          `https://diary-project-13101.firebaseio.com/profiles.json?auth=${token}`,
          {...newProfile, id:null}
        );
      }),
      switchMap(resData => {
        generatedId = resData.name;
        return this.profile;
      }),
      take(1),
      tap(profile => {
        newProfile.id = generatedId;
        this._profile.next(profile.concat(newProfile));
      })
    );
  }

  updateProfile(entryId: string, firstname: string, lastname: string, birthday: string) {
    let updatedProfile: Profile[];
    let fetchedToken: string;
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        fetchedToken = token;
        return this.profile;
      }),
      take(1),
      switchMap(profile => {
        if(!profile || profile.length <=0){
          return this.getProfile();
        }else{
          return of(profile);
        }
      }),
      switchMap(profile => {
        const updatedProfileIndex = profile.findIndex(el => el.id === entryId);
        updatedProfile = [...profile];
        const oldProfile = updatedProfile[updatedProfileIndex];
        updatedProfile[updatedProfileIndex] = new Profile(
          oldProfile.id,
          firstname,
          lastname,
          birthday,
          oldProfile.userId
        );
        return this.http.put(
          `https://diary-project-13101.firebaseio.com/profiles/${entryId}.json?auth=${fetchedToken}`,
          {...updatedProfile[updatedProfileIndex], id:null}
        );
      }),
      tap(() => {
        this._profile.next(updatedProfile);
      })
    )
  }

}
