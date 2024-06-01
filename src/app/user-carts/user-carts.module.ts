
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercartComponent } from './components/usercart/usercart.component';



@NgModule({
  declarations: [
    UsercartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UsercartComponent
  ]
})
export class UserCartsModule { }
