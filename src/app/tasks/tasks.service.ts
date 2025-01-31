import { Injectable } from '@angular/core';
import { TaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private Tasks = [
    {
      id: '',
      userId: '',
      title: '',
      summary: '',
      dueDate: '',
    },
  ];

  getUserTasks(userId: string) {
    return this.Tasks.filter((task) => task.userId === userId);
  }

  addUserTask(taskData: TaskData, userId: string) {
    this.Tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.description,
      dueDate: taskData.date,
    });
  }

  deleteUserTask(taskId: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== taskId);
  }
}
