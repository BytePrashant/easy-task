import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Tasks } from './tasks.model';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

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

  cancelTask() {
    this.isAddingTask = false;
  }

  onTaskCreated(taskData: TaskData) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.description,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
