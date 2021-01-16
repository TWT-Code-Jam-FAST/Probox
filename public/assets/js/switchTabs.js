function openTabs(tabName) {
  let skyLights = document.getElementById("skylights");
  let tab = document.getElementsByClassName("newTab");

  for (let i of tab) {
    i.style.display = "none";
  }
  if (tabName == "home-tab") {
    skyLights.style.display = "block";
  } else {
    skyLights.style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}
