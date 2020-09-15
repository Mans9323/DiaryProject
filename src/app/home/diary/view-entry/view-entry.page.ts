import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entries } from '../diary.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DiaryService } from '../diary.service';
import { Subscription } from 'rxjs';
import { MapModalComponent } from '../../../shared/map-modal/map-modal.component';
import { AuthService } from '../../../auth/auth.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage implements OnInit, OnDestroy{
  entry: Entries;
  isLoading = false;
  entrySub: Subscription;
  
  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController, 
    private diaryService: DiaryService, 
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('entryId')) {
        this.navCtrl.navigateBack('/home/tabs/diary');
        return;
      }
      this.isLoading = true;
      this.entrySub =  this.diaryService.getEntry(paramMap.get('entryId')).subscribe(diaryEntries => {
        this.entry = diaryEntries;
        this.isLoading = false;
      }, error => {
        this.alertCtrl.create({ 
            header: 'An error occured!', 
            message: 'Could not load the Memory. Please try again!', 
            buttons:[{
                text: 'Okay',
                handler: () => {
                  this.router.navigate(['/home/tabs/diary']);
                } 
              }
            ] 
          }).then(alertEl => alertEl.present());
      }
      );
    });
  }

  onCancelEntry(entryId: string){
    this.loadingCtrl.create({message: 'Deleting...'}).then(loadingEl => {
      loadingEl.present();
      this.diaryService.cancelEntry(entryId).subscribe(() => {
        loadingEl.dismiss();
        this.router.navigate(['/home/tabs/diary']);
      });
    });
    
  }

  onShowFullMap() {
    this.modalCtrl.create({component: MapModalComponent, componentProps: {
   center: {lat: this.entry.location.lat, lng: this.entry.location.lng},
   selectable: false,
   closeButtonText: 'Close',
   title: this.entry.location.address
    } 
  }).then(modalEl => {
      modalEl.present();
    })
  }


  ngOnDestroy() {
    if(this.entrySub){
      this.entrySub.unsubscribe();
    }
  }
}
