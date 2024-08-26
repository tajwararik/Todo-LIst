import { projectArray } from "./createProject";
import "./projectCards.css";

export const loadDomProjectHandle = function () {
  const display = document.querySelector(".display-container > div:last-of-type");
  display.innerHTML = "";

  for (let project of projectArray) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `<h2>&vrtri; ${project.name}</h2>
    <p>Created: ${project.date}</p>`;

    display.append(projectCard);
  }
};
