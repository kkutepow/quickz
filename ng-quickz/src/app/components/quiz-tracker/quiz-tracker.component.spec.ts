import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTrackerComponent } from './quiz-tracker.component';

describe('QuizTrackerComponent', () => {
  let component: QuizTrackerComponent;
  let fixture: ComponentFixture<QuizTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
