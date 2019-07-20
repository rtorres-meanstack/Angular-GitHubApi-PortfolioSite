import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

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
  // add to constructor private router: Router,
  constructor(private ts: TasksService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.angForm = this.fb.group({
      task_name: ['', Validators.required],
      task_description: ['', Validators.required],
      task_timeToComplete: ['', Validators.required],
      task_necessaryItems: ['', Validators.required]
    });
  }

  addTask(task_name, task_description, task_timeToComplete, task_necessaryItems){
    this.ts.addTask(task_name, task_description, task_timeToComplete, task_necessaryItems);
  }

  // onSubmit(){
  //   this.http.post(this.ts, this.model)
  //   .subscribe(() => {
  //     this.router.navigate(['']);
  //   })
  // }

}
