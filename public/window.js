var container;
var iframeStyle;

function create(htmlString) {
  let frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlString;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

function closeWindow(element) {
  element.parentNode.remove();
  // unblurBackgroundStyle = document.createTextNode(
  //   "main { filter: blur(0px);-webkit-filter:blur(0px);} "
  // );

  // document.getElementsByTagName("style")[0].append(unblurBackgroundStyle);
}

function createStackOverFlow() {
  container = document.getElementById("windows-container");
  let stackoverflowPage = create(
    `<div class="window-container stackoverflow"><button class="window-closer" onclick="closeWindow(this)">×</button><iframe id="stackoverflow-window" scrolling="yes" src="Tools/stackoverflow/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    // main {  filter: blur(8px);-webkit-filter: blur(8px);}
    "iframe {border: 10px solid #fcdc5c; border-radius: 20px;}"
  );
  container.appendChild(stackoverflowPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createCalculator() {
  container = document.getElementById("windows-container");
  let calculatorPage = create(
    `<div class="window-container calculator"><button id="calculator-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="calculator-window" scrolling="yes" src="Tools/calculator/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    // main {  filter: blur(8px);-webkit-filter: blur(8px);}
    "iframe {border: 10px solid #6b507c; border-radius: 20px;}"
  );
  container.appendChild(calculatorPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}
