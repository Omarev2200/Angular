import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';
import { CreateComponent } from './cars/create/create.component';
import { AuthGuard } from './auth.guard';

import { DetailsComponent } from './cars/details/details.component';
import { EditComponent } from './cars/edit/edit.component';
import { MyAdCarsComponent } from './cars/my-ad-cars/my-ad-cars.component';
import { ProfileComponent } from './user/profile/profile.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'singin',
    component: SingInComponent,
  },
  {
    path: 'singup',
    component: SingUpComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate:[AuthGuard],
   
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
