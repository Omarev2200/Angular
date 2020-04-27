import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
    {
        path: 'singin',
        component: SingInComponent,
        
        
      },
      {
        path: 'singup',
        component: SingUpComponent,
      },
     
  ];
  
  export const UserRoutingModule = RouterModule.forChild(routes);