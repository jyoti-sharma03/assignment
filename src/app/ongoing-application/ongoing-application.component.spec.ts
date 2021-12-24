import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingApplicationComponent } from './ongoing-application.component';

describe('OngoingApplicationComponent', () => {
  let component: OngoingApplicationComponent;
  let fixture: ComponentFixture<OngoingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
