import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAttendanceInPersonComponent } from './page-attendance-in-person.component';

describe('PageAttendanceInPersonComponent', () => {
  let component: PageAttendanceInPersonComponent;
  let fixture: ComponentFixture<PageAttendanceInPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAttendanceInPersonComponent]
    });
    fixture = TestBed.createComponent(PageAttendanceInPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
