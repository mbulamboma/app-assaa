import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDay4ProgramComponent } from './page-day4-program.component';

describe('PageDay4ProgramComponent', () => {
  let component: PageDay4ProgramComponent;
  let fixture: ComponentFixture<PageDay4ProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDay4ProgramComponent]
    });
    fixture = TestBed.createComponent(PageDay4ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
