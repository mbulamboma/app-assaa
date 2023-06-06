import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePreconfClimateDebateComponent } from './page-preconf-climate-debate.component';

describe('PagePreconfClimateDebateComponent', () => {
  let component: PagePreconfClimateDebateComponent;
  let fixture: ComponentFixture<PagePreconfClimateDebateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePreconfClimateDebateComponent]
    });
    fixture = TestBed.createComponent(PagePreconfClimateDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
