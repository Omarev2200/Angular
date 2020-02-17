import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SingInComponent } from '../user/sing-in/sing-in.component';
import { SingUpComponent } from '../user/sing-up/sing-up.component';
import { ProfileComponent } from '../user/profile/profile.component';



@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports:[
    SingInComponent,
    SingUpComponent,
    ProfileComponent,
  ]
 
})
export class UserModule { }
