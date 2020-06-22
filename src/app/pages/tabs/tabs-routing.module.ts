import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'locker',
        loadChildren: () => import('./locker/locker.module').then( m => m.LockerPageModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
