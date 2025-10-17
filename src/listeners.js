import { createTask, taskList, editTask, deleteTask , taskDone , addProject } from "./task.js";
import { renderInput, NewProjectInput, insertTask, renderAll } from "./renders.js";

let currentEditIndex = null;

document.querySelector("#newTask").addEventListener("click", () => {
  renderInput(null, false);
});

document.addEventListener("click", (e) => {
  if (e.target.id === "insertTask") {
    const newTask = createTask();
    if (!newTask) return;
    insertTask(newTask, taskList.length - 1);
    console.log("Task list after insert:", taskList);
  }

  if (e.target.closest(".editTask")) {
    const taskDiv = e.target.closest(".taskBody");
    const index = parseInt(taskDiv?.dataset.index, 10);
    if (isNaN(index)) {
      console.error("Invalid index:", taskDiv?.dataset.index);
      return;
    }
    currentEditIndex = index;
    renderInput(index, true);
  }

  if (e.target.id === "editBtn") {
    if (currentEditIndex === null) return;
    editTask(currentEditIndex);
    renderAll();
    currentEditIndex = null;
  }
  if (e.target.id === "deleteBtn") {
    const taskDiv = e.target.closest(".taskBody");
    const index = parseInt(taskDiv?.dataset.index, 10);
    deleteTask(index);
    renderAll();
    currentEditIndex = null;
    //  console.log("Deleted task at index:", index);
  }

  if (e.target.id === "cancleBtn") {
    const container = document.querySelector(".taskBoard");
    const inputBox = document.querySelector(".inputBox");
    if (inputBox) {
      container.removeChild(inputBox); // ✅ only if it exists
    }
  }
  if (e.target.id == "taskChk"){

    const taskDiv = e.target.closest(".taskBody");
    const index = parseInt(taskDiv?.dataset.index, 10);
    taskDone(index);
    renderAll();
  }

  if (e.target.id == "newProject"){
    NewProjectInput();
  }
  if (e.target.id == "addProjBtn"){
     const projName = document.getElementById("ProjectName").value;
    addProject(projName);
  }
}
);

