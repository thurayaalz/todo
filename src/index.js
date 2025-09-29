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
}
export const taskList = [];

export function createTask(){
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const prior = document.querySelector('input[name="priority"]:checked')?.value;
  const status = document.querySelector("#status").checked;

  if (!title) {
    alert("What was the task title again?");
    return;
  }
  const newTask = new Task(title, date, prior, status);
  taskList.push(newTask);
  
  return newTask;
}

export function editTask(taskIndex){
//get the id then call the render input and vreate task

  createTask(renderInput(taskIndex));
}

export function deleteTask(taskIndex){
//get the index and delete the task
}
