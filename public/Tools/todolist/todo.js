var taskBox = document.getElementById("todo-task-box");
var addTaskButton = document.getElementById("add-task-btn");
var taskInput = document.getElementById("task-input");
var createNewButton = document.getElementById("create-task-btn");
var taskContainer = document.getElementById("tasks-container");
var taskCount = 0;

function validateTask (string){
    return string.replace(/\s/g, '').length && string.length
}



createNewButton.addEventListener("click", ()=> {
    addTaskButton.style.display = "block";
    taskInput.style.display = "block";

    addTaskButton.addEventListener("click", () => {
        if(validateTask(taskInput.value)) {
            let newTask = document.createElement("li");
            newTask.innerHTML = taskInput.value;
            newTask.classList.add("task");
            taskContainer.style.display = "block";
            taskCount++;
            newTask.id = "task"+taskCount; 
            taskBox.appendChild(newTask);
            taskInput.value = "";
            taskInput.style.display = "none";
            addTaskButton.style.display = "none";
        } else {
            taskInput.style.borderColor = "red";
        }

       });
});

