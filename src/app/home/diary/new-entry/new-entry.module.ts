import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEntryPageRoutingModule } from './new-entry-routing.module';

import { NewEntryPage } from './new-entry.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    NewEntryPageRoutingModule,
    SharedModule
  ],
  declarations: [NewEntryPage]
})
export class NewEntryPageModule {}
