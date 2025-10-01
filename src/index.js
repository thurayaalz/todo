import "./todo.css";
import "./renders.js"
import "./listeners.js";

//task Management
export class Task {
  constructor(title, date, prior, project) {
    this.title = title;
    this.date = date;
    this.prior = prior;
    this.project = project;
    this.status = false;
  }

  taskCheck(status) {
    this.status = !this.status;
  }
  edit({ title, date, prior, project }) {
    if (title) this.title = title;
    if (date) this.date = date;
    if (prior) this.prior = prior;
    if (project !== undefined) this.project = project;
  }
}

export const taskList = [];

export function getTask(){
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const prior = document.querySelector('input[name="priority"]:checked')?.value;
  const status = document.querySelector("#status").checked;
  return {title, date, prior, status};
}


export function createTask(index){
  const {title,date, prior,status} = getTask();
  if (!title) {
    alert("What was the task title again?");
    return;
  }
  const newTask = new Task(title, date, prior, status);
  taskList.push(newTask);    
  return newTask;
}

export function editTask(taskIndex){
  const task = taskList[taskIndex];
  if (!task)return;
  task.edit(getTask());
}

export function deleteTask(taskIndex){
  //get the index and delete the task
}
