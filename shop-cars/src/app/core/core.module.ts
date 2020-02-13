import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [NavigationComponent,
     FooterComponent,
     SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    SpinnerComponent,
    FooterComponent
  ]
})
export class CoreModule { }
