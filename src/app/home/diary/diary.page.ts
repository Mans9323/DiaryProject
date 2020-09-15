import { Component, OnInit, OnDestroy } from '@angular/core';
import { DiaryService } from './diary.service';
import { Entries } from './diary.model';
import { IonItemSliding } from '@ionic/angular';
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

  constructor(
    private diaryService: DiaryService, 
    private router: Router,
    ) {}

  ngOnInit() {
    this.entrySub = this.diaryService.diaryEntries.subscribe(diaryEntries => {
      this.loadedEntries = diaryEntries;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.diaryService.fetchEntries().subscribe(() => {
      this.isLoading = false;
    });
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
}
