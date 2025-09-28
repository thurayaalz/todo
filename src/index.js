import "./todo.css";
import "./renders.js"
import "./listeners.js";

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

