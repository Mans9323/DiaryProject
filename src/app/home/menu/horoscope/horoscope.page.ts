import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../horoscope.service';
import { Horoscope } from '../horoscope.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.page.html',
  styleUrls: ['./horoscope.page.scss'],
})
export class HoroscopePage implements OnInit {
  loadHoroscope: Horoscope[];
  filterHoroscope: Horoscope[];
  private filter = 'week';

  constructor(private horoscopeService: HoroscopeService) { }

  ngOnInit() {
    this.loadHoroscope = this.horoscopeService.horoscopes;
    this.filterHoroscope = this.loadHoroscope;
    this.onFilterUpdate(this.filter);
  }

  onFilterUpdate(filter: string) {
    if(filter === "week") {
      this.filterHoroscope = this.loadHoroscope.filter(horoscope => horoscope.filterId === 'week');
    }else{
      this.filterHoroscope = this.loadHoroscope.filter(horoscope => horoscope.filterId === 'month');
    }
    this.filter = filter;
  }
  
}
