import { Component } from '@angular/core';
import { Task } from './models/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Epicodus Graduation Prep';
  currentTime: Date = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task('Do Homework', 1),
    new Task('Think about group project', 2),
    new Task('Work on resume', 3)
  ]

  editTask(task){
    console.log("task", task);
    task.description += "+";
  }

  isRed = true;
  getBig(task) {
    if(task.priority == 1 ){
      return "bg-danger";
    }
    if(task.priority == 2){
      return "bg-warning";
    }
    else {
      return "bg-info";
    }
  }
}
