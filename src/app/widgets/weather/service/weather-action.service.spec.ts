import { TestBed } from '@angular/core/testing';

import { WeatherActionService } from './weather-action.service';

describe('WeatherActionService', () => {
  let service: WeatherActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
