import { format } from "date-fns";
import { dropDown } from "./connectTasksToProjects";

const taskContainer = document.querySelector(".task-container");
const taskDialog = taskContainer.querySelector("dialog");
const form = taskDialog.querySelector("form");

export const taskArray = [];

class Task {
  constructor(title, description, dueDate, project, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
  }
}

export function createTask() {
  const taskTitle = form.querySelector("#title").value;
  const taskDescription = form.querySelector("#description").value;
  const taskDueDate = format(
    form.querySelector("#due-date").value,
    "dd MMM yyyy"
  );
  const project = dropDown.value;
  let taskPriority = "";

  form.querySelectorAll("div input[type='radio']").forEach((radio) => {
    if (radio.checked) taskPriority = radio.value;
  });

  const newTask = new Task(
    taskTitle,
    taskDescription,
    taskDueDate,
    project,
    taskPriority
  );

  if (
    taskTitle !== "" &&
    taskDescription !== "" &&
    taskDueDate !== "" &&
    project !== "Project" &&
    taskPriority !== ""
  ) {
    taskArray.push(newTask);
    taskDialog.close();
  }

  form.reset();
}
