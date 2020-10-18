import { Component, OnInit } from '@angular/core';
import { Horoscope } from '../../horoscope.model';
import { ActivatedRoute } from '@angular/router';
import { HoroscopeService } from '../../horoscope.service';
import { NavController } from '@ionic/angular';
import { Result } from '../result.model';

@Component({
  selector: 'app-horoscope-detail',
  templateUrl: './horoscope-detail.page.html',
  styleUrls: ['./horoscope-detail.page.scss'],
})
export class HoroscopeDetailPage implements OnInit {
  horoscope: Horoscope;
  descHoroscope: Result;
  private filter = 'daily';
  title: string;
  isloading = false;
  
  constructor(private route: ActivatedRoute, private horoscopeService: HoroscopeService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('title')){
        this.navCtrl.navigateBack('/home/tabs/horoscope');
        return;
      }
     this.horoscope = this.horoscopeService.getHoroscope(paramMap.get('title'));
     this.title = paramMap.get('title');
     this.onFilterUpdate(this.filter);
    })
  }

  onFilterUpdate(filter: string) {
    if(filter === "daily") {
      this.isloading = true;
       this.horoscopeService.getDescriptionDaily(this.title).subscribe(
         data => {
           this.descHoroscope = data.result;
           this.isloading = false;
         }
       )
    }else if(filter === "carrer"){
      this.isloading = true;
      this.horoscopeService.getDescriptionCarrer(this.title).subscribe(
        data => {
          this.descHoroscope = data.result;
          this.isloading = false;
        }
      )
    }else{
      this.isloading = true;
      this.horoscopeService.getDescriptionHealth(this.title).subscribe(
        data => {
          this.descHoroscope = data.result;
          this.isloading = false;
        }
      )
    }
    this.filter = filter;
  }

}

//with daily health and carrer horoscope api implemented
