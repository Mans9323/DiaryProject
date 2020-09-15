import { Injectable } from '@angular/core';
import { take, map, tap, delay, switchMap, switchMapTo } from 'rxjs/operators';
import { Entries } from './diary.model';
import { AuthService } from '../../auth/auth.service';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlaceLocation } from './location.model';

// [
//   new Entries(
//     'd1',
//     'Quarantine Blues',
//     'happy',
//     new Date('2020-08-15'),
//     '12:30',
//     'Worked on my masters project. Less time have to put in a lot more hours and finish this thing. The run for my fundraiser is going well 86miles done and 14 more to go will finish them by the end of the week',
//     'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aries-zodiac-sign-abstract-night-sky-background-royalty-free-image-1584536731.jpg',
//     'abc'
// ),
// new Entries(
//     'd2',
//     'Lazy Day',
//     'sad',
//     new Date(),
//     new Date().toISOString(),
//     'Started the day with the project work. Storm ellen is hitting hard here with the weather being gloomy and rain all day. Couldnt go out for the run today as well.',
//     'https://imgk.timesnownews.com/story/taurus.jpg?tr=w-400,h-300,fo-auto',
//     'abc'
// ),
// new Entries(
//     'd3',
//     'Lazy Day',
//     'sad',
//     new Date(),
//     new Date().toISOString(),
//     'Started the day with the project work. Storm ellen is hitting hard here with the weather being gloomy and rain all day. Couldnt go out for the run today as well.',
//     'https://imgk.timesnownews.com/story/taurus.jpg?tr=w-400,h-300,fo-auto',
//     'abc'
// )
// ]

interface EntryData {
dateRange: string;
description: string;
imageUrl: string;
mood: string;
time: string;
title: string;
userId: string;
location: PlaceLocation;
}

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private _entry = new BehaviorSubject<Entries[]>([]);

  get diaryEntries() {
    return this._entry.asObservable();
  };

  constructor(private authService: AuthService, private http: HttpClient) {}

  fetchEntries() {
    let fetchedUserId: string;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if (!userId) {
          throw new Error('User not found!');
        }
      fetchedUserId = userId;
      return this.authService.token;
      }), 
      take(1),
      switchMap(token => {
        return this.http.get<{ [key:string]: EntryData }>(
          `https://diary-project-13101.firebaseio.com/diary-entries.json?orderBy="userId"&equalTo="${fetchedUserId}"&auth=${token}`
          );
      }),
      map(resData => {
      const entries = [];
      for (const key in resData){
        if(resData.hasOwnProperty(key)) {
          entries.push(new Entries(
              key, 
              resData[key].title, 
              resData[key].mood, 
              new Date(resData[key].dateRange), 
              resData[key].time, 
              resData[key].description,
              resData[key].imageUrl,
              resData[key].userId,
              resData[key].location
              )
            );
          }
        }
        return entries;
      }),
      tap(diaryEntries => {
        this._entry.next(diaryEntries);
      })
    );
  }

  getEntry(id: string){
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
      return this.http
    .get<EntryData>(
      `https://diary-project-13101.firebaseio.com/diary-entries/${id}.json?auth=${token}`
    );
    }),
      map(entryData => {
        return new Entries(
          id, 
          entryData.title, 
          entryData.mood, 
          new Date(entryData.dateRange), 
          entryData.time, 
          entryData.description, 
          entryData.imageUrl, 
          entryData.userId,
          entryData.location
          );
      })
    );
  }

  uploadImage(image: File) {
    const uploadData = new FormData();
    uploadData.append('image', image);

    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
      return this.http.post<{ imageUrl: string, imagePath: string }>(
        'https://us-central1-diary-project-13101.cloudfunctions.net/storeImage', 
      uploadData, 
      { headers: {Authorization: 'Bearer ' + token} }
      );
    })
    );  
  }

  addDiaryEntry(
    title: string, 
    mood: string, 
    dateRange: Date,
    time: string, 
    description: string,
    location: PlaceLocation,
    imageUrl: string
    ) {
      let generatedId: string;
      let newEntry: Entries;
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
          newEntry = new Entries (
          Math.random().toString(),
          title,
          mood,
          dateRange,
          time,
          description,
          imageUrl,
          fetchedUserId,
          location
        );
        return this.http.post<{ name: string }>(
          `https://diary-project-13101.firebaseio.com/diary-entries.json?auth=${token}`,
          { ...newEntry, id: null }
    );
  }),
    switchMap(resData => {
    generatedId = resData.name;
    return this.diaryEntries;
      }),
      take(1),
      tap(diaryEntries => {
        newEntry.id = generatedId;
        this._entry.next(diaryEntries.concat(newEntry));
      })
    );
    // return this.diaryEntries.pipe(
    //   take(1), 
    //   delay(1000), 
    //   tap(diaryEntries => {
    //     this._entry.next(diaryEntries.concat(newEntry));
    //   })
    // );
  }

  cancelEntry(entryId: string) {
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        return this.http.delete(`https://diary-project-13101.firebaseio.com/diary-entries/${entryId}.json?auth=${token}`
    );
      }),
      switchMap(() => {
      return this.diaryEntries;
    }),
      take(1),
      tap(diaryEntries => {
      this._entry.next(diaryEntries.filter(e => e.id !== entryId));
    })
    );
  }

  updateEntry(entryId: string, title: string, mood: string, description: string) {
    let updatedEntries: Entries[];
    let fetchedToken: string;
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        fetchedToken = token;
        return this.diaryEntries;
      }),
      take(1), 
      switchMap(diaryEntries => {
        if(!diaryEntries || diaryEntries.length <= 0) {
          return this.fetchEntries();
        }else {
          return of(diaryEntries);
        }
      }),
      switchMap(diaryEntries => {
        const updatedEntryIndex = diaryEntries.findIndex(el => el.id === entryId);
      updatedEntries = [...diaryEntries];
      const oldEntries = updatedEntries[updatedEntryIndex];
      updatedEntries[updatedEntryIndex] = new Entries(
        oldEntries.id, 
        title,
        mood, 
        oldEntries.dateRange,
        oldEntries.time,
        description,
        oldEntries.imageUrl, 
        oldEntries.userId,
        oldEntries.location
        );
        return this.http.put(
          `https://diary-project-13101.firebaseio.com/diary-entries/${entryId}.json?auth=${fetchedToken}`,
        {...updatedEntries[updatedEntryIndex], id: null }
        );
      }), 
      tap(() => {
        this._entry.next(updatedEntries);
      })
      );
  }
}
