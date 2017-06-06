import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  newTodo: string;
  addTodo() {
    console.log(this.newTodo);
    this.newTodo = '';
  }
}
