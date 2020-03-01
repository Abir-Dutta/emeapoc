import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInUpComponent} from './sign-in-up.component';

const routes: Routes = [
  {
    path: 'session',
    component: SignInUpComponent,
    children: [
      {
        path: 'signin',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./sign-in/sign-in.module').then(m => m.SignInModule)
          }
        ]
      },
      {
        path: 'signup',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./sign-up/sign-up.module').then(m => m.SignUpModule)
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInUpRoutingModule { }
