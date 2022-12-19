import { IAppState, setChronometer as setChronometer, setShort, setLong, reset } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { CronometersDisplayComponent } from 'src/app/shared/cronometers-display/cronometers-display.component';

@Component({
  selector: 'app-cronometer',
  templateUrl: './cronometer.component.html',
  styleUrls: ['./cronometer.component.scss']
})
export class CronometerComponent {
activeButtons: string = "active"
timerChronometers: number = 25
@Output() color = new EventEmitter<string>();

constructor(private store: Store<{app: IAppState}>){}


  @ViewChild(CronometersDisplayComponent)
  chronometersDisplayComponent!: CronometersDisplayComponent;

passChronometers(typeChronometer: number){
  switch (typeChronometer) {
    case 25:
      this.changeChronometers
      break;
    case 5:
      this.changeShortChronometers
      break;
    case 15:
      this.changeLongChronometers
      break;
  }
}
changeChronometers(){
  this.store.dispatch(setChronometer())
  this.store.dispatch(reset({payload:25}))
  this.timerChronometers = 25;
  this.color.emit("#ba4949")
  this.chronometersDisplayComponent.stop()
  this.chronometersDisplayComponent.resetProgress()
}
changeShortChronometers(){
  this.store.dispatch(setShort())
  this.store.dispatch(reset({payload:5}))
  this.timerChronometers = 5;
  this.color.emit("#38858a")
  this.chronometersDisplayComponent.stop()
  this.chronometersDisplayComponent.resetProgress()
}
changeLongChronometers(){
  this.store.dispatch(setLong())
  this.store.dispatch(reset({payload:15}))
  this.timerChronometers = 15;
  this.color.emit("#397097")
  this.chronometersDisplayComponent.stop()
  this.chronometersDisplayComponent.resetProgress()
}

}
