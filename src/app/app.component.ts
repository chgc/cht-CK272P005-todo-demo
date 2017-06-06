import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  id = 0;
  state = 'all';
  newTodo: string;
  todoList = [];
  displayTodoList = [];
  addTodo() {
    this.todoList = [
      ...this.todoList,
      {id: this.getId(), content: this.newTodo, isCompleted: false}
    ];
    this.newTodo = '';
  }
  remove(todo) {
    const idx = this.todoList.findIndex(x => x.id === todo.id);
    if (idx > -1) {
      this.todoList.splice(idx, 1);
    }
  }

  toggleAll(event) {
    this.displayTodoList.map(x => x.isCompleted = event.target.checked);
  }

  getDisplayTodo(value) {
    this.displayTodoList = [...value];
  }

  clearCompleted() {
    this.todoList = this.todoList.filter(x => !x.isCompleted);
  }
  getId() {
    this.id++;
    return this.id;
  }
}
