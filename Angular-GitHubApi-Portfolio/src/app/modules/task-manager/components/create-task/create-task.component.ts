import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Task } from '../../shared/models/task';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  // private tasksRoute = 'http://localhost:3000/tasks';
  // model: Task = new Task();
  angForm: FormGroup;
  constructor(private ts: TasksService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.angForm = this.fb.group({
      task_name: ['', Validators.required],
      description: ['', Validators.required],
      timeToComplete: ['', Validators.required],
      necessaryItems: ['', Validators.required]
    })
  }

  // addTask(task_name, description, timeToComplete, necessaryItems){
  //   this.ts.addTask(task_name, description, timeToComplete, necessaryItems)
  // }

  // onSubmit(){
  //   this.http.post(this.ts, this.model)
  //   .subscribe(() => {
  //     this.router.navigate(['']);
  //   })
  // }

}
