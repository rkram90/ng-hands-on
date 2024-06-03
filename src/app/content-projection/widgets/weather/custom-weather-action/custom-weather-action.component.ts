import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherActionService } from '../service/weather-action.service';
import { WeatherStateService } from '../service/weather-state.service';

@Component({
  selector: 'app-custom-weather-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-weather-action.component.html',
  styleUrl: './custom-weather-action.component.css',
  providers: [WeatherActionService, WeatherStateService],
})
export class CustomWeatherActionComponent {
  weatherWidget = inject(WeatherActionService);
  onClick() {
    this.weatherWidget.reload();
    this.weatherWidget.copyData();
  }
}
