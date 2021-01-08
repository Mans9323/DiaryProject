import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Horoscope } from '../horoscopetrait.model';
import { HoroscopetraitService } from '../horoscopetrait.service';

@Component({
  selector: 'app-horoscopetrait-detail',
  templateUrl: './horoscopetrait-detail.page.html',
  styleUrls: ['./horoscopetrait-detail.page.scss'],
})
export class HoroscopetraitDetailPage implements OnInit {
  horoscope: Horoscope;
  title: string;

  constructor(private route: ActivatedRoute,  private horoscopeTraitService: HoroscopetraitService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('title')){
        this.navCtrl.navigateBack('/home/tabs/horoscopetrait');
        return;
      }
     this.horoscope = this.horoscopeTraitService.getHoroscope(paramMap.get('title'));
     this.title = paramMap.get('title');
    })
  }

}
