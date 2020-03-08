import { Component, OnInit, Host } from '@angular/core';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { PATH } from '../constants';

@Component({
  selector: 'app-intro-screen',
  templateUrl: './intro-screen.component.html',
  styleUrls: ['./intro-screen.component.css'],
})
export class IntroScreenComponent implements OnInit {
  signUpPath = PATH.SIGN_UP;
  signInPath = PATH.SIGN_IN;

  onboarding = null;

  constructor(@Host() onboardingComponent: OnboardingComponent) {
    this.onboarding = onboardingComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.onboarding.navigateSearch(searchPath);
  }


}
