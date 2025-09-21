import "./todo.css";
import "./listeners.js";
import "./renders.js"

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
