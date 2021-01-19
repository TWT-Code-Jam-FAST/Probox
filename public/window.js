function create(htmlString) {
  let frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlString;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

function createStackOverFlow() {
  container = document.getElementById("windows-container");
  stackoverflowPage = create(
    `<div class="window-container stackoverflow"><iframe src="Tools/stackoverflow/index.html"></iframe></div>;`
  );
  blurBackgroundStyle = document.createTextNode(
    "main {  filter: blur(8px);-webkit-filter: blur(8px);}"
  );
  container.appendChild(stackoverflowPage);
  document.getElementsByTagName("style")[0].append(blurBackgroundStyle);
}
