import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  task: any = {};
  angForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ts: TasksService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      task_name: ['', Validators.required ],
      task_description: ['', Validators.required ],
      task_timeToComplete: ['', Validators.required ],
      task_necessaryItems: ['', Validators.required ]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.updateTask(params['id']).subscribe(res => {
        this.task = res;
      });
    });
  }

  changeTask(task_name, task_description, task_necessaryItems, task_timeToComplete) {
    this.route.params.subscribe(params => {
      this.ts.changeTask(task_name, task_description, task_necessaryItems, task_timeToComplete, params['id']);
        this.router.navigate(['task']);
    });
  }
}
