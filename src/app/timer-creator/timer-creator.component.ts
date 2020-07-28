import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'timeo-timer-creator',
  templateUrl: './timer-creator.component.html',
  styleUrls: ['./timer-creator.component.css'],
})
export class TimerCreatorComponent implements OnInit {
  @Output() notifyTime: EventEmitter<number> = new EventEmitter();
  timerForm = new FormGroup({
    hours: new FormControl(),
    minutes: new FormControl(),
    seconds: new FormControl(),
    timerName: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
