import { Component, OnDestroy, OnInit } from '@angular/core';
import { HoroscopeService } from '../horoscope.service';
import { Horoscope } from '../horoscope.model';
import { UserHoroscope } from '../userHoroscope.model';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.page.html',
  styleUrls: ['./horoscope.page.scss'],
})
export class HoroscopePage implements OnInit, OnDestroy {
  loadHoroscope: Horoscope[];
  userSign : UserHoroscope;
  horoscopeSub: Subscription;
  subscribe : any;

  constructor(private horoscopeService: HoroscopeService,public platform: Platform) { }

  ngOnInit() {
    this.loadHoroscope = this.horoscopeService.horoscopes;
    this.horoscopeSub = this.horoscopeService.getUserHoroscope().subscribe(resData => {
      this.userSign = resData;
    })
  }

  ionViewWillEnter() {
    this.horoscopeSub = this.horoscopeService.getUserHoroscope().subscribe(resData => {
      this.userSign = resData;
    })
    this.subscribe = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
  }

  ionViewWillLeave() {
    this.subscribe.unsubscribe();
  }

  ngOnDestroy(){
    if(this.horoscopeSub){
      this.horoscopeSub.unsubscribe();
    }
  }
}

  