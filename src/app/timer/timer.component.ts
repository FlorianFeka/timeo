import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeo-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  @Input() private time: number;
  parsedTime: Date;
  intervalId: number;
  output: string;

  constructor() {}

  ngOnInit(): void {
    this.parsedTime = new Date(null);
    this.parsedTime.setSeconds(this.time);
    this.startInterval();
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.time -= 1;
      this.output = `${new Date(this.time * 1000).toISOString().substr(11, 8)}`;
      if (this.time == 0) {
        this.stopInterval();
      }
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }
}
