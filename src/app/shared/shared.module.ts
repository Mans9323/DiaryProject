import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { ImagePickerComponent } from './pickers/image-picker/image-picker.component';
import { EditImagePickerComponent } from './pickers/edit-image-picker/edit-image-picker.component';
import { EditLocationPickerComponent } from './pickers/edit-location-picker/edit-location-picker.component';



@NgModule({
    declarations: [LocationPickerComponent, MapModalComponent, ImagePickerComponent, EditImagePickerComponent, EditLocationPickerComponent],
    imports: [CommonModule, IonicModule],
    exports: [LocationPickerComponent, MapModalComponent, ImagePickerComponent, EditImagePickerComponent, EditLocationPickerComponent],
    entryComponents: [MapModalComponent]
})
export class SharedModule {}