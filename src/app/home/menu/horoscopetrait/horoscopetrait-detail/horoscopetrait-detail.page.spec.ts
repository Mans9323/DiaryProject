import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoroscopetraitDetailPage } from './horoscopetrait-detail.page';

describe('HoroscopetraitDetailPage', () => {
  let component: HoroscopetraitDetailPage;
  let fixture: ComponentFixture<HoroscopetraitDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopetraitDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoroscopetraitDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
