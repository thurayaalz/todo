import { projectList, taskList } from "./task.js";
import {loadTasks} from "./storage.js"
const container = document.querySelector(".taskBoard");

export function renderInput(index, editStatus) {
  if (document.querySelector(".inputBox")) return;

  const task = index !== null ? taskList[index] : null;
  const inputBox = document.createElement("div");
  inputBox.classList = "inputBox";
  inputBox.innerHTML = `

    Task Title <input type="text" id="title" value="${task?.title ?? ""}">
    Due Date <input type="date" id="date" value="${task?.date ?? ""}"> </br>
    Poject: </br> 
    <input type="text" list="allProjects" id="project" value="${task?.project ?? ""}"/> 
    <datalist id="allProjects">
      <option value="what"> </option>
    </datalist>
    Priority </br>
    <input type="radio" id="low" name="priority" value="0" ${task?.prior == 0 ? "checked" : ""}>
    <label for="low">!</labelr
    <input type="radio" id="medium" name="priority" value="1" ${task?.prior == 1 ? "checked" : ""}>
    <label for="medium">!!</label>

    <input type="radio" id="high" name="priority" value="2" ${task?.prior == 2 ? "checked" : ""}>
    <label for="high">!!!</label></br>
    Done? <input type="checkbox" id="status" ${task?.status ? "checked" : ""}> </br>
    <button id="cancleBtn">
    Cancle
    </button>`;



  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.id = editStatus ? "editBtn" : "insertTask";
  inputBox.appendChild(saveBtn);
  container.appendChild(inputBox);

  const datalist = document.getElementById('allProjects');
  if (datalist) {
    datalist.innerHTML = projectList
      .map(proj => `<option>${proj}</option>`).join("");
  }  

}

export function insertTask(newTask, index) {
  const vTask = document.createElement("div");
  vTask.classList = "taskBody";
  vTask.dataset.index = String(index); // Ensure it's a string

  vTask.innerHTML = `
    <input type="checkbox" id="taskChk" ${newTask.status ? "checked" : "" } > <h3>${newTask.title}</h3>
    <p>Due: ${newTask.date}</p>
    <p>Priority: ${["Low", "Medium", "High"][newTask.prior]}</p>
    <p>Status: ${newTask.status ? "Done" : "Pending"}</p>
    <p>Project: ${newTask.project}</p>
    <button class="editTask">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="deleteTask" id="deleteBtn">
      <i class="bi bi-x-square"></i>
    </button>`;

  const inputBox = document.querySelector(".inputBox");
  if (inputBox) {
    container.removeChild(inputBox);  
  }
  container.appendChild(vTask);
}

export function renderAll() {
  container.innerHTML = "";
  const loadedTasks = loadTasks();
  taskList.splice(0, taskList.length, ...loadedTasks);
  taskList.forEach((task, index) => {
    insertTask(task, index);
  });
}
export function NewProjectInput(){
  const projectInput = document.createElement("div");
  projectInput.classList = "inputBox";
  projectInput.innerHTML = `
    Project Title <input type="text" id="ProjectName">
    <button id="cancleBtn"> Cancle </button>
     `;

 const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.id = "addProjBtn";
  projectInput.appendChild(saveBtn);
  container.appendChild(projectInput);


}
