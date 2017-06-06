import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  @Input('todoList')
  set todoList(value) {
    this._todoList = value;
    setTimeout(() => {
      this.setFilter(this.state);
    }, 0);
  }
  get todoList() {
    return this._todoList;
  }

  @Output() onChange: EventEmitter<any[]> = new EventEmitter();

  @Output('clearCompleted')
  _clearCompleted: EventEmitter<any> = new EventEmitter();
  state: string = 'all';
  private _todoList = [];
  constructor() {}

  ngOnInit() {}

  getItemCount() {
    return this.todoList.filter(x => !x.isCompleted).length;
  }

  setFilter(state) {
    let displayTodoList = [];
    this.state = state;
    switch (state) {
      case 'active':
        displayTodoList = this.todoList.filter(x => !x.isCompleted);
        break;
      case 'completed':
        displayTodoList = this.todoList.filter(x => x.isCompleted);
        break;
      default:
        displayTodoList = [...this.todoList];
        break;
    }
    this.onChange.emit(displayTodoList);
  }

  clearCompleted() {
    this._clearCompleted.emit();
  }
}
