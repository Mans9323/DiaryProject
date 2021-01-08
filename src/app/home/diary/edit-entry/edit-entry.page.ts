import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryService } from '../diary.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Entries } from '../diary.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PlaceLocation } from '../location.model';

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
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage implements OnInit, OnDestroy {
  entry: Entries;
  entryId: string;
  form: FormGroup;
  isLoading = false;
  private entrySub: Subscription;
  imagePicked = false;

  constructor(
    private route: ActivatedRoute, 
    private diaryService: DiaryService, 
    private navCtrl: NavController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('entryId')) {
        this.navCtrl.navigateBack('/home/tabs/diary');
        return;
      }
      this.entryId = paramMap.get('entryId');
      this.isLoading = true;
      this.entrySub = this.diaryService
      .getEntry(paramMap.get('entryId'))
      .subscribe(diaryEntries => {
        this.entry = diaryEntries;
        this.form = new FormGroup({
          title: new FormControl(this.entry.title,{
            updateOn: 'blur',
            validators:[Validators.required]
          }),
          mood: new FormControl(this.entry.mood,{
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          description: new FormControl(this.entry.description,{
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(360)]
          }),
          dateRange: new FormControl(this.entry.dateRange.toISOString(),{
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          time: new FormControl(this.entry.time, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          location: new FormControl(this.entry.location),
          image: new FormControl(this.entry.imageUrl)
        });
        this.isLoading = false;
      }, error => {
        this.alertCtrl.create(
          {
            header: 'An error occured!', 
            message: 'Entry could not be fetched. Please try again later.',
            buttons: [{text: 'Okay', handler: () => {
              this.router.navigate(['/home/tabs/diary']);
            }
          }
        ]
        })
        .then(alertEl => {
        alertEl.present();
        });
      }
    );
  });
}

onLocationPicked(location: PlaceLocation) {
  this.form.patchValue({location: location});
}

onImagePicked(imageData: string | File) {
  let imageFile;
  if(typeof imageData === 'string') {
    try {
      this.imagePicked = true;
      const base64ContentArray = imageData.split(',');
      const mimeType = base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0];
      imageFile = base64toBlob(
        base64ContentArray[1],
        mimeType
        );
    } catch (error) {
      console.log(error);
      this.imagePicked = false;
      return;
    }
  } else {
    imageFile = imageData;
    this.imagePicked = true;
  }
  if(this.imagePicked){
  this.form.patchValue({ image: imageFile });
  }
}

  onEditEntry() {
    if(!this.form.valid){
      return;
    }
    this.loadingCtrl.create({
      message: 'Updating memory.....'
    }).then(loadingEl => {
      loadingEl.present();
      if(this.imagePicked){
        this.diaryService.uploadImage(this.form.get('image').value).pipe(switchMap(resData => {
          return this.diaryService.updateEntry(
            this.entry.id,
            this.form.value.title,
            this.form.value.mood,
            this.form.value.description,
            this.form.value.dateRange,
            this.form.value.time,
            resData.imageUrl,
            this.form.value.location
            );
        })
        ).subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/diary']);
        });
      }else{
        return this.diaryService.updateEntry(
          this.entry.id,
            this.form.value.title,
            this.form.value.mood,
            this.form.value.description,
            this.form.value.dateRange,
            this.form.value.time,
            this.form.get('image').value,
            this.form.value.location
        ).subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/diary']);
        });
      }
    }); 
  }

  ngOnDestroy() {
    if(this.entrySub){
      this.entrySub.unsubscribe();
    }
  }
}
