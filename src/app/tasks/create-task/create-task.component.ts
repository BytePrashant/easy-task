import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeTask = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  enteredTitle = '';
  enteredDescription = '';
  enteredDate = '';

  onCloseTask() {
    this.closeTask.emit();
  }

  onCreateTask() {
    this.tasksService.addUserTask(
      {
        title: this.enteredTitle,
        description: this.enteredDescription,
        date: this.enteredDate,
      },
      this.userId
    );
    this.closeTask.emit();
  }
}
