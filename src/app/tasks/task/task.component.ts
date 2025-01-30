import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
@Component({
  selector: 'app-task',
  imports: [CardComponent],
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
