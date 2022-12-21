import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CronometerComponent } from '../cronometer/cronometer.component';
import { TasksComponent } from '../tasks/tasks.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store/app.state';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    NavBarComponent,
    CronometerComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    StoreModule.forRoot({app: appReducer}),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    SharedModule,
  ],
  exports: [
    NavBarComponent,
    CronometerComponent,
    TasksComponent
  ],
})
export class ComponentsModule { }
