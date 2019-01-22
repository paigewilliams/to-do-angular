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
    new Task('Do Homework'),
    new Task('Think about group project'),
    new Task('Work on resume')
  ]

  editTask(){
    this.tasks[0].description = "hello";
    console.log("red is ", this.isRed);
    setInterval(() => {
      this.isRed = !this.isRed;
      console.log("red is ", this.isRed);
    }, 500);
  }

  isRed = true;
  getBig() {
    return true;
    }
}
