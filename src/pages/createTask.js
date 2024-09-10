import { format } from "date-fns";
import { dropDown } from "./connectTasksToProjects";
import { loadDomProjectHandle } from "./domProjectHandle";
import { loadDomTaskHandle } from "./domTaskHandle";

const taskContainer = document.querySelector(".task-container");
const taskDialog = taskContainer.querySelector("dialog");
const form = taskDialog.querySelector("form");

export const taskArray = [
  {
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and dairy products for the week.",
    dueDate: format(new Date(), "dd MMM yyyy"),
    project: "General",
    priority: "Medium",
  },

  {
    title: "Schedule Doctor's Appointment",
    description: "Book an appointment with the dentist for a routine check-up.",
    dueDate: format(new Date(), "dd MMM yyyy"),
    project: "General",
    priority: "High",
  },

  {
    title: "Clean Living Room",
    description:
      "Vacuum the carpet, dust the furniture, and tidy up the living room.",
    dueDate: format(new Date(), "dd MMM yyyy"),
    project: "General",
    priority: "Low",
  },

  {
    title: "Pay Bills",
    description: "Pay the electricity and internet bills before the due date.",
    dueDate: format(new Date(), "dd MMM yyyy"),
    project: "General",
    priority: "High",
  },

  {
    title: "Call Mom",
    description: "Catch up with Mom and check in on how she’s doing.",
    dueDate: format(new Date(), "dd MMM yyyy"),
    project: "General",
    priority: "Medium",
  },
];

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
  const taskDueDateValue = form.querySelector("#due-date").value;
  const project = dropDown.value;
  let taskPriority = "";

  form.querySelectorAll("div input[type='radio']").forEach((radio) => {
    if (radio.checked) taskPriority = radio.value;
  });

  let taskDueDate = "";
  if (taskDueDateValue) {
    taskDueDate = format(new Date(taskDueDateValue), "dd MMM yyy");
  }

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
    taskDueDateValue !== "" &&
    project !== "Project" &&
    taskPriority !== ""
  ) {
    taskArray.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    taskDialog.close();
  }

  form.reset();
}
