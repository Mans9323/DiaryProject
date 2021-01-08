import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from '../profile/profile.service';
import { Horoscope } from './horoscope.model';
import { UserHoroscope } from './userHoroscope.model';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {
  private _horoscope: Horoscope[] = [
    new Horoscope(
      'Capricorn',
      'Dec 22 – Jan 19',
      '/assets/img/capricorn.JPG'
    ),
    new Horoscope(
      'Aquarius',
      'Jan 20 - Feb 18',
      '/assets/img/aquarius.JPG'
    ),
    new Horoscope(
      'Pisces',
      'Feb 19 - Mar 20',
      '/assets/img/pisces.JPG'
    ),
    new Horoscope(
      'Aries',
      'Mar 21 - Apr 19',
      '/assets/img/aries.JPG'
    ),
    new Horoscope(
      'Taurus',
      'Apr 20 - May 20',
      '/assets/img/taurus.JPG'
    ),
    new Horoscope(
      'Gemini',
      'May 21 - Jun 20',
      '/assets/img/gemini.JPG'
    ),
    new Horoscope(
      'Cancer',
      'Jun 21 - Jul 22',
      '/assets/img/cancer.JPG'
    ),
    new Horoscope(
      'Leo',
      'Jul 23 - Aug 22',
      '/assets/img/leo.JPG'
    ),
    new Horoscope(
      'Virgo',
      'Aug 23 - Sep 22',
      '/assets/img/virgo.JPG'
    ),
    new Horoscope(
      'Libra',
      'Sep 23 - Oct 22',
      '/assets/img/libra.JPG'
    ),
    new Horoscope(
      'Scorpio',
      'Oct 23 - Nov 21',
      '/assets/img/scorpio.JPG'
    ),
    new Horoscope(
      'Sagittarius',
      'Nov 22 - Dec 21',
      '/assets/img/sagittarius.JPG'
    )
  ];

  private userHoroscopes: UserHoroscope;

  get horoscopes() {
    return [...this._horoscope];
  }

  constructor(private http: HttpClient, private profileService: ProfileService, private authService: AuthService) {}

  httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "horoscope5.p.rapidapi.com",
      "x-rapidapi-key": "dd3d16026fmsh9337c1faec14058p1e192djsncfde568446d6"
    })
  };

  getHoroscope(title: string) {
    return {
      ...this._horoscope.find(
        h => h.title === title)
    };
  }
  getDescriptionDaily(title:string):Observable<any>{
    var todaysDate = new Date();
    return this.http.get(`https://horoscope5.p.rapidapi.com/general/daily?sign=${title.toLowerCase()}&date=${this.converDate(todaysDate)}`,this.httpOptions);
  }
  
  getDescriptionCarrer(title:string):Observable<any>{
    var todaysDate = new Date();
    return this.http.get(`https://horoscope5.p.rapidapi.com/career/daily?sign=${title.toLowerCase()}&date=${this.converDate(todaysDate)}`,this.httpOptions);
  }
  
  getDescriptionHealth(title:string):Observable<any>{
    var todaysDate = new Date();
    return this.http.get(`https://horoscope5.p.rapidapi.com/health/daily?sign=${title.toLowerCase()}&date=${this.converDate(todaysDate)}`,this.httpOptions);
  }
  
  converDate(date){
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }

  getUserHoroscope() {
    let date: string;
    let month: string;
    return this.profileService.getProfile().pipe(
      take(1),
      map(profile => {
        date = ("0" + new Date(profile[0].birthday).getDate()).slice(-2);
        month = ("0" + (new Date(profile[0].birthday).getMonth() +1)).slice(-2);
        if((+month == 1 && +date <= 19) || (+month == 12 && +date >=22)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Capricorn',
            'Dec 22 – Jan 19',
            '/assets/img/capricorn.JPG')
        }else if((+month == 1 && +date >= 20) || (+month == 2 && +date <= 18)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Aquarius',
            'Jan 20 - Feb 18',
            '/assets/img/aquarius.JPG'
          )
        }else if((+month == 2 && +date >= 19) || (+month == 3 && +date <= 20)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Pisces',
            'Feb 19 - Mar 20',
            '/assets/img/pisces.JPG'
          )
        }else if((+month == 3 && +date >= 21) || (+month == 4 && +date <= 19)){
          this.userHoroscopes =new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Aries',
            'Mar 21 - Apr 19',
            '/assets/img/aries.JPG'
          )
        }else if((+month == 4 && +date >= 20) || (+month == 5 && +date <= 20)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Taurus',
            'Apr 20 - May 20',
            '/assets/img/taurus.JPG'
          )
        }else if((+month == 5 && +date >= 21) || (+month == 6 && +date <= 20)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Gemini',
            'May 21 - Jun 20',
            '/assets/img/gemini.JPG'
          )
        }else if((+month == 6 && +date >= 21) || (+month == 7 && +date <= 22)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Cancer',
            'Jun 21 - Jul 22',
            '/assets/img/cancer.JPG'
          )
        }else if((+month == 7 && +date >= 23) || (+month == 8 && +date <= 22)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Leo',
            'Jul 23 - Aug 22',
            '/assets/img/leo.JPG'
          )
        }else if((+month == 8 && +date >= 23) || (+month == 9 && +date <= 22)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Virgo',
            'Aug 23 - Sep 22',
            '/assets/img/virgo.JPG'
          )
        }else if((+month == 9 && +date >= 23) || (+month == 10 && +date <= 22)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Libra',
            'Sep 23 - Oct 22',
            '/assets/img/libra.JPG'
          )
        }else if((+month == 10 && +date >= 23) || (+month == 11 && +date <= 21)){
          this.userHoroscopes = new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Scorpio',
            'Oct 23 - Nov 21',
            '/assets/img/scorpio.JPG'
          )
        }else if((+month == 11 && +date >= 22) || (+month == 12 && +date <= 21)){
          this.userHoroscopes =new UserHoroscope(
            profile[0].firstname,
            profile[0].lastname,
            profile[0].birthday,
            'Sagittarius',
            'Nov 22 - Dec 21',
            '/assets/img/sagittarius.JPG'
          )
        }
        return this.userHoroscopes;
      })
    )
  }

}
