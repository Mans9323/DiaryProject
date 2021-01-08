import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  subscribe : any;
  constructor(public platform: Platform) { }

  ngOnInit() {
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
