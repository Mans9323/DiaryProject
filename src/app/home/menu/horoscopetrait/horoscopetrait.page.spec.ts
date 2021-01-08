import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoroscopetraitPage } from './horoscopetrait.page';

describe('HoroscopetraitPage', () => {
  let component: HoroscopetraitPage;
  let fixture: ComponentFixture<HoroscopetraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopetraitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoroscopetraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
