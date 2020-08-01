import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Timer } from '../model/Timer';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'timeo-timer-creator',
  templateUrl: './timer-creator.component.html',
  styleUrls: ['./timer-creator.component.css'],
})
export class TimerCreatorComponent implements OnInit {
  timerForm = new FormGroup({
    hours: new FormControl(),
    minutes: new FormControl(),
    seconds: new FormControl(),
    timerName: new FormControl(),
  });
  valid: boolean = true;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  VCR: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<TimerComponent>>();

  constructor(private CFR: ComponentFactoryResolver) {}

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
    this.createTimerComponent(form['timerName'], time);
  }

  createTimerComponent(name: string, time: number) {
    let componentFactory = this.CFR.resolveComponentFactory(TimerComponent);

    let timerComponentRef = this.VCR.createComponent(componentFactory);

    let timerComponent = timerComponentRef.instance;
    timerComponent.id = ++this.child_unique_key;
    timerComponent.parentRef = this;
    timerComponent.time = time;
    timerComponent.name = name;

    this.componentsReferences.push(timerComponentRef);
  }

  removeTimer(id: number) {
    let componentRef = this.componentsReferences.filter(
      (x) => x.instance.id == id
    )[0];
    componentRef.destroy();
  }
}
