import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';
import { CreateComponent } from './cars/create/create.component';
import { AuthArticleGuard } from './authArticle.guard';
import { SingInsingUpGuard } from './sing-insing-up.guard';
import { DetailsComponent } from './cars/details/details.component';
import { EditComponent } from './cars/edit/edit.component';


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
    path: 'create',
    component: CreateComponent,
    canActivate:[AuthArticleGuard]
  },
  {
    path: 'detail/:id',
    component: DetailsComponent
    
  },
  {
    path: 'edit/:id',
    component: EditComponent
    
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
