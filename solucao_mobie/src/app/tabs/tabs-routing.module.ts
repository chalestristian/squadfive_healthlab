import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailInfoVideoComponent } from '../modules/detail-info-video/detail-info-video.component';
import { DetailInfoComponent } from '../modules/detail-info/detail-info.component';
import { HealthyEatingComponent } from '../modules/healthy-eating/healthy-eating.component';
import { HomeComponent } from '../modules/home/home.component';
import { MentalEmotialComponent } from '../modules/mental-emotial/mental-emotial.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { PyhsicalComponent } from '../modules/pyhsical/pyhsical.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'pyshical',
        component: PyhsicalComponent
      },
      {
        path: 'mental-emotial',
        component: MentalEmotialComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'healthy',
        component: HealthyEatingComponent
      },
      {
        path: 'detail-info',
        component: DetailInfoComponent
      },
      {
        path: 'detail-info-video',
        component: DetailInfoVideoComponent
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
