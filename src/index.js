import "./todo.css"
import "./renders.js";
import "./listeners.js";
import {saveTasks , loadTasks} from "./storage.js";

export const taskList = [];
export class Task {
  constructor(title, date, prior, project) {
    this.title = title;
    this.date = date;
    this.prior = prior;
    this.project = project;
    this.status = false;
  }
  taskCheck() {
    this.status = !this.status;
  }
  edit({ title, date, prior, project, status }) {
    if (title) this.title = title;
    if (date) this.date = date;
    if (prior !== undefined) this.prior = prior;
    if (project !== undefined) this.project = project;
    this.status = status;
  }
}


export function getTask() {
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const prior = parseInt(document.querySelector('input[name="priority"]:checked')?.value, 10);
  const status = document.querySelector("#status").checked;
  return { title, date, prior, status };
}

export function createTask() {
  const { title, date, prior, status } = getTask();
  if (!title) {
    alert("What was the task title again?");
    return null;
  }
  const newTask = new Task(title, date, prior, null);
  newTask.status = status;
  taskList.push(newTask);
  saveTasks(taskList);
  console.log(localStorage)
  return newTask;
}

export function editTask(taskIndex) {
  const task = taskList[taskIndex];
  if (!task) {
    console.error("No task found at index:", taskIndex);
    return;
  }
  task.edit(getTask());
  saveTasks(taskList);
  console.log(localStorage);
}
 export function deleteTask(taskIndex){ 
 taskList.splice( taskIndex,1);
  saveTasks(taskList);
 console.log(taskIndex);

  console.log(localStorage);
 }
