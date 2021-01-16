let skyLights = document.getElementById("skylights");
let tab = document.getElementsByClassName("newTab");
let tabsToOpen = document.getElementsByClassName("open-tabs");

document.getElementById("home-tab").style.display = "block";

function openTabs(e, tabName) {
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

  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " opened";
}
