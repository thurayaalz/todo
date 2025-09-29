import { taskList , Task} from "./index.js";
const container = document.querySelector(".taskBoard");

export function renderInput(index) {
  if (document.querySelector(".inputBox")) return;
  const task = index !==null? taskList[index] : null;

  const inputBox = document.createElement("div");
  inputBox.classList = "inputBox";
  inputBox.innerHTML = `
            Task Title<input type="text" id="title" value="${task?.title?? ""}">
            Due Date <input type="date" id="date" value="${task?.date??""}">
            Priority </br>
            <input type="radio" id="low" name="priority" value="0"${task?.prior == 0 ? "checked" : ""}>
            <label for="low">!</label>

            <input type="radio" id="medium" name="priority" value="1"${task?.prior == 1 ? "checked" : ""}>
            <label for="medium">!!</label>

            <input type="radio" id="high" name="priority" value="2" ${task?.prior == 2 ? "checked" : ""}>
            <label for="high">!!!</label>
            </br>
            Done? <input type="checkbox" id="status" ${task?.status ? "checked" : ""}> </br>
            <button id="insertTask" type="submit"> Save</button>`;

  inputBox.dataset.index = index ?? "";
  if (index !=""){
    taskList[index] = newTask;
  }else{
    taskList.push(newTask);    
  }
  container.appendChild(inputBox);
}

export function insertTask(newTask) {

  const vTask = document.createElement("div");
  vTask.classList = "taskBody";
  vTask.innerHTML = `
    <input  type="checkbox" id=taskChk>
    <h3>${newTask.title}</h3>
    <p>Due: ${newTask.date}</p>
    <p>Priority: ${["Low", "Medium", "High"][newTask.prior]}</p>
    <p>Status: ${newTask.status ? "Done" : "Pending"}</p>
       <button id="editTask">
          <i class="bi bi-pencil-square"></i>
          </button>

     <button id="deleteTask">
          <i class="bi bi-x-square"></i>
        </button>`;

  const inputBox = document.querySelector(".inputBox");
  container.removeChild(inputBox);
  container.appendChild(vTask);
}

export function renderAll(){

}
