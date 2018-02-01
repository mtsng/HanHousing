import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddLocationComponent } from './components/addLocation/addLocation.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'addLocation',
    component: AddLocationComponent
  }
]
