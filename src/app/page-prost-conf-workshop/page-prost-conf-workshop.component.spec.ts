import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProstConfWorkshopComponent } from './page-prost-conf-workshop.component';

describe('PageProstConfWorkshopComponent', () => {
  let component: PageProstConfWorkshopComponent;
  let fixture: ComponentFixture<PageProstConfWorkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProstConfWorkshopComponent]
    });
    fixture = TestBed.createComponent(PageProstConfWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
