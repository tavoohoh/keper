import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { TasksModel } from 'src/app/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public tasks: TasksModel;

  constructor(
    private db: DbService
  ) { }

  ngOnInit() {
    this.db.getTasks().then((data: any) => {
      console.log(JSON.parse(data.data));
      this.tasks = JSON.parse(data.data);
    });
  }

}
