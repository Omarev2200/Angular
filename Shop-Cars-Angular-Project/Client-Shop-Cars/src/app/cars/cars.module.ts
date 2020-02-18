import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckPipe } from './check.pipe';



@NgModule({
  declarations: [
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent,
    CheckPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CreateComponent, 
    DeleteComponent, 
    DetailsComponent, 
    EditComponent
  ]
 
})
export class CarsModule { }
