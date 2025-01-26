import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Tasks } from './tasks.model';
import { CreateTaskComponent } from './create-task/create-task.component';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() userId: string | undefined;
  @Input() name: string | undefined;

  tasks = Tasks;

  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  taskCompleted(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  createTask() {
    this.isAddingTask = true;
  }
}
