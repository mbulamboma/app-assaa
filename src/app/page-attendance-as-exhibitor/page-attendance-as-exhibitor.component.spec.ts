import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAttendanceAsExhibitorComponent } from './page-attendance-as-exhibitor.component';

describe('PageAttendanceAsExhibitorComponent', () => {
  let component: PageAttendanceAsExhibitorComponent;
  let fixture: ComponentFixture<PageAttendanceAsExhibitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAttendanceAsExhibitorComponent]
    });
    fixture = TestBed.createComponent(PageAttendanceAsExhibitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
