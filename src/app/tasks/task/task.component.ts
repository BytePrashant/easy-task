import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskCompleted = new EventEmitter<string>();

  taskCompletedClicked() {
    this.taskCompleted.emit(this.task.id);
  }
}
