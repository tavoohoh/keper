import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { TasksModel } from 'src/app/models';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit, AfterContentInit {
  public tasks: TasksModel;

  constructor(
    private db: DbService,
    private loading: LoaderService
  ) { }

  ngOnInit() {
    this.loading.toggleLoading(true);
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.db.getTasks().then((data: any) => {
        this.tasks = JSON.parse(data.data);
        this.loading.toggleLoading();
      });
    });
  }

}
