import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../task/task.model';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<TaskData>();
  
  enteredTitle = '';
  enteredDescription = '';
  entererDate = '';

  onCancelTask() {
    this.cancelTask.emit();
  }

  onCreateTask() {
    this.addTask.emit({
      title: this.enteredTitle,
      description: this.enteredDescription,
      date: this.entererDate,
    })
  }
}
