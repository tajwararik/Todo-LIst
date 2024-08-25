import { createProject } from "./pages/createProject.js";
import { loadDomProjectHandle } from "./pages/domProjectHandle.js";
import "./styles.css";

const projectContainer = document.querySelector(".project-container");
const addProject = projectContainer.querySelector("#add-project");
const viewProjects = projectContainer.querySelector("#view-projects");
const projectDialog = projectContainer.querySelector(
  ".project-container > dialog"
);
const cancelProjectButton = projectDialog.querySelector(
  ".project-container > dialog .cancel"
);
const addProjectButton = projectDialog.querySelector(
  ".project-container > dialog .add"
);

const taskContainer = document.querySelector(".task-container");
const addTask = taskContainer.querySelector("#add-task");
const taskDialog = taskContainer.querySelector(".task-container > dialog");
const cancelTaskButton = taskDialog.querySelector(
  ".task-container > dialog .cancel"
);
const addTaskButton = projectDialog.querySelector(
  ".task-container > dialog .add"
);

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
