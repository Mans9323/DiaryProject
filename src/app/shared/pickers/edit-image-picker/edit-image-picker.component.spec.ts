import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditImagePickerComponent } from './edit-image-picker.component';

describe('EditImagePickerComponent', () => {
  let component: EditImagePickerComponent;
  let fixture: ComponentFixture<EditImagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImagePickerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
