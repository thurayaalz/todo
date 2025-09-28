import { taskList , Task} from "./index.js";
const container = document.querySelector(".taskBoard");

export function renderInput() {
  if (document.querySelector(".inputBox")) return;
  const inputBox = document.createElement("div");
  inputBox.classList = "inputBox";
  inputBox.innerHTML = `
            Task Title<input type="text" id="title">
            Due Date <input type="date" id="date">
            Priority </br>
            <input type="radio" id="low" name="priority" value="0">
            <label for="low">!</label>

            <input type="radio" id="medium" name="priority" value="1">
            <label for="medium">!!</label>

            <input type="radio" id="high" name="priority" value="2">
            <label for="high">!!!</label>
            </br>
            Done? <input type="checkbox" id="status"> </br>
            <button id="insertTask" type="submit"> Add Task</button>
       `;

  container.appendChild(inputBox);
}

export function insertTask() {
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const prior = document.querySelector('input[name="priority"]:checked')?.value;
  const status = document.querySelector("#status").checked;

  if (!title) {
    alert("What was the task title again?");
    return;
  }
  const newTask = new Task(title, date, prior, status);
  taskList.push(newTask);

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
        </button>

    `;

  //plug another function that holds the task info
  const inputBox = document.querySelector(".inputBox");

  container.removeChild(inputBox);
  container.appendChild(vTask);
}
