import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ],
      imports: [MatDialogModule,  ReactiveFormsModule, MatFormFieldModule, MatInputModule,
      BrowserAnimationsModule],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("test the input to see if it's right", fakeAsync(() => {
    let testUser = {
      title: 'tarefa 1',
      description: 'descrição'
    };
    component.addTaskForm.controls['title'].setValue(testUser.title);
    component.addTaskForm.controls['description'].setValue(testUser.description);
    expect(component.addTaskForm.value.title).toEqual('tarefa 1');
    expect(component.addTaskForm.value.description).toEqual('descrição');
    component.addTask()
    expect(component.taskAdded).toEqual(1)
    tick(13000);
    expect(component.error).toEqual("")
    expect(component.taskAdded).toEqual(-0.09999999999999987)
  }));
  it("test the input to see if it's error", fakeAsync(() => {
    let testUser = {
      title: '',
      description: 'descrição'
    };
    component.addTaskForm.controls['title'].setValue(testUser.title);
    component.addTaskForm.controls['description'].setValue(testUser.description);
    expect(component.addTaskForm.value.title).toEqual('');
    expect(component.addTaskForm.value.description).toEqual('descrição');
    component.addTask()
    expect(component.taskAdded).toEqual(0)
    tick(13000);
    expect(component.error).toEqual("pleas, fill in all fields")
    expect(component.taskAdded).toEqual(0)
  }));
});
