import { Component } from '@angular/core';

import { Timer } from './model/Timer';

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
}
