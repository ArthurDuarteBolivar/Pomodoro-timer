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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';


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
    NgbModule
  ],
  exports: [
    AddTaskComponent,
    CronometersDisplayComponent
  ],
  bootstrap: [AppComponent]
})
export class SharedModule { }
