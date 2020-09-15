import { Component, OnInit } from '@angular/core';
import { Horoscope } from '../../horoscope.model';
import { ActivatedRoute } from '@angular/router';
import { HoroscopeService } from '../../horoscope.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-horoscope-detail',
  templateUrl: './horoscope-detail.page.html',
  styleUrls: ['./horoscope-detail.page.scss'],
})
export class HoroscopeDetailPage implements OnInit {
  horoscope: Horoscope;
  constructor(private route: ActivatedRoute, private horoscopeService: HoroscopeService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('horoscopeId')){
        this.navCtrl.navigateBack('/home/tabs/horoscope');
        return;
      }
      this.horoscope = this.horoscopeService.getHoroscope(paramMap.get('horoscopeId'));
    })
  }

}
