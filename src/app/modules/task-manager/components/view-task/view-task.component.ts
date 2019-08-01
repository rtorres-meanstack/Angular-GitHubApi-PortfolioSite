import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import Task from '../../shared/models/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  tasks: Task[];
  
  constructor(
    private ts: TasksService
  ) { }

  ngOnInit() {
    this.ts
      .getTasks()
      .subscribe((data: Task[]) => {
        this.tasks = data;
      })
  }
  deleteTask(id){
    this.ts.deleteTask(id).subscribe(res => {
      console.log('Deleted');
    })
  }
}
