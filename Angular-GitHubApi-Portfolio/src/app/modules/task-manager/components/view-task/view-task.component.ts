import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
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
    private ts: TasksService,
    private route: ActivatedRoute,
    private Location: Location,
    private http: HttpClient
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
