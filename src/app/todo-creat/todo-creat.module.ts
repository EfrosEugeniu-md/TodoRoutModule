import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCreatComponent } from './todo-creat/todo-creat.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [TodoCreatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TodoCreatModule { }
