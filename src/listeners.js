import {  insertTask, renderInput } from "./renders.js";
import  {createTask, taskList } from "./index.js";
export const tasks = [];
document.querySelector("#newTask").addEventListener("click", renderInput);

document.addEventListener("click", (e) => {
  if ( e.target.id === "insertTask") {
    renderInput();
    insertTask(createTask());
    console.log(taskList);
  }
});

document.addEventListener("click" , (e)=>{
  if(e.target && e.target.id === "editTask"){
    const index = e.target.dataset.index;
    console.log(index);
    renderInput(index);
    createTask(index);
  }
});
