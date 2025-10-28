import { insertTask , renderInput} from "./renders.js";
import "./listeners.js";
import {saveTasks , loadTasks , saveProject} from "./storage.js";
export const taskList = [];
export const projectList = [];


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
  const project = document.querySelector("#project").value;
  return { title, date, prior, status , project};
}


export function createTask() {
  const { title, date, prior, status ,proj } = getTask();
  if (!title) {
    alert("What was the task title again?");
    return null;
  }
  const newTask = new Task(title, date, prior, proj);
  newTask.status = status;
  taskList.push(newTask);
  saveTasks(taskList);
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
}

export function deleteTask(taskIndex){ 
  taskList.splice( taskIndex,1);
  saveTasks(taskList);
}


export function taskDone(taskIndex){
  const task = taskList[taskIndex];
  if (!task) {
    console.error("No task found at index:", taskIndex);
    return;
  }
  task.taskCheck();
  saveTasks(taskList);
}


export function addProject(projectName){
  if (projectName){
    projectList.push(projectName);
    saveProject(projectList);
    console.log(projectList);
  }
  return projectList;
}

export function sortTasks(projectName){
  const sortedTasks = taskList.filter((task) =>  task.project ==projectName); 
  return sortedTasks;
}
