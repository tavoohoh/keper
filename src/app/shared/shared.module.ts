import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    HeaderComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
