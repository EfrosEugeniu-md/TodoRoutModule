import {Injectable, OnInit} from '@angular/core';
import {Todo} from './todo.model';

import {Observable, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRepository implements OnInit {
  // @ts-ignore
  private todos: Todo[] = [

    new Todo(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 'h'),
    new Todo(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 'h'),
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
      this.todos.push(todo);
    } else {
      this.todos.splice(this.todos.findIndex(t => t.id === todo.id),
        1, todo);

      /* this.dataSource.updateProduct(product).subscribe(p => {
          this.products.splice(this.products.
              findIndex(p => p.id == product.id), 1, product);
      }); */
    }
  }


  deleteProduct(id: number) {
    this.todos.splice(this.todos.findIndex(t => t.id === id),
      1);

    /*  this.dataSource.deleteProduct(id).subscribe(p => {
         this.products.splice(this.products.
             findIndex(p => p.id == id), 1);
     }) */
  }
}
