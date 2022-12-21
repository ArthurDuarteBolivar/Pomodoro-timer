import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      imports: [MatDialogModule, MatProgressBarModule, MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the progress with checked task', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('mat-icon');
    button.click()
    tick()
    expect(component.progressBar).toEqual(100)
    expect(component.iconTask).toBeTruthy()
    button.click()
    tick()
    expect(component.progressBar).toEqual(0)
    expect(component.iconTask).toBeFalsy()
  }))
});
