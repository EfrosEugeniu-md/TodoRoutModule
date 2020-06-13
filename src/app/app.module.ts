import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import { TodosComponent } from './todos/todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'creat',
    component: CreateTodoComponent
    // loadChildren: () => import('./todo-creat/todo-creat.module').then(mod => mod.TodoCreatModule)
  },

  {
    path: 'item/:id',
    component: TodoEditComponent
  }
];





@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(routes),
    ReactiveFormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
