import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from '../auth.guard';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { MyAdCarsComponent } from './my-ad-cars/my-ad-cars.component';


const routes: Routes = [
    {
        path: 'create',
        component: CreateComponent,
        canActivate:[AuthGuard],
       
    
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
        path: 'myAdCars/:id',
        component: MyAdCarsComponent,
        canActivate:[AuthGuard]
        
      },
     
  ];
  
  export const AdCarsRoutingModule = RouterModule.forChild(routes);