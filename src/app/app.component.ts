import { Component, ViewRef, ViewChild } from '@angular/core';

import { Timer } from './model/Timer';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'timeo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'timeo';
  timerList: Timer[] = [];

  createTimer(timerData: Timer) {
    this.timerList.push(timerData);
    console.log(timerData);
  }

  deleteTimer(index: number) {
    console.log(index);
    delete this.timerList[index];
  }
}
