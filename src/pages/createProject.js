const projectContainer = document.querySelector(".project-container");
const addProject = projectContainer.querySelector("#add-project");
const projectDialog = projectContainer.querySelector("dialog");
const form = projectDialog.querySelector("form");
const cancelButton = projectDialog.querySelector(".cancel");
const addButton = projectDialog.querySelector(".add");

addProject.addEventListener("click", () => {
  projectDialog.showModal();
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  projectDialog.close();
});

class Project {
  constructor(name) {
    this.name = name;
  }
}

export function createProject() {
  const projectName = form.querySelector("#name").value;

  const newProject = new Project(projectName);
  console.log(projectName);
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  createProject();
  form.reset();
  projectDialog.close();
});
