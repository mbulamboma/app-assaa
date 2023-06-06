import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDay1ProgramComponent } from './page-day1-program.component';

describe('PageDay1ProgramComponent', () => {
  let component: PageDay1ProgramComponent;
  let fixture: ComponentFixture<PageDay1ProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDay1ProgramComponent]
    });
    fixture = TestBed.createComponent(PageDay1ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
