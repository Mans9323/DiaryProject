import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../horoscope.service';
import { UserHoroscope } from '../../userHoroscope.model';
import { Result } from '../result.model';

@Component({
  selector: 'app-user-horoscope',
  templateUrl: './user-horoscope.page.html',
  styleUrls: ['./user-horoscope.page.scss'],
})
export class UserHoroscopePage implements OnInit {
  userSign : UserHoroscope;
  isloading = false;
  userLoading = false;
  title: string;
  descHoroscope: Result;
  private filter = 'daily';

  constructor(private horoscopeService: HoroscopeService) { }

  ngOnInit() {
    this.userLoading = true;
   this.horoscopeService.getUserHoroscope().subscribe(resData => {
      this.userSign = resData;
      this.title = resData.title;
      this.userLoading = false
      this.onFilterUpdate(this.filter);
     });
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

