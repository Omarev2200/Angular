import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent
  ]
})
export class CarsModule { }
