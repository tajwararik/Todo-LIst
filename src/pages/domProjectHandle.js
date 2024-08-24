import { projectArray } from "./createProject";

export const loadDomProjectHandle = function () {
  const display = document.querySelector(".container > div:last-of-type");

  for (let project of projectArray) {
    const projectCard = document.createElement("div");
  }
};
