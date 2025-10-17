import {Task , projectList , taskList} from "./task.js";
export function saveTasks(tasks) {
  localStorage.setItem('tasks'  , JSON.stringify(tasks));
}
export function saveProject(project){
  localStorage.setItem('projects' , JSON.stringify(project));
}

export function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  const parsedTasks= storedTasks ? JSON.parse(storedTasks) : [];

  const storedProjects = localStorage.getItem('projects');
  const parsedProjects = storedProjects ? JSON.parse(storedProjects) : [];
  projectList.length = 0;
  projectList.push(...parsedProjects);

  return parsedProjects , parsedTasks.map(obj => Object.assign(new Task(), obj));
;
}

