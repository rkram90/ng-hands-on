import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWeatherActionComponent } from './custom-weather-action.component';

describe('CustomWeatherActionComponent', () => {
  let component: CustomWeatherActionComponent;
  let fixture: ComponentFixture<CustomWeatherActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomWeatherActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomWeatherActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
