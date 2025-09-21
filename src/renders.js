import "./index.js";
import "./listeners.js";

export function renderInput(){
    const container = document.querySelector(".taskBoard");
    const inputBox = document.createElement("div");
    inputBox.classList = "inputBox";
    inputBox.innerHTML = `<div class="inputBox">
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
        </div>`;
    container.appendChild(inputBox);
}