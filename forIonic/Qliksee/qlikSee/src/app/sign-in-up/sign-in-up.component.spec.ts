import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInUpComponent } from './sign-in-up.component';

describe('SignInUpComponent', () => {
  let component: SignInUpComponent;
  let fixture: ComponentFixture<SignInUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInUpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
