import "./index.js";
import "./listeners.js";

export function renderInput(){
    const container = document.querySelector(".taskBoard");
    const inputBox = document.createElement("div");
    inputBox.classList = "inputBox";
    inputBox.innerHTML = '<h3>is this working?</h3>';
    container.appendChild(inputBox);
}