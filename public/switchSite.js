let page = window.location.href.split("#")[1] || "home";

switch (page.toLowerCase().trim()) {
  case "calculator":
    createCalculator();
    break;
  case "stackoverflow":
    createStackOrflowverFlow();
    break;
  case "short":
    createCodeShortener();
    break;
  case "dictionary":
    createDictionary();
    break;
  case "compiler":
    createCompiler();
    break;
  case "whileboard":
    createWhiteBoard();
    break;
  case "regex":
    createRegexTemplate();
    break;
  case "todo":
    createToDoList();
    break;
  case "ascii":
    createAsciiChart();
    break;
  case "video":
    createVideoRecorder();
    break;
  default:
    break;
}
