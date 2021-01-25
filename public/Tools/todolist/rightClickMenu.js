// show menu when right click
var menu = document.querySelector(".menu");
var cancelButton = document.getElementById("cancel");
var rightClickElement;
var deleteTaskButton = document.getElementById("delete-task");
var isShowingMenu = false;


window.oncontextmenu = function menuOperations(evt){
    if (document.getElementById(evt.target.id).classList.contains("task")){
        evt.preventDefault();
        rightClickElement = document.getElementById(evt.target.id);
        menu.classList.remove('off');
        menu.style.position = "fixed";
        menu.style.top = `${window.event.clientY-120}px`
        menu.style.left= `${window.event.clientX-900}px`
    }

}

function removeMenu(){
    if(!menu.classList.contains("off") && !isShowingMenu) {
        menu.classList.add("off");
    }    
}    

function showMenu(){
    isShowingMenu = true;
    menu.classList.remove("off");
}    

function menuOffRemove(){
    isShowingMenu = false;
    menu.classList.add("off");
}    


deleteTaskButton.addEventListener("click", () => {
    rightClickElement.parentNode.removeChild(rightClickElement);
})

cancelButton.addEventListener("click", function(){
    menu.classList.add("off")
})    




