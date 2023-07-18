const tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const categorySelect = document.getElementById("categorySelect");
  const deadlineInput = document.getElementById("deadlineInput");
  const prioritySelect = document.getElementById("prioritySelect");

  const task = taskInput.value.trim();
  const category = categorySelect.value;
  const deadline = deadlineInput.value;
  const priority = prioritySelect.value;

  if (task !== "" && category !== "default" && priority !== "default") {
    const newTask = {
      task: task,
      category: category,
      deadline: deadline,
      priority: priority,
      state: "Pending"
    };

    tasks.push(newTask);
    renderTasks();

    taskInput.value = "";
    categorySelect.value = "default";
    deadlineInput.value = "";
    prioritySelect.value = "default";
  }
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

    const stateCell = document.createElement("td");
    stateCell.textContent = task.state;
    row.appendChild(stateCell);

    taskList.appendChild(row);
  });
}