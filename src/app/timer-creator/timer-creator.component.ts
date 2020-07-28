import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Timer } from '../model/Timer';

@Component({
  selector: 'timeo-timer-creator',
  templateUrl: './timer-creator.component.html',
  styleUrls: ['./timer-creator.component.css'],
})
export class TimerCreatorComponent implements OnInit {
  @Output() notifyTime: EventEmitter<Timer> = new EventEmitter();
  timerForm = new FormGroup({
    hours: new FormControl(),
    minutes: new FormControl(),
    seconds: new FormControl(),
    timerName: new FormControl(),
  });
  valid: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    if (
      form['hours'] === null &&
      form['minutes'] === null &&
      form['seconds'] === null
    ) {
      this.valid = false;
      return;
    }
    this.valid = true;
    let time: number = form['hours'] * 60 * 60;
    time += form['minutes'] * 60;
    time += form['seconds'];
    this.notifyTime.emit(new Timer(time, form['timerName']));
  }
}
