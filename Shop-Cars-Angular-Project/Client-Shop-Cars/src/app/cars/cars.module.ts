import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckPipe } from './check.pipe';
import { MyAdCarsComponent } from './my-ad-cars/my-ad-cars.component';
import { AdCarsRoutingModule } from './ad-cars-routing.module';
import { CapitalizePipe } from './pipes/capitalize.pipe';




@NgModule({
  declarations: [
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent,
    CheckPipe,
    MyAdCarsComponent,
    CapitalizePipe
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AdCarsRoutingModule
  ],
  exports:[
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent,
    MyAdCarsComponent,
    CapitalizePipe
    
  ]
 
})
export class CarsModule { }
