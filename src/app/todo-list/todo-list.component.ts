import { OnInit } from '@angular/core';
//import { CommonModule } from '@angular/core';
import {Component} from '@angular/core';
import {ProductRepository} from '../todo-model/product.repository';
import {Todo} from '../todo-model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = [];

  constructor(private repository: ProductRepository ) {
    console.log(this.repository);
    console.log(this.todos);
  }

  ngOnInit(): void {
    this.repository.getTodos().subscribe(t => this.todos = t);
    console.log(this.todos);
  }

}
