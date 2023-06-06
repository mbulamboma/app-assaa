import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePanelsAndRoundtablesComponent } from './page-panels-and-roundtables.component';

describe('PagePanelsAndRoundtablesComponent', () => {
  let component: PagePanelsAndRoundtablesComponent;
  let fixture: ComponentFixture<PagePanelsAndRoundtablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePanelsAndRoundtablesComponent]
    });
    fixture = TestBed.createComponent(PagePanelsAndRoundtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
