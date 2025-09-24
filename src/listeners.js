import { insertTask, renderInput } from "./renders.js";

export  const tasks = [];
document.querySelector("#newTask").addEventListener("click" , renderInput);

document.querySelector("#insertTask").addEventListener("click", insertTask);
