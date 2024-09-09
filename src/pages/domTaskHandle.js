import { taskArray } from "./createTask";
import "./taskCards.css";

export const loadDomTaskHandle = function () {
  const display = document.querySelector(
    ".display-container > div:last-of-type"
  );
  display.innerHTML = "";

  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (storedTasks) {
    if (storedTasks.length === 0) {
      const message = document.createElement("p");
      message.classList.add("message");
      message.textContent =
        "No tasks found in tasks list. Start by adding your first task!";

      display.append(message);

      return;
    } else {
      taskArray.length = 0;
      taskArray.push(...storedTasks);
    }
  }

  const taskCardsHolder = document.createElement("div");
  taskCardsHolder.classList.add("task-cards-holder");

  for (let task of taskArray) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `<h3>${task.title}</h3>
    <p><strong>Description:</strong> ${task.description}</p>
    <p><strong>Due:</strong> <span>${task.dueDate}</span></p>
    <p><Strong>Project:</strong> <span>${task.project}</span></p>
    <p><strong>Priority:</strong> <span>${task.priority}</span></p>`;

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.textContent = "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("data-title", task.title);
    deleteButton.textContent = "Delete";

    taskCard.append(completeButton);
    taskCard.append(deleteButton);
    taskCardsHolder.append(taskCard);
    display.append(taskCardsHolder);
  }

  const getCompleteButtons = display.querySelectorAll(".complete-button");
  getCompleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const taskCard = button.closest(".task-card");
      taskCard.querySelector("h3").classList.add("line-through");
    });
  });

  const getDeleteButtons = display.querySelectorAll(".delete-button");
  getDeleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      deleteTask(button.getAttribute("data-title"));
    });
  });
};

function deleteTask(title) {
  const index = taskArray.findIndex((task) => task.title === title);
  taskArray.splice(index, 1);
  localStorage.removeItem("tasks");
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  loadDomTaskHandle();
}
