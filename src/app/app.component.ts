import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TabItemDirective } from './content-projection/tabs/directives/tab-item.directive';
import { WeatherWidgetComponent } from './content-projection/widgets/weather/weather-widget/weather-widget.component';
import { CustomWeatherActionComponent } from './content-projection/widgets/weather/custom-weather-action/custom-weather-action.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-hands-on';
}
