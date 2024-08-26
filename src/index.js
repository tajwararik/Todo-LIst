import { createProject } from "./pages/createProject.js";
import { createTask } from "./pages/createTask.js";
import { loadDomProjectHandle } from "./pages/domProjectHandle.js";
import { loadDomTaskHandle } from "./pages/domTaskHandle.js";
import "./styles.css";

const projectContainer = document.querySelector(".project-container");
const addProject = projectContainer.querySelector("#add-project");
const viewProjects = projectContainer.querySelector("#view-projects");
const projectDialog = projectContainer.querySelector("dialog");
const cancelProjectButton = projectDialog.querySelector(".cancel");
const addProjectButton = projectDialog.querySelector(".add");

const taskContainer = document.querySelector(".task-container");
const addTask = taskContainer.querySelector("#add-task");
const taskDialog = taskContainer.querySelector("dialog");
const cancelTaskButton = taskDialog.querySelector(".cancel");
const addTaskButton = taskDialog.querySelector(".add");

addProject.addEventListener("click", () => {
  projectDialog.showModal();
});

cancelProjectButton.addEventListener("click", (e) => {
  e.preventDefault();
  projectDialog.close();
});

addProjectButton.addEventListener("click", (e) => {
  e.preventDefault();
  createProject();
  loadDomProjectHandle();
});

viewProjects.addEventListener("click", () => {
  loadDomProjectHandle();
});

addTask.addEventListener("click", () => {
  taskDialog.showModal();
});

cancelTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  taskDialog.close();
});

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  createTask();
  loadDomTaskHandle();
});
