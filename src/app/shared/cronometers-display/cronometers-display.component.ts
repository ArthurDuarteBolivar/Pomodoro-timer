import { decreaseSeconds2, decreaseSeconds1, setSeconds2, setSeconds1, decreaseMinutes, reset } from './../../store/app.state';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-cronometers-display',
  templateUrl: './cronometers-display.component.html',
  styleUrls: ['./cronometers-display.component.scss']
})
export class CronometersDisplayComponent {
  constructor(private store: Store<{app: IAppState}>){}
  seconds2: number = 0;
  chronometerInterval: any;
  progress: number = 0;
  stats: boolean = true
  minutesStatic: any = 25;
  @Output() passChronometer = new EventEmitter<number>

  minutes$ = this.store.select('app').pipe(
    map(res =>  res.minutes)
  )
  minuter = this.store.select('app').pipe(
    map(res =>  this.minutesStatic = res.minutes)
  )

  seconds1$ = this.store.select('app').pipe(
    map(res => res.seconds1)
  )

  seconds2$ = this.store.select('app').pipe(
    map(res => res.seconds2)
  )


  public resetProgress(){
    this.progress = 0;
  }
  countProgress: number = 100 / (this.minutesStatic * 48)
  start(){
    this.stats = false
    this.chronometerInterval = setInterval(() => {
      var minutes : any = 0;
      this.minutes$.subscribe(res => minutes = res)
      this.progress += this.countProgress
      this.store.dispatch(decreaseSeconds2())
      var seconds2 = 0;
      this.seconds2$.subscribe(res => seconds2 = res)
      var seconds1 = 0;
      this.seconds1$.subscribe(res => seconds1 = res)
      if(seconds2 < 0){
        this.store.dispatch(setSeconds2())
        this.store.dispatch(decreaseSeconds1())
      }
      if(seconds1 <= 0){
        this.store.dispatch(setSeconds1())
        this.store.dispatch(decreaseMinutes())
      }
      if(minutes <= 0){
          this.passChronometer.emit(this.minutesStatic)
          this.stop()
          this.passChronometer.emit(5)
      }
    }, 1000)
  }
  public stop(){
    this.stats = true;
    clearInterval(this.chronometerInterval)
  }
}
