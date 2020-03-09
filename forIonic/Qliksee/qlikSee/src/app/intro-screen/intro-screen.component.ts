import { Component, OnInit, Host } from '@angular/core';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { PATH } from '../constants';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-intro-screen',
  templateUrl: './intro-screen.component.html',
  styleUrls: ['./intro-screen.component.css'],
})
export class IntroScreenComponent implements OnInit {
  signUpPath = PATH.SIGN_UP;
  signInPath = PATH.SIGN_IN;

  appComponent = null;

  constructor(@Host() appComponent: AppComponent) {
    this.appComponent = appComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.appComponent.navigateSearch(searchPath);
  }


}
