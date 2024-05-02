import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselAndamiosComponent } from './carrusel-andamios.component';

describe('CarruselAndamiosComponent', () => {
  let component: CarruselAndamiosComponent;
  let fixture: ComponentFixture<CarruselAndamiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselAndamiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselAndamiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
