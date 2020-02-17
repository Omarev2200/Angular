import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent
  ]
 
})
export class CarsModule { }
