import {taskList} from "./index.js";
import {Task} from "./task.js";
export function saveTasks(tasks) {
  localStorage.clear();
  localStorage.setItem('tasks'  , JSON.stringify(tasks));
}

export function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  const parsedTasks= storedTasks ? JSON.parse(storedTasks) : [];
  return parsedTasks.map(obj => Object.assign(new Task(), obj));
}

