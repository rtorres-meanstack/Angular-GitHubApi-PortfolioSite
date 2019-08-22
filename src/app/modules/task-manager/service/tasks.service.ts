import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // For Local
  // uri = 'http://localhost:8080/tasks';

  // For Heroku
  uri = '/tasks';

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
 
  updateTask(id){
    return this
            .http
            .get(`${this.uri}/update/${id}`);  }

  changeTask(task_name, task_description, task_timeToComplete, task_necessaryItems, id){
    const obj = {
      task_name: task_name,
      task_description: task_description,
      task_timeToComplete: task_timeToComplete,
      task_necessaryItems: task_necessaryItems
    };
    this
      .http
      .post(`${this.uri}/change/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteTask(id){
    return this
              .http
              .get(`${this.uri}/delete/${id}`)
  }
}
