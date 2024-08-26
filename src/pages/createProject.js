import { format } from "date-fns";

const projectContainer = document.querySelector(".project-container");
const projectDialog = projectContainer.querySelector("dialog");
const form = projectDialog.querySelector("form");

export const projectArray = [];

class Project {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
}

export function createProject() {
  const projectName = form.querySelector("#name").value;

  const projectDate = format(new Date(), "dd MMM yyyy");

  const newProject = new Project(projectName, projectDate);

  if (projectName !== "") {
    projectArray.push(newProject);
    projectDialog.close();
  }

  form.reset();
}
