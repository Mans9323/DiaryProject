import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {

  eventSource: [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  }




  constructor() { }

  ngOnInit() {
  }

  onViewTitleChanged(title){
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time:' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ',diabled: ' + ev.disabled);
  }

  onCurrentDateChanged(event:Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev){
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

}
