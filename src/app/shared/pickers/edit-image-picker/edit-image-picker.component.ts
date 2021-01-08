import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { EditEntryPage } from 'src/app/home/diary/edit-entry/edit-entry.page';


@Component({
  selector: 'app-edit-image-picker',
  templateUrl: './edit-image-picker.component.html',
  styleUrls: ['./edit-image-picker.component.scss'],
})
export class EditImagePickerComponent implements OnInit {

  @ViewChild('filePicker') filePickerRef: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string | File>();
  @Input() showPreview = false;
  selectedImage: string;
  selectedImages: string;
  usePicker = false;

  constructor(private platform: Platform, private editPage: EditEntryPage) { }

  ngOnInit() {
    console.log('Mobile:', this.platform.is('mobile'));
    console.log('Hybrid:', this.platform.is('hybrid'));
    console.log('iOS:', this.platform.is('ios'));
    console.log('Android:', this.platform.is('android'));
    console.log('Desktop:', this.platform.is('desktop'));
    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.usePicker = true;
    }
    this.selectedImages = this.editPage.entry.imageUrl
    if(this.selectedImages === '/assets/img/default.jpg'){
      return;
    }else{
    this.selectedImage = this.editPage.entry.imageUrl;
    }

  }

  onPickImage() {
    if(!Capacitor.isPluginAvailable('Camera')) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      width: 600,
      resultType: CameraResultType.DataUrl
    }).then(image => {
      this.selectedImage = image.dataUrl;
      this.imagePick.emit(image.dataUrl);
    }).catch(error => {
      console.log(error);
      if(this.usePicker) {
      this.filePickerRef.nativeElement.click();
      }
      return false;
    });
  }

  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if(!pickedFile){
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl;
      this.imagePick.emit(pickedFile);
    };
    fr. readAsDataURL(pickedFile);
  }

}