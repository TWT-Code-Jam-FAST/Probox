var taskBox = document.getElementById("todo-task-box");
var addTaskButton = document.getElementById("add-task-btn");
var taskInput = document.getElementById("task-input");
var createNewButton = document.getElementById("create-task-btn");

createNewButton.addEventListener("click", ()=> {
    addTaskButton.style.display = "block";
    taskInput.style.display = "block";

    addTaskButton.addEventListener("click", () => {
        let newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value;
        taskBox.appendChild(newTask);
        taskInput.value = "";
        taskInput.style.display = "none";
        addTaskButton.style.display = "none";
    });
});