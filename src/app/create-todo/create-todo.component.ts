import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductRepository} from '../todo-model/product.repository';
import {Todo} from '../todo-model/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  title: string;
  description: string;
  author: string;
  priority: string;
  deadline: Date;

  myForm: FormGroup;

  constructor(private repository: ProductRepository) {
    this.myForm = new FormGroup({

      title: new FormControl(null, [
        Validators.required,
        // Validators.minLength(4),
        //  Validators.maxLength(15)
      ]),

      description: new FormControl(null, [
        Validators.required,
        // Validators.minLength(4),
      ]),

      author: new FormControl(null, [
        Validators.required,
        //  Validators.minLength(4),
      ]),

      priority: new FormControl(null, [
        Validators.required,
        //   Validators.minLength(4),
      ]),

      deadline: new FormControl(null, [
        Validators.required,
        //  Validators.minLength(4),
      ])
    });

  }

  ngOnInit(): void {
  }
  onSumbit(): void {
    this.repository.saveTodo(new Todo(null, this.title, this.description, this.author, this.priority, this.deadline));
    this.title = null;
    this.description = null;
    this.deadline = null;
    this.author = null;
    this.priority = null;
  }
}
