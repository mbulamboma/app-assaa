import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePreconfWorkshopComponent } from './page-preconf-workshop.component';

describe('PagePreconfWorkshopComponent', () => {
  let component: PagePreconfWorkshopComponent;
  let fixture: ComponentFixture<PagePreconfWorkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePreconfWorkshopComponent]
    });
    fixture = TestBed.createComponent(PagePreconfWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
