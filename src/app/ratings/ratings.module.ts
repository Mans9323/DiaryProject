import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgCalendarModule  } from 'ionic2-calendar';
import { IonicModule } from '@ionic/angular';

import { RatingsPageRoutingModule } from './ratings-routing.module';

import { RatingsPage } from './ratings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingsPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [RatingsPage]
})
export class RatingsPageModule {}
