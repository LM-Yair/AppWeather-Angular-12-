import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorCitiesComponent } from './major-cities.component';

describe('MajorCitiesComponent', () => {
  let component: MajorCitiesComponent;
  let fixture: ComponentFixture<MajorCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
