import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDay3ProgramComponent } from './page-day3-program.component';

describe('PageDay3ProgramComponent', () => {
  let component: PageDay3ProgramComponent;
  let fixture: ComponentFixture<PageDay3ProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDay3ProgramComponent]
    });
    fixture = TestBed.createComponent(PageDay3ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
