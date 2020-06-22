import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
