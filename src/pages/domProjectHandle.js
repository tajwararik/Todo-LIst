import { projectArray } from "./createProject";

export const loadDomProjectHandle = function () {
  const display = document.querySelector(".container > div:last-of-type");
  display.innerHTML = "";

  for (let project of projectArray) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `<h2>${project.name}</h2>
    <p>Created: ${project.date}</p>`;

    display.append(projectCard);
  }
};
