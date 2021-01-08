import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserHoroscopePageRoutingModule } from './user-horoscope-routing.module';

import { UserHoroscopePage } from './user-horoscope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserHoroscopePageRoutingModule
  ],
  declarations: [UserHoroscopePage]
})
export class UserHoroscopePageModule {}
