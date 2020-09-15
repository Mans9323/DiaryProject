import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEntryPageRoutingModule } from './view-entry-routing.module';

import { ViewEntryPage } from './view-entry.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEntryPageRoutingModule,
    SharedModule
  ],
  declarations: [ViewEntryPage]
})
export class ViewEntryPageModule {}
