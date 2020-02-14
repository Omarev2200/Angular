import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInComponent } from '../user/sing-in/sing-in.component';
import { SingUpComponent } from '../user/sing-up/sing-up.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LogoutComponent } from '../user/logout/logout.component';

@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,
    ProfileComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingInComponent,
    SingUpComponent,
    ProfileComponent,
    LogoutComponent,
  ]
})
export class UserModule { }
