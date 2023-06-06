import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePredebatesComponent } from './page-predebates.component';

describe('PagePredebatesComponent', () => {
  let component: PagePredebatesComponent;
  let fixture: ComponentFixture<PagePredebatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePredebatesComponent]
    });
    fixture = TestBed.createComponent(PagePredebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
