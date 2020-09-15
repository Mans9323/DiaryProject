import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryService } from '../diary.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Entries } from '../diary.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

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
          })
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

  onEditEntry() {
    if(!this.form.valid){
      return;
    }
    this.loadingCtrl.create({
      message: 'Updating memory.....'
    }).then(loadingEl => {
      loadingEl.present();
      this.diaryService.updateEntry(
        this.entry.id, 
        this.form.value.title, 
        this.form.value.mood, 
        this.form.value.description
        ).subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/diary']);
        });
    });
  }

  ngOnDestroy() {
    if(this.entrySub){
      this.entrySub.unsubscribe();
    }
  }
}
