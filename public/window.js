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

function createCodeShortener() {
  container = document.getElementById("windows-container");
  let codeShortenerPage = create(
    `<div class="window-container codeshortener"><button id="code_shortener-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="code_shortener-window" scrolling="yes" src="Tools/shortener/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 5px;}"
  );
  container.appendChild(codeShortenerPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createDictionary() {
  container = document.getElementById("windows-container");
  let dictionaryPage = create(
    `<div class="window-container dictionary"><button id="dictionary-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="dictionary-window" scrolling="yes" src="Tools/dictionary/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px;}"
  );
  container.appendChild(dictionaryPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createCompiler() {
  container = document.getElementById("windows-container");
  let compilerPage = create(
    `<div class="window-container compiler"><button id="compiler-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="compiler-window" scrolling="yes" src="Tools/compiler/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(compilerPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createWhiteBoard() {
  container = document.getElementById("windows-container");
  let WhiteBoardPage = create(
    `<div class="window-container whiteboard"><button id="whiteboard-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="whiteboard-window" scrolling="yes" src="Tools/whiteboard/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(WhiteBoardPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createRegexTemplate() {
  container = document.getElementById("windows-container");
  let regexTemplatePage = create(
    `<div class="window-container regexTemplate"><button id="regex-template-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="regex-template-window" scrolling="yes" src="Tools/regex/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(regexTemplatePage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createToDoList() {
  container = document.getElementById("windows-container");
  let toDoListPage = create(
    `<div class="window-container toDoList"><button id="todolist-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="todolist-window" scrolling="yes" src="Tools/todolist/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(toDoListPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createAsciiChart() {
  container = document.getElementById("windows-container");
  let asciiChartPage = create(
    `<div class="window-container asciiChart"><button id="ascii-chart-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="ascii-chart-window" scrolling="yes" src="Tools/ascii/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(asciiChartPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}

function createVideoRecorder() {
  container = document.getElementById("windows-container");
  let videoRecorderPage = create(
    `<div class="window-container videoRecorder"><button id="video-recorder-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="video-recorder-window" scrolling="yes" src="Tools/videoRecorder/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(videoRecorderPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}


function createVoiceRecorder() {
  container = document.getElementById("windows-container");
  let voiceRecorderPage = create(
    `<div class="window-container voice-recorder"><button id="voice-recorder-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="voice-recorder-window" scrolling="yes" src="Tools/voiceRecorder/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(voiceRecorderPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}
