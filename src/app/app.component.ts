import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemDirective } from './tabs/directives/tab-item.directive';
import { WeatherWidgetComponent } from './widgets/weather/weather-widget/weather-widget.component';
import { CustomWeatherActionComponent } from './widgets/weather/custom-weather-action/custom-weather-action.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TabsComponent,
    TabItemDirective,
    WeatherWidgetComponent,
    CustomWeatherActionComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-hands-on';
}
