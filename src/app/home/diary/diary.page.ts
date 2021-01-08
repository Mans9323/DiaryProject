import { Component, OnInit, OnDestroy } from '@angular/core';
import { DiaryService } from './diary.service';
import { Entries } from './diary.model';
import { IonItemSliding, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit, OnDestroy {
  loadedEntries: Entries[];
  isLoading = false;
  private entrySub: Subscription;
  modifiedEntries: Entries[];
  subscribe : any;

  constructor(
    private diaryService: DiaryService, 
    private router: Router,
    public platform: Platform
    ) {}

  ngOnInit() {
    this.entrySub = this.diaryService.diaryEntries.subscribe(diaryEntries => {
      this.loadedEntries = diaryEntries.sort((a,b) => {
        return Number(new Date(b.dateRange)) - Number (new Date(a.dateRange))
      });
      this.modifiedEntries = JSON.parse(JSON.stringify(this.loadedEntries));
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.diaryService.fetchEntries().subscribe(() => {
      this.isLoading = false;
    });
    this.subscribe = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
  }

  ionViewWillLeave() {
    this.subscribe.unsubscribe();
  }

  onEdit(entryId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/','home','tabs','diary','edit', entryId]);
    console.log('Editting item', entryId);
  }

  addNewEntry(){
    this.router.navigateByUrl('/home/tabs/diary/new');
  }

  ngOnDestroy() {
    if(this.entrySub){
      this.entrySub.unsubscribe();
    }
  }

  filterByDate(filter:string) {
    let filterMonth = ("0" + (new Date(filter).getMonth() +1)).slice(-2);
    let filterYear = (new Date(filter).getFullYear());
    this.modifiedEntries = this.loadedEntries.filter(entries => {
      let month = ("0" + (new Date(entries.dateRange).getMonth() +1)).slice(-2);
      let year = (new Date(entries.dateRange).getFullYear())
      if(month === filterMonth && year === filterYear){
        return entries;
      }else{
        return;
      }
    })
  }
}
