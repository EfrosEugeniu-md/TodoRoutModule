import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  id: number;
    private subscription: Subscription;
    constructor(private activateRoute: ActivatedRoute){
         
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

  ngOnInit(): void {
  }

}
