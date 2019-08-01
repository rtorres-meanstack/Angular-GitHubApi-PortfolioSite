import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerComponent } from './pages/task-manager/task-manager.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TaskManagerComponent,
    ViewTaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule, HttpClientModule
  ],
  exports: [
    TaskManagerComponent,
    ViewTaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ]
})
export class TaskManagerModule { }
