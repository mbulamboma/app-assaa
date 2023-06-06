import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePreEventsProgramComponent } from './page-pre-events-program.component';

describe('PagePreEventsProgramComponent', () => {
  let component: PagePreEventsProgramComponent;
  let fixture: ComponentFixture<PagePreEventsProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePreEventsProgramComponent]
    });
    fixture = TestBed.createComponent(PagePreEventsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
