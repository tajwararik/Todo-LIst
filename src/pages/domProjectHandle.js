import { projectArray } from "./createProject";
import { handleTasksInProjects } from "./tasksInProjects";
import "./projectCards.css";

export const loadDomProjectHandle = function () {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  if (storedProjects) {
    projectArray.length = 0;
    projectArray.push(...storedProjects);
  }

  const display = document.querySelector(
    ".display-container > div:last-of-type"
  );
  display.innerHTML = "";

  for (let project of projectArray) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `<h2>&vrtri; ${project.name}</h2>
    <p>Created: ${project.date}</p>`;

    projectCard.addEventListener("click", () => {
      handleTasksInProjects(project.name);
    });

    display.append(projectCard);
  }
};
