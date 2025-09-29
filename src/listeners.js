import {  insertTask, renderInput } from "./renders.js";
import  "./index.js";
export const tasks = [];
document.querySelector("#newTask").addEventListener("click", renderInput);

document.addEventListener("click", (e) => {
  if ( e.target.id === "insertTask") {
    insertTask();
    console.log(taskList);
  }
});

document.addEventListener("click" , (e)=>{
  if(e.target && e.target.id === "editTask"){
    editTask();
  }
});
