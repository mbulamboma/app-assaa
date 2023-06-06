import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKeynotesSpeakersComponent } from './page-keynotes-speakers.component';

describe('PageKeynotesSpeakersComponent', () => {
  let component: PageKeynotesSpeakersComponent;
  let fixture: ComponentFixture<PageKeynotesSpeakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageKeynotesSpeakersComponent]
    });
    fixture = TestBed.createComponent(PageKeynotesSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
