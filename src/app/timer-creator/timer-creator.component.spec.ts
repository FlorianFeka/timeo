import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimerCreatorComponent } from './timer-creator.component';

describe('TimerCreatorComponent', () => {
  let component: TimerCreatorComponent;
  let fixture: ComponentFixture<TimerCreatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
