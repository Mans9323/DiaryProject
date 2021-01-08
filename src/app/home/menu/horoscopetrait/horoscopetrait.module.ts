import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoroscopetraitPageRoutingModule } from './horoscopetrait-routing.module';

import { HoroscopetraitPage } from './horoscopetrait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoroscopetraitPageRoutingModule
  ],
  declarations: [HoroscopetraitPage]
})
export class HoroscopetraitPageModule {}
