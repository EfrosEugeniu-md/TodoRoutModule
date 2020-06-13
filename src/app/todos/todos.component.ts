import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo-model/todo.model';
import {ProductRepository} from '../todo-model/product.repository';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private repository: ProductRepository) { }

  ngOnInit(): void {
    this.repository.getTodos().subscribe(t => this.todos = t);
  }

}
