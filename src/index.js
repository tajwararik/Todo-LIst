import { createProject } from "./pages/createProject.js";
import { loadDomProjectHandle } from "./pages/domProjectHandle.js";
import "./styles.css";

const projectContainer = document.querySelector(".project-container");
const addProject = projectContainer.querySelector("#add-project");
const projectDialog = projectContainer.querySelector("dialog");
const cancelButton = projectDialog.querySelector(".cancel");
const addButton = projectDialog.querySelector(".add");

addProject.addEventListener("click", () => {
  projectDialog.showModal();
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  projectDialog.close();
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  createProject();
  loadDomProjectHandle();
});
