import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SingInComponent } from '../user/sing-in/sing-in.component';
import { SingUpComponent } from '../user/sing-up/sing-up.component';
import { UserRoutingModule } from './user-routing.module';




@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
    
  ],
  exports:[
    SingInComponent,
    SingUpComponent,
  ]
 
})
export class UserModule { }
