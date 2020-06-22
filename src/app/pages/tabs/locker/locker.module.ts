import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LockerPageRoutingModule } from './locker-routing.module';

import { LockerPage } from './locker.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockerPageRoutingModule,
    SharedModule
  ],
  declarations: [LockerPage]
})
export class LockerPageModule {}
