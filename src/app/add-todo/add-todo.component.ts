import { Component, OnInit } from '@angular/core';
import { Todo } from '../entity/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
  ) { }

  ngOnInit() {
  }

  saveTodo() {
  }


}
