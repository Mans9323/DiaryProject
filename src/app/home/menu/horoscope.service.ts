import { Injectable } from '@angular/core';
import { Horoscope } from './horoscope.model';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {
  private _horoscope: Horoscope[] = [
    new Horoscope(
      'h1',
      'week',
      'Aries',
      'March 21 - April 19',
      'You feel a strong desire to prove a point and quarrels are just as possible as anger issues that arise without control. Still, frustration shouldn’t be the one pushing you off the edge, when it is truly needed to take a day off, rest, or give yourself more distance to act from.Fiery energies with Mars in your first house are powerful but potentially destructive if you don’t have a clear and loving goal in mind. Seek golden middle for your own different or conflicted needs.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aries-zodiac-sign-abstract-night-sky-background-royalty-free-image-1584536731.jpg'
  ),
  new Horoscope(
      'h2',
      'week',
      'Taurus',
      'April 20-May 20',
      'You don’t know how to accept certain things done by other people, but the trick seems to be in loving emotions rather than any sort of conflict. Still, without healthy distances in place, you won’t have a chance to avoid the struggle that might be best avoided.If you find yourself in a self-sufficient mode, entirely supported by your own heart, you will see that other people are colorful additions to your world rather than a stone around your feet.',
      'https://imgk.timesnownews.com/story/taurus.jpg?tr=w-400,h-300,fo-auto'
  ),
  new Horoscope(
    'h3',
    'month',
    'Taurus',
    'April 20-May 20',
    'You don’t know how to accept certain things done by other people, but the trick seems to be in loving emotions rather than any sort of conflict. Still, without healthy distances in place, you won’t have a chance to avoid the struggle that might be best avoided.If you find yourself in a self-sufficient mode, entirely supported by your own heart, you will see that other people are colorful additions to your world rather than a stone around your feet.',
    'https://imgk.timesnownews.com/story/taurus.jpg?tr=w-400,h-300,fo-auto'
)
  ];

  get horoscopes() {
      return [...this._horoscope];
  }

  constructor() { }

  getHoroscope(id: string) {
    return {...this._horoscope.find(
      h => h.id === id)};
  }
}
