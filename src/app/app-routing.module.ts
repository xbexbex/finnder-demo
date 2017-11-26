import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecommendComponent } from './components/recommend/recommend.component';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes = [
  { path: 'signing-up', component: SignupComponent },
  { path: 'home', component: RecommendComponent },
  { path: '**', redirectTo: 'signing-up'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }