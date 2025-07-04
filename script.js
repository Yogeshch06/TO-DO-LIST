function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);
const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "✔️";
  checkBtn.className = "check-btn";
  checkBtn.onclick = () => {
    li.classList.toggle("completed");
  };
  
  li.appendChild(checkBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "✖";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
