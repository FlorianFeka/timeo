import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeo-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  @Input() private time: number;
  seconds: number;
  minutes: number;
  hours: number;
  output: string;

  constructor() {}

  ngOnInit(): void {
    this.minutes = Math.trunc(this.time / 60);
    this.seconds = this.time - this.minutes * 60;
    this.hours = Math.trunc(this.minutes / 60);
    this.minutes = this.minutes - this.hours * 60;
    this.output = `${this.hours}:${this.minutes} ${this.seconds}s`;
    let intervalId: number = setInterval(() => {
      this.time -= 1;
      console.log(this.time);

      this.output = `${this.hours}:${this.minutes} ${this.seconds}s`;
      this.decreaseTimer();
      if (this.time == 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  decreaseTimer() {
    if (this.seconds > 0) {
      this.seconds -= 1;
      return;
    } else {
      this.seconds = 59;
      this.minutes -= 1;
    }
    if (this.minutes > 0) {
      this.minutes -= 1;
      return;
    } else {
      if (this.hours > 0) {
        this.seconds = 59;
        this.minutes = 59;
        this.hours -= 1;
      }
      return;
    }
  }
}
