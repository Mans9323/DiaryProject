import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoroscopetraitDetailPageRoutingModule } from './horoscopetrait-detail-routing.module';

import { HoroscopetraitDetailPage } from './horoscopetrait-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoroscopetraitDetailPageRoutingModule
  ],
  declarations: [HoroscopetraitDetailPage]
})
export class HoroscopetraitDetailPageModule {}
