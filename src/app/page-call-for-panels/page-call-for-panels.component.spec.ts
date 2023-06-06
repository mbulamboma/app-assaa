import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCallForPanelsComponent } from './page-call-for-panels.component';

describe('PageCallForPanelsComponent', () => {
  let component: PageCallForPanelsComponent;
  let fixture: ComponentFixture<PageCallForPanelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCallForPanelsComponent]
    });
    fixture = TestBed.createComponent(PageCallForPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
