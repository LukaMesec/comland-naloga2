import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.email == undefined && this.telephone == undefined) {
      const todo = {
        title: this.title,
        telephone: 'no contact information',
        email: '',
        spol: this.spol,
        completed: false,
      };
    } else {
      const todo = {
        title: this.title,
        telephone: this.telephone + '|',
        email: this.email,
        spol: this.spol,
        completed: false,
      };
    }
    // if (todo.email.length && todo.telephone.length == 0) {
    //   todo.email = 'tre';
    // }

    this.addTodo.emit(todo);
  }
}
