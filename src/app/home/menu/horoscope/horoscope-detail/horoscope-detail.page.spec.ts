import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoroscopeDetailPage } from './horoscope-detail.page';

describe('HoroscopeDetailPage', () => {
  let component: HoroscopeDetailPage;
  let fixture: ComponentFixture<HoroscopeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoroscopeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
