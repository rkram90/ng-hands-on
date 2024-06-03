import { Component } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';
import { CustomWeatherActionComponent } from '../custom-weather-action/custom-weather-action.component';

@Component({
  selector: 'app-weather-home',
  standalone: true,
  imports: [WeatherWidgetComponent, CustomWeatherActionComponent],
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.css',
})
export class WeatherHomeComponent {}
