import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../shared/models/task';
import { CreateTaskComponent } from '../../components/create-task/create-task.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getTasks();
  }
  getTasks(){
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks', this.tasks);
    });
  }

}
