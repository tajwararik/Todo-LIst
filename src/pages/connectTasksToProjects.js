import { projectArray } from "./createProject";

export const dropDown = document.querySelector("#select-project");

export const connectTasksToProject = function () {
  dropDown.innerHTML = "";

  dropDown.innerHTML = `<option disabled selected>Projects</option>`;

  projectArray.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.name;
    option.value = project.name;

    dropDown.append(option);
  });
};
