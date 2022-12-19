import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { AddTaskComponent } from 'src/app/shared/add-task/add-task.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  progressBar: number = 0;
  iconTask: boolean = false

  constructor(private localStorage: LocalStorageService, public dialog: MatDialog){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddTaskComponent, {
      width: '550px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  checkTask() {
    this.iconTask = !this.iconTask
    if(this.iconTask == true){
      this.progressBar += 100;
    }else{
      this.progressBar -= 100;
    }
  }

  editTask(){

  }
}
