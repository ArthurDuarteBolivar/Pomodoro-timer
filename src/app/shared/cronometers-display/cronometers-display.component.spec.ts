import { appReducer, setChronometer, setLong, decreaseMinutes } from './../../store/app.state';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CronometersDisplayComponent } from './cronometers-display.component';
import { Store, StoreModule } from '@ngrx/store';
import * as fromAuth from './../../store/app.state';


describe('CronometersDisplayComponent', () => {
  let component: CronometersDisplayComponent;
  let fixture: ComponentFixture<CronometersDisplayComponent>;
  let store: Store<fromAuth.IAppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronometersDisplayComponent ],
      imports: [MatProgressBarModule, StoreModule.forRoot({app: appReducer})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronometersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get<Store>(Store)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('temp is correctly and progress', fakeAsync (()  => {
    component.start()
    tick(1000)
    component.stop()
    expect(component.minutes$.subscribe(res => expect(res).toBe(24)))
    expect(component.seconds1$.subscribe(res => expect(res).toBe(5)))
    expect(component.seconds2$.subscribe(res => expect(res).toBe(9)))
    expect(component.progress).toBe(0.08333333333333333 )
    component.resetProgress()
    expect(component.progress).toBe(0)
  }))
  it('testing negative numbers in chronometer', fakeAsync(() => {
      component.start()
      tick(1600000)
      expect(component.minutes$.subscribe(res => expect(res).toBe(0)))
      expect(component.seconds1$.subscribe(res => expect(res).toBe(5)))
      expect(component.seconds2$.subscribe(res => expect(res).toBe(9)))
      expect(component.progress).toBe(100.083333333332)
  }))
});
