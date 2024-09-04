import { taskArray } from "./createTask";
import { loadTasksInProject } from "./domTasksInProjectHandle";

export function handleTasksInProjects(projectName) {
  searchProject(projectName);
}

function searchProject(projectName) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (storedTasks) {
    taskArray.length = 0;
    taskArray.push(...storedTasks);
  }

  loadTasksInProject(
    taskArray.filter((projects) => projects.project.includes(projectName))
  );
}
