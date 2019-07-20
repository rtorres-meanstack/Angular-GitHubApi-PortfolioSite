import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Task } from '../../shared/models/task';

import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  // private tasksRoute = 'http://localhost:3000/tasks';
  // public tasks: Task[];
  // @Input() task: Task;
  // @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  constructor(private ts: TasksService, private http: HttpClient) { }
  ngOnInit() {
    // this.getTasks();
  }
  // getTasks(){
  //   this.http.get<Task[]>(this.ts).subscribe(tasks => {
  //     this.tasks = tasks;
  //     console.log('Tasks', this.tasks);
  //   });
  // }

}
