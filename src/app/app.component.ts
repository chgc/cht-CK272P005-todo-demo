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
    this.todoList.push(
        {id: this.getId(), content: this.newTodo, isCompleted: false});
    this.newTodo = '';
    this.setFilter(this.state);
  }
  remove(todo) {
    const idx = this.todoList.findIndex(x => x.id === todo.id);
    if (idx > -1) {
      this.todoList.splice(idx, 1);
    }
    this.setFilter(this.state);
  }

  toggleAll(event) {
    this.displayTodoList.map(x => x.isCompleted = event.target.checked);
  }

  getItemCount() {
    return this.todoList.filter(x => !x.isCompleted).length;
  }

  setFilter(state) {
    this.state = state;
    switch (state) {
      case 'active':
        this.displayTodoList = this.todoList.filter(x => !x.isCompleted);
        break;
      case 'completed':
        this.displayTodoList = this.todoList.filter(x => x.isCompleted);
        break;
      default:
        this.displayTodoList = [...this.todoList];
        break;
    }
  }

  clearCompleted() {
    this.todoList = this.todoList.filter(x => !x.isCompleted);
    this.setFilter(this.state);
  }
  getId() {
    this.id++;
    return this.id;
  }
}
