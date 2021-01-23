let page = window.location.href.split("#")[1] || "home";

/*
if (page != "home") {
  window.open(`https://probox.vercel.app/Tools/${page}/index.html`, `_blank`);
}*/

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
  default:
    break;
}
