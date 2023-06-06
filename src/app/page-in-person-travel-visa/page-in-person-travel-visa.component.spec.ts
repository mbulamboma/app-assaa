import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInPersonTravelVisaComponent } from './page-in-person-travel-visa.component';

describe('PageInPersonTravelVisaComponent', () => {
  let component: PageInPersonTravelVisaComponent;
  let fixture: ComponentFixture<PageInPersonTravelVisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInPersonTravelVisaComponent]
    });
    fixture = TestBed.createComponent(PageInPersonTravelVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
