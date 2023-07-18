const tasks = [];

function addTask() {
  const input = document.getElementById("taskInput").value.trim();
  const category = document.getElementById("categorySelect").value;
  const deadline = document.getElementById("deadlineInput").value;
  const priority = document.getElementById("prioritySelect").value;

  if (input !== "" && category !== "default" && priority !== "default") {
    const newTask = {
      task: input,
      category: category,
      deadline: deadline,
      priority: priority,
      completed: false
    };

    tasks.push(newTask);
    renderTasks();

    document.getElementById("taskInput").value = "";
    document.getElementById("categorySelect").value = "default";
    document.getElementById("deadlineInput").value = "";
    document.getElementById("prioritySelect").value = "default";
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    const taskCell = document.createElement("td");
    taskCell.textContent = task.task;
    row.appendChild(taskCell);

    const categoryCell = document.createElement("td");
    categoryCell.textContent = task.category;
    row.appendChild(categoryCell);

    const deadlineCell = document.createElement("td");
    deadlineCell.textContent = task.deadline;
    row.appendChild(deadlineCell);

    const priorityCell = document.createElement("td");
    priorityCell.textContent = task.priority;
    row.appendChild(priorityCell);

    const statusCell = document.createElement("td");
    const statusButton = document.createElement("button");
    statusButton.textContent = task.completed ? "Done" : "Undone";
    statusButton.addEventListener("click", () => toggleTaskCompletion(index));
    statusCell.appendChild(statusButton);
    row.appendChild(statusCell);

    if (task.completed) {
      row.classList.add("completed-task");
    }

    taskList.appendChild(row);
  });
}

// Call renderTasks initially to display any existing tasks
renderTasks();