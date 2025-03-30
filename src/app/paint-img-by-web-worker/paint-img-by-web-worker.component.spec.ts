import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintImgByWebWorkerComponent } from './paint-img-by-web-worker.component';

describe('PaintImgByWebWorkerComponent', () => {
  let component: PaintImgByWebWorkerComponent;
  let fixture: ComponentFixture<PaintImgByWebWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintImgByWebWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaintImgByWebWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
