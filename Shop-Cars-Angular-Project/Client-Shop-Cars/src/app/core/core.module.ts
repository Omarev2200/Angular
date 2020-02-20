import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
     NavigationComponent,
     FooterComponent,
     SpinnerComponent,
     SearchComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
    SpinnerComponent,
    SearchComponent
  ]
 
})
export class CoreModule { }
