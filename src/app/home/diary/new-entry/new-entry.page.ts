import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DiaryService } from '../diary.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PlaceLocation } from '../location.model';
import { switchMap } from 'rxjs/operators';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.page.html',
  styleUrls: ['./new-entry.page.scss'],
})
export class NewEntryPage implements OnInit {
  form: FormGroup;
  private defaultImage = '/assets/img/default.jpg';

  constructor(private diaryService: DiaryService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() { 
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      mood: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(360)]
      }),
      dateRange: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      time: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      location: new FormControl(null),
      image: new FormControl(null)
    });
  }

  onLocationPicked(location: PlaceLocation) {
    this.form.patchValue({location: location});
  }

  onImagePicked(imageData: string | File) {
    let imageFile;
    if(typeof imageData === 'string') {
      try {
        const base64ContentArray = imageData.split(',');
        const mimeType = base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0];
        imageFile = base64toBlob(
          base64ContentArray[1],
          mimeType
          );
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      imageFile = imageData;
    }
    this.form.patchValue({ image: imageFile });
  }

  onCreateEntry()  {
    if(!this.form.valid){
      return;
    }
    console.log(this.form.value);
    this.loadingCtrl.create({
      message: 'Creating Memories....'
    }).then(loadingEl => {
      loadingEl.present();
      if(!this.form.get('image').value){
        return this.diaryService.addDiaryEntry(
          this.form.value.title,
          this.form.value.mood,
          new Date(this.form.value.dateRange),
          this.form.value.time,
          this.form.value.description,
          this.form.value.location,
          this.defaultImage
        ).subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/diary']);
        })
        
      }else{
        this.diaryService.uploadImage(this.form.get('image').value).pipe(switchMap(uploadRes => {
          return this.diaryService.addDiaryEntry(
            this.form.value.title,
            this.form.value.mood,
            new Date(this.form.value.dateRange),
            this.form.value.time,
            this.form.value.description,
            this.form.value.location,
            uploadRes.imageUrl
          );
        })
        )
        .subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/diary']);
        });
      }
    });
    
  }
}
