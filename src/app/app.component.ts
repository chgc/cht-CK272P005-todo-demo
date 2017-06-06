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
  remove(todo) {
    const idx = this.todoList.findIndex(x => x.id === todo.id);
    if (idx > -1) {
      this.todoList.splice(idx, 1);
    }
  }

  toggleAll(event) {
    this.todoList.map(x => x.isCompleted = event.target.checked);
  }

  getItemCount() {
    return this.todoList.filter(x => !x.isCompleted).length;
  }
  getId() {
    this.id++;
    return this.id;
  }
}
