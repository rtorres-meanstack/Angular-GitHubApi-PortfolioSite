import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';

  public task: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}
  
  ngOnInit() {
    this.getTasks();
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);

    this.http
      .put(this.tasksRoute + '/' + id, this.task)
      .toPromise()
      .then(() => this.router.navigate(['']));
  }

  getTasks() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.http
      .get(this.tasksRoute + '/' + id)
      .subscribe(task => (this.task = task));
  }
  onClickDelete(taskId){
    let taskIndex = 0;
    for(let task of this.task){
      if(task.id === taskId){
        this.task.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }

}
