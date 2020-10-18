import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horoscope } from './horoscope.model';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {
  private _horoscope: Horoscope[] = [
    new Horoscope(
      'Capricorn',
      'December 22 – January 19',
      '/assets/img/capricorn.JPG'
    ),
    new Horoscope(
      'Aquarius',
      'January 20 - February 18',
      '/assets/img/aquarius.JPG'
    ),
    new Horoscope(
      'Pisces',
      'February 19 - March 20',
      '/assets/img/pisces.JPG'
    ),
    new Horoscope(
      'Aries',
      'March 21 - April 19',
      '/assets/img/aries.JPG'
    ),
    new Horoscope(
      'Taurus',
      'April 20 - May 20',
      '/assets/img/taurus.JPG'
    ),
    new Horoscope(
      'Gemini',
      'May 21 - June 20',
      '/assets/img/gemini.JPG'
    ),
    new Horoscope(
      'Cancer',
      'June 21 - July 22',
      '/assets/img/cancer.JPG'
    ),
    new Horoscope(
      'Leo',
      'July 23 - August 22',
      '/assets/img/leo.JPG'
    ),
    new Horoscope(
      'Virgo',
      'August 23 - September 22',
      '/assets/img/virgo.JPG'
    ),
    new Horoscope(
      'Libra',
      'September 23 - October 22',
      '/assets/img/libra.JPG'
    ),
    new Horoscope(
      'Scorpio',
      'October 23 - November 21',
      '/assets/img/scorpio.JPG'
    ),
    new Horoscope(
      'Sagittarius',
      'November 22 - December 21',
      '/assets/img/sagittarius.JPG'
    )
  ];

  get horoscopes() {
    return [...this._horoscope];
  }

  constructor(private http: HttpClient) {}

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
    return this.http.get(`https://rapidapi.p.rapidapi.com/general/daily?sign=${title}&date=${this.converDate(todaysDate)}`,this.httpOptions);
  }
  
  getDescriptionCarrer(title:string):Observable<any>{
    var todaysDate = new Date();
    return this.http.get(`https://rapidapi.p.rapidapi.com/career/daily?sign=${title}&date=${this.converDate(todaysDate)}`,this.httpOptions);
  }
  
  getDescriptionHealth(title:string):Observable<any>{
    var todaysDate = new Date();
    return this.http.get(`https://rapidapi.p.rapidapi.com/health/daily?sign=${title}&date=${this.converDate(todaysDate)}`,this.httpOptions);
  }
  
  converDate(date){
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }
}
