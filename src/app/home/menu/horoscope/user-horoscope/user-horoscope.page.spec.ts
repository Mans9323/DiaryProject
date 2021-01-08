import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserHoroscopePage } from './user-horoscope.page';

describe('UserHoroscopePage', () => {
  let component: UserHoroscopePage;
  let fixture: ComponentFixture<UserHoroscopePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHoroscopePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserHoroscopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
