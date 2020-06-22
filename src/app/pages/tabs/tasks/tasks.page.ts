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

  async ngOnInit() {
    this.tasks = await this.db.getTasks();

    console.log(this.tasks);
  }

}
