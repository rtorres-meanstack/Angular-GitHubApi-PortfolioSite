import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasksRoute = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  addTask(task_name, description, timeToComplete, necessaryItems){
    const obj = {
      task_name: task_name,
      description: description,
      timeToComplete: timeToComplete,
      necessaryItems: necessaryItems
    };
    console.log(obj);
    this.http.post('${this.url}/create', obj)
      .subscribe(res => console.log('Done'));
  }

}
