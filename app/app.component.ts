import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckboxChangeEvent } from 'primeng/checkbox';

import { AppService } from './app.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('todoTask') todoTask:any;
  task = '';
  todos: Todo[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.appService.getTodoList().subscribe((res) => {
      this.todos = res;
    });
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.appService.updateToDo({...todo,completed:e.checked}).subscribe((res)=>{

    })

  }
  onDelete(e: unknown, id: Todo['id']) {
    this.appService.deleteToDo(id).subscribe((res)=>{
this.getList()
    })
  }
  addTodo() {
    this.appService
      .addToDoList({ task: this.task, completed: false })
      .subscribe((res) => {
        this.todoTask.reset();
        this.getList();
      });
  }
}
