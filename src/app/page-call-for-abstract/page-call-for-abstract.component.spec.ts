import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCallForAbstractComponent } from './page-call-for-abstract.component';

describe('PageCallForAbstractComponent', () => {
  let component: PageCallForAbstractComponent;
  let fixture: ComponentFixture<PageCallForAbstractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCallForAbstractComponent]
    });
    fixture = TestBed.createComponent(PageCallForAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
