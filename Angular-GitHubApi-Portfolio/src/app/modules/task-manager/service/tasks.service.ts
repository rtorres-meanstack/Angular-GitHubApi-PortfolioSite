import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  // private tasksRoute = 'http://localhost:3000/tasks';
  uri = 'http://localhost:4000/task';

  constructor(private http: HttpClient) { }

  addTask(task_name, task_description, task_timeToComplete, task_necessaryItems){
    const obj = {
      task_name: task_name,
      task_description: task_description,
      task_timeToComplete: task_timeToComplete,
      task_necessaryItems: task_necessaryItems
    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)
        .subscribe(res => console.log('Done'));
  }

  getTasks(){
    return this
      .http
      .get(`${this.uri}`);
  }

}
