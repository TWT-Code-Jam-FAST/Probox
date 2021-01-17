let skyLights = document.getElementById("skylights");
let tab = document.getElementsByClassName("newTab");
let tabsToOpen = document.getElementsByClassName("open-tabs");
let toolsTab = document.getElementById("Tools");

document.getElementById("home-tab").style.display = "block";

function openTabs(e, tabName) {
  let transitionAnimation =
    ".transition-1 {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99999999999999999;background-color: #212121;opacity: 0;pointer-events: none;transition: 0.5s ease-out;}  .transition-1.is-active {pointer-events: all;opacity: 1;}";
  transitionAnimation = document.createTextNode(transitionAnimation);
  document.getElementsByTagName("style")[0].appendChild(transitionAnimation);

  for (let i of tab) {
    i.style.display = "none";
  }

  for (let j of tabsToOpen) {
    j.className = j.className.replace(" opened", "");
  }

  if (tabName == "home-tab") {
    skyLights.style.display = "block";
  } else {
    skyLights.style.display = "none";
  }
  let currentTab = document.getElementById(tabName);
  const transition_elements = document.querySelectorAll(".transition");

  console.log(currentTab.children[0].classList.add("is-active"));
  setTimeout(() => {
    for (let transition_el of transition_elements) {
      transition_el.classList.remove("is-active");
    }
  }, 500);

  currentTab.style.display = "block";

  if (e.target.id == "tryOutToolsButton") {
    toolsTab.classList.add("opened");
  } else {
    e.currentTarget.className += " opened";
  }
}
