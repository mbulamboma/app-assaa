import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInPersonPrePostToursComponent } from './page-in-person-pre-post-tours.component';

describe('PageInPersonPrePostToursComponent', () => {
  let component: PageInPersonPrePostToursComponent;
  let fixture: ComponentFixture<PageInPersonPrePostToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInPersonPrePostToursComponent]
    });
    fixture = TestBed.createComponent(PageInPersonPrePostToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
