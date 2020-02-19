import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
     NavigationComponent,
     FooterComponent,
     SpinnerComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
    SpinnerComponent
  ]
 
})
export class CoreModule { }
