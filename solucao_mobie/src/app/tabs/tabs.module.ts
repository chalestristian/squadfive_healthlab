import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AngularModule } from '../angular/angular.module';
import { HomeComponent } from '../modules/home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PyhsicalComponent } from '../modules/pyhsical/pyhsical.component';
import { MentalEmotialComponent } from '../modules/mental-emotial/mental-emotial.component';
import { HealthyEatingComponent } from '../modules/healthy-eating/healthy-eating.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { DetailInfoComponent } from '../modules/detail-info/detail-info.component';
import { DetailInfoVideoComponent } from '../modules/detail-info-video/detail-info-video.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AngularModule,
    ComponentsModule
  ],
  declarations: [TabsPage, HomeComponent, PyhsicalComponent, MentalEmotialComponent, HealthyEatingComponent, ProfileComponent, DetailInfoComponent, DetailInfoVideoComponent]
})
export class TabsPageModule {}
