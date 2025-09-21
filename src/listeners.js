import "./index.js";
import "./renders.js";
import { renderInput } from "./renders.js";

export  const tasks = [];
document.querySelector("#newTask").addEventListener("click" , renderInput());

