import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWelcomeProfileComponent } from './headers/header-welcome-profile/header-welcome-profile.component';



@NgModule({
  declarations: [
    HeaderWelcomeProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderWelcomeProfileComponent
  ]
})
export class ComponentsModule { }