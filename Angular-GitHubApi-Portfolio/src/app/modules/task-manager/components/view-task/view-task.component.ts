import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../shared/models/task';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';

  @Input() task: Task;
  @Output() deletedTask: EventEmitter<number> = new EventEmitter();
  constructor(
    private route: ActivatedRoute,
    private Location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.http.get(this.tasksRoute + '/' + id).subscribe
    (task => {
      this.task = task as Task;
      console.log('Task', this.task);
    })
  }

  onClickDelete(){
    this.deletedTask.emit(this.task.id);
  }
  
  goBack(){
    this.Location.back();
  }

}
