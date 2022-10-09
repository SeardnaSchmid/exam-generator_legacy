import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { ExamTask } from "../models/exam-task.model";
import { TaskService } from "../task.service";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent implements OnInit {
  @ViewChild('taskTable') taskTable!: ElementRef;

  public taskList: ExamTask[] = [];

  public constructor(public router: Router, public taskService: TaskService) {}

  public async ngOnInit(): Promise<void> {
    await this.loadTasks();
  }

  private async loadTasks() {
    this.taskList = await this.taskService.findAll();
  }

  public async createNewTask(): Promise<void> {
    const newId = uuidv4();
    await this.router.navigate([`tasks/${newId}/edit`], {
      queryParams: {
        new: true,
      },
    });
  }

  public async editTask(task: ExamTask): Promise<void> {
    await this.router.navigate([`tasks/${task.id}/edit`]);
  }

  public async deleteTask(task: ExamTask) {
    await this.taskService.delete(task.id);
    await this.loadTasks();
  }
}