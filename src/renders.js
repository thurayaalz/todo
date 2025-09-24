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
    const Task = document.createElement("h3");
    Task.innerHTML = "what the HECK";
    container.removeChild(document.getElementById("inputBox"));
    container.appendChild(Task);
}
