import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { IntroScreenComponent } from './intro-screen/intro-screen.component';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./splash-screen/splash-screen.component').then(m => m.SplashScreenComponent)
  // },
  { path: '', component: SplashScreenComponent },
  { path: 'introscreen', component: IntroScreenComponent },
  { path: 'session', loadChildren: './sign-in-up/sign-in-up.module#SignInUpModule' },
  { path: 'search', loadChildren: './onbording/onbording.module#OnbordingModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
