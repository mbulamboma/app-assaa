import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDay2ProgramComponent } from './page-day2-program.component';

describe('PageDay2ProgramComponent', () => {
  let component: PageDay2ProgramComponent;
  let fixture: ComponentFixture<PageDay2ProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDay2ProgramComponent]
    });
    fixture = TestBed.createComponent(PageDay2ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
