import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoroscopeDetailPageRoutingModule } from './horoscope-detail-routing.module';

import { HoroscopeDetailPage } from './horoscope-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoroscopeDetailPageRoutingModule
  ],
  declarations: [HoroscopeDetailPage]
})
export class HoroscopeDetailPageModule {}
