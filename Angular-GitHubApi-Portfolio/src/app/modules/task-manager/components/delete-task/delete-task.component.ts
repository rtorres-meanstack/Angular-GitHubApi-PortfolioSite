import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {


  constructor(private ts: TasksService,) { }

  ngOnInit() {
  }

}
