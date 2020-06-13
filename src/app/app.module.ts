import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {CreateTodoComponent} from './create-todo/create-todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditTodoComponent} from './edit-todo/edit-todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'creat',
    component: CreateTodoComponent
  },
  {
    path: 'item/:id',
    component: EditTodoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CreateTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
