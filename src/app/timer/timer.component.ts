import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimerCreatorComponent } from '../timer-creator/timer-creator.component';

@Component({
  selector: 'timeo-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  private backupTime: number;
  private parsedTime: Date;
  private intervalId: number = null;

  public time: number;
  public index: number;
  public name: string;
  public id: number;
  public parentRef: TimerCreatorComponent;

  timeOutput: string;
  nameOutput: string;
  paused: boolean;

  constructor() {}

  ngOnInit(): void {
    this.backupTime = this.time;
    this.nameOutput = this.name;
    this.setTime(this.time);
    this.startTimer();
  }

  setTime(time: number) {
    this.parsedTime = new Date(null);
    this.timeOutput = `${new Date(this.time * 1000)
      .toISOString()
      .substr(11, 8)}`;
    this.parsedTime.setSeconds(time);
  }

  startTimer() {
    if (this.intervalId == null) {
      this.paused = false;
      this.intervalId = setInterval(() => {
        this.time -= 1;
        this.timeOutput = `${new Date(this.time * 1000)
          .toISOString()
          .substr(11, 8)}`;
        if (this.time == 0) {
          this.pauseTimer();
        }
      }, 1000);
    }
  }

  pauseTimer() {
    this.paused = true;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  initTimer() {
    this.resetTimer();
    this.pauseTimer();
    this.startTimer();
  }

  resetTimer() {
    this.time = this.backupTime;
    this.setTime(this.time);
    if (!this.paused) {
      this.pauseTimer();
      this.startTimer();
    }
  }

  deleteTimer() {
    this.pauseTimer();
    this.parentRef.removeTimer(this.id);
  }
}
