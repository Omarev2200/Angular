import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthLoginregisterGuard } from './user/authLoginRgister.guard';
import { SearchComponent } from './core/search/search.component';



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
    path: 'search',
    component: SearchComponent,
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
