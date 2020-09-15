import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEntryPageRoutingModule } from './edit-entry-routing.module';

import { EditEntryPage } from './edit-entry.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditEntryPageRoutingModule
  ],
  declarations: [EditEntryPage]
})
export class EditEntryPageModule {}
