import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/models/task';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  model: Task = new Task();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.http.post(this.tasksRoute, this.model)
    .subscribe(() => {
      this.router.navigate(['']);
    })
  }

}
