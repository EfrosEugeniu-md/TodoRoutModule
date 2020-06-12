import {Injectable} from '@angular/core';
import {Todo} from './todo.model';
import {Observable, from} from 'rxjs';


@Injectable()
export class StaticDataSource {
  private todos: Todo[] = [
    new Todo(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Todo(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
    new Todo(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
    new Todo(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100),    
  ];

  getTodos(): Observable<Todo[]> {
    return from([this.todos]);
  }
}