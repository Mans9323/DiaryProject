import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Horoscope } from './horoscopetrait.model';
import { HoroscopetraitService } from './horoscopetrait.service';

@Component({
  selector: 'app-horoscopetrait',
  templateUrl: './horoscopetrait.page.html',
  styleUrls: ['./horoscopetrait.page.scss'],
})
export class HoroscopetraitPage implements OnInit {

  loadHoroscope: Horoscope[];
  subscribe: any;
  constructor(private horoscopeTraitService: HoroscopetraitService, public platform: Platform) { }



  ngOnInit() {
    
    this.loadHoroscope = this.horoscopeTraitService.horoscopes;
  }

  ionViewDidEnter() {
    this.subscribe = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
  }
  
  ionViewWillLeave() {
    this.subscribe.unsubscribe();
  }

}
