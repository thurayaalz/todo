import {  insertTask, renderInput } from "./renders.js";
import  {createTask, taskList , editTask } from "./index.js";
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
    const taskDiv = e.target.closest(".taskBody");
    const index = taskDiv?.dataset.index;
    renderInput()
    editTask(index);
  }
});


