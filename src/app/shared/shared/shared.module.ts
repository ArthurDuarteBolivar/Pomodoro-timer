import { CronometersDisplayComponent } from '../cronometers-display/cronometers-display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AddTaskComponent,
    CronometersDisplayComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
  ],
  exports: [
    AddTaskComponent,
    CronometersDisplayComponent
  ],
})
export class SharedModule { }
