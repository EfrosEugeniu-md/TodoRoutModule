import {Injectable, OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {Observable, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductRepository implements OnInit {
  // @ts-ignore
  private todos: Todo[] = [
    new Todo(1, 'tasc 1', 'Найти и выучить учебник по квантовой физике', 'Oleg', 'h', new Date('10-10-20')),
    new Todo(2, 'tasc 2', 'Сходить на семинар по программированию', 'Vasea', 'h', new Date('02-03-19')),
  ];

  constructor() {
  }
  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
  }

  getTodos(): Observable<Todo[]> {
    return from([this.todos]);
  }

  getTodo(id: number): Todo {
    return this.todos.find(t => t.id == id);
  }

  saveTodo(todo: Todo) {
    console.log(todo);
    if (todo.id == null || todo.id === 0) {
      todo.id = 8;
      this.todos.push(todo);
    } else {
      this.todos.splice(this.todos.findIndex(t => t.id === todo.id),
        1, todo);
    }
  }

  deleteProduct(id: number) {
    this.todos.splice(this.todos.findIndex(t => t.id === id),
      1);
  }
}
