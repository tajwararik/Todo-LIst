import { taskArray } from "./createTask";
import "./taskCards.css";

export const loadDomTaskHandle = function () {
  const display = document.querySelector(
    ".display-container > div:last-of-type"
  );
  display.innerHTML = "";

  for (let task of taskArray) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `<h3>${task.title}</h3>
    <p><strong>Description:</strong> ${task.description}</p>
    <p><strong>Due:</strong> ${task.dueDate}</p>
    <p><strong>Priority:</strong> ${task.priority}`;

    display.append(taskCard);
  }
};
