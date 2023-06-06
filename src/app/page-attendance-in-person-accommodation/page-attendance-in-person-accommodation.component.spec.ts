import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAttendanceInPersonAccommodationComponent } from './page-attendance-in-person-accommodation.component';

describe('PageAttendanceInPersonAccommodationComponent', () => {
  let component: PageAttendanceInPersonAccommodationComponent;
  let fixture: ComponentFixture<PageAttendanceInPersonAccommodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAttendanceInPersonAccommodationComponent]
    });
    fixture = TestBed.createComponent(PageAttendanceInPersonAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
