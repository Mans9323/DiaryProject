import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entries } from '../diary.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DiaryService } from '../diary.service';
import { Subscription } from 'rxjs';
import { MapModalComponent } from '../../../shared/map-modal/map-modal.component';
import { UserHoroscope } from '../../menu/userHoroscope.model';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage implements OnInit, OnDestroy{
  entry: Entries;
  isLoading = false;
  entrySub: Subscription;
  cardImage: string;
  userSign : UserHoroscope;
  horoscopeSub: Subscription;
  
  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController, 
    private diaryService: DiaryService, 
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
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
    this.alertCtrl.create({
      header: 'Delete Page',
      message: 'Are you sure you want to delete this page?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.loadingCtrl.create({message: 'Deleting...'}).then(loadingEl => {
            loadingEl.present();
            this.diaryService.cancelEntry(entryId).subscribe(() => {
              loadingEl.dismiss();
              this.router.navigate(['/home/tabs/diary']);
            });
          });
        }
      },
    {
      text: 'No'
    }]
    }).then(alertEl => alertEl.present());
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

  showAlert(){
    this.alertCtrl.create({
      header: 'Location Not Found',
      message: 'Edit to enter location',
      buttons: [{
        text: 'Okay'
      }]
    }).then(alertEl => alertEl.present());
  }


  ngOnDestroy() {
    if(this.entrySub && this.horoscopeSub){
      this.entrySub.unsubscribe();
      this.horoscopeSub.unsubscribe();
    }
  }
}
