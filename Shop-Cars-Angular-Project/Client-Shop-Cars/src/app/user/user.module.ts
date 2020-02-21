import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SingInComponent } from '../user/sing-in/sing-in.component';
import { SingUpComponent } from '../user/sing-up/sing-up.component';




@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,    
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports:[
    SingInComponent,
    SingUpComponent,
  ]
 
})
export class UserModule { }
