import { format } from "date-fns";

const taskContainer = document.querySelector(".task-container");
const taskDialog = taskContainer.querySelector("dialog");
const form = taskDialog.querySelector("form");

export const taskArray = [];

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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
  let taskPriority = "";

  form.querySelectorAll("div input[type='radio']").forEach((radio) => {
    if (radio.checked) taskPriority = radio.value;
  });

  const newTask = new Task(
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority
  );

  if (
    taskTitle !== "" &&
    taskDescription !== "" &&
    taskDueDate !== "" &&
    taskPriority !== ""
  ) {
    taskArray.push(newTask);
    taskDialog.close();
  }

  form.reset();
}
