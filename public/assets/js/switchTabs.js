let skyLights = document.getElementById("skylights");
let tab = document.getElementsByClassName("newTab");
let tabsToOpen = document.getElementsByClassName("open-tabs");
let toolsTab = document.getElementById("Tools");

document.getElementById("home-tab").style.display = "block";

function openTabs(e, tabName) {
  let transitionAnimation =
    ".transition-1 {position: fixed; top: 0; right: -100%; bottom: 0; width:100%;z-index: 99999999999999999;background: linear-gradient(270deg, #FEAE79 0%, rgba(255, 151, 134, 0.979681) 15.44%, #FCB484 100%);transition: 0.3s ease-out;} .transition-1.is-active {right: 0px;} .transition-2 {position: fixed;top: 0;left: -100%;width: 100%;bottom: 0;z-index: 9999999;background: linear-gradient(270deg, #FEAE79 0%, rgba(255, 151, 134, 0.979681) 15.44%, #FCB484 100%);transition: 0.3s ease-out;} .transition-2.is-active {left: 0px;} .transition-3 {position: fixed;top: 100%;left: 0;width: 100%;height: 100%;z-index: 9999999;background: linear-gradient(270deg, #FEAE79 0%, rgba(255, 151, 134, 0.979681) 15.44%, #FCB484 100%);transition: 0.3s ease-out;} .transition-3.is-active {top: 0;} .transition-4 {position: fixed;bottom: 100%;left: 0;width: 100%;height: 100%;z-index: 9999999;background: linear-gradient(270deg, #FEAE79 0%, rgba(255, 151, 134, 0.979681) 15.44%, #FCB484 100%);transition: 0.3s ease-out;} .transition-4.is-active {bottom: 0;}";
  transitionAnimation = document.createTextNode(transitionAnimation);
  document.getElementsByTagName("style")[0].appendChild(transitionAnimation);

  for (let i of tab) {
    i.style.display = "none";
  }

  for (let j of tabsToOpen) {
    j.className = j.className.replace(" opened", "");
  }

  let currentTab = document.getElementById(tabName);
  const transition_elements = document.querySelectorAll(".transition");

  currentTab.children[0].classList.add("is-active");
  setTimeout(() => {
    for (let transition_el of transition_elements) {
      transition_el.classList.remove("is-active");
    }
  }, 300);

  currentTab.style.display = "block";

  if (e.target.id == "tryOutToolsButton") {
    toolsTab.classList.add("opened");
  } else {
    e.currentTarget.className += " opened";
  }
}

function onBlur() {
  document.getElementById("list").style.display = "none";
  let titles = document.getElementsByClassName("tools-title");
  for (i = 0; i < titles.length; i++) {
    titles[i].innerHTML = !titles[i].innerHTML.startsWith("<mark>")
      ? titles[i].innerHTML
      : titles[i].innerHTML.split(">")[1];
  }
}

function searchTool() {
  let input = document.getElementById("tools-searcher").value.trim();
  input = input.toLowerCase();
  let x = document.getElementsByClassName("list-tools");

  if (input === "") {
    document.getElementById("list").style.display = "none";
    return;
  }
  document.getElementById("list").style.display = "";

  let titles = document.getElementsByClassName("tools-title");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
      titles[i].innerHTML = !titles[i].innerHTML.startsWith("<mark>")
        ? titles[i].innerHTML
        : titles[i].innerHTML.split(">")[1];
    } else {
      x[i].style.display = "list-item";
      titles[i].innerHTML = !titles[i].innerHTML.startsWith("<mark>")
        ? titles[i].innerHTML
        : titles[i].innerHTML.split(">")[1];
      titles[i].innerHTML = "<mark>" + titles[i].innerHTML + "</mark>";
    }
  }
}
