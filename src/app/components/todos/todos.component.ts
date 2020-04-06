import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    // this.todos = this.todoService.getTodos();
     this.todoService.getTodos().subscribe(todos => {
       this.todos = todos;
     })
  }

  deleteTodo(todo:Todo) {
    // update ui
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // update server
    this.todoService.deleteTodo(todo).subscribe(() => console.log(this.todos));
  }

}
