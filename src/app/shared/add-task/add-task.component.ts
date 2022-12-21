import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>,
     private fb: FormBuilder, private localStorage: LocalStorageService) {}

  taskAdded: number = 0
  error: string = ""

  addTaskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })

  addTask(){
    let title = this.addTaskForm.value.title
    let description = this.addTaskForm.value.description
    if(title == ''){
      this.error = "pleas, fill in all fields"
    }else if(description == ''){
      this.error = "pleas, fill in all fields"
    }else{
      this.error = ""
      this.localStorage.set(title!, description!)
      this.taskAdded = 1
      let intervalTask = setInterval(() => {
        this.taskAdded -= 0.1
        if(this.taskAdded <= 0){
          clearInterval(intervalTask)
        }
      }, 1000)
    }
  }

}
