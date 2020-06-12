import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoModelModule} from '../todo-model/todo-model.module';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    TodoModelModule,
    CommonModule,
    //BrowserModule
  ],
  exports: [TodoListComponent],
})
export class TodoListModule { }
