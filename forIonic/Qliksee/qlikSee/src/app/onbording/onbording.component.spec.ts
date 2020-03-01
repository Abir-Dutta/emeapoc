import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnbordingComponent } from './onbording.component';

describe('OnbordingComponent', () => {
  let component: OnbordingComponent;
  let fixture: ComponentFixture<OnbordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnbordingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnbordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
