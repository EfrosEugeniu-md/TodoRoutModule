import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Todo} from '../todo-model/todo.model';
import {ProductRepository} from '../todo-model/product.repository';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  private id: number;
  private subscription: Subscription;
  public todo: Todo;
  myForm: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private repository: ProductRepository) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
    this.todo = repository.getTodo(this.id);
    console.log('edit', this.todo);
    this.myForm = new FormGroup({

      title: new FormControl(this.todo.title, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]),

      description: new FormControl(this.todo.description, [
        Validators.required,
        Validators.minLength(4),
      ]),

      author: new FormControl(this.todo.author, [
        Validators.required,
        Validators.minLength(4),
      ]),

      priority: new FormControl(this.todo.priority, [
        Validators.required,
        Validators.minLength(4),
      ]),

      deadline: new FormControl(this.todo.deadline, [
        Validators.required,
        Validators.minLength(4),
      ])
    });

  }

  ngOnInit(): void {
  }

  onSumbit(): void {
    this.repository.saveTodo(this.todo);
  }

}
