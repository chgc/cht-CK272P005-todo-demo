import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  newTodo: string;
  todoList = [];
  addTodo() {
    this.todoList.push(this.newTodo);
    this.newTodo = '';
  }
}
