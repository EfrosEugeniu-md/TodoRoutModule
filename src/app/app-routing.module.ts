import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';
import { TodoCreatComponent } from './todo-creat/todo-creat/todo-creat.component';
import {TodoEditComponent} from './todo-edit/todo-edit/todo-edit.component'



const routes: Routes = [
  {
    path: "",
    component: TodoListComponent
  },
  {    
    path: "creat",
    component: TodoCreatComponent
    //loadChildren: () => import('./todo-creat/todo-creat.module').then(mod => mod.TodoCreatModule)
  },

    { 
      path: 'item/:id', 
    component: TodoEditComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
