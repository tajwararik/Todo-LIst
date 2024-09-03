import { taskArray } from "./createTask";
import { loadTasksInProject } from "./domTasksInProjectHandle";

export function handleTasksInProjects(projectName) {
  searchProject(projectName);
}

function searchProject(projectName) {
  loadTasksInProject(
    taskArray.filter((projects) => projects.project.includes(projectName))
  );
}
