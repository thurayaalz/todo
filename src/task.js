
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


