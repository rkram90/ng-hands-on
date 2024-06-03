import { Routes } from '@angular/router';
import { WeatherHomeComponent } from './widgets/weather/weather-home/weather-home.component';
import { TabHomeComponent } from './tabs/component/tab-home/tab-home.component';

export const CONTENT_PROJECTION_ROUTES: Routes = [
  {
    path: '',
    component: TabHomeComponent,
  },
  {
    path: 'weather',
    component: WeatherHomeComponent,
  },
];
