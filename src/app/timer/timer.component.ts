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
  parsedTime: Date;
  output: string;

  constructor() {}

  ngOnInit(): void {
    this.parsedTime = new Date(null);
    this.parsedTime.setSeconds(this.time);
    let id = setInterval(() => {
      this.time -= 1;
      this.output = `${new Date(this.time * 1000).toISOString().substr(11, 8)}`;
      if (this.time == 0) {
        clearInterval(id);
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
