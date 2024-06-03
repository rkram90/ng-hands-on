import { Component, Injector, Input, TemplateRef, inject } from '@angular/core';
import { WeatherStateService } from '../service/weather-state.service';
import { WeatherActionService } from '../service/weather-action.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.css',
  providers: [WeatherStateService, WeatherActionService],
})
export class WeatherWidgetComponent {
  @Input()
  headerTemplate!: TemplateRef<any>;

  @Input()
  contentTemplate!: TemplateRef<{ $implicit: WeatherStateService }>;

  @Input()
  actionTemplate!: TemplateRef<any>;

  state = inject(WeatherStateService);
  actions = inject(WeatherActionService);
  injector = inject(Injector);
}
