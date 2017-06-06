import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  id = 0;
  newTodo: string;
  todoList = [];
  addTodo() {
    this.todoList.push(
        {id: this.getId(), content: this.newTodo, isCompleted: false});
    this.newTodo = '';
  }

  getId() {
    this.id++;
    return this.id;
  }
}
