function shorten() {
  const code = cm.getValue();
  const result = UglifyJS.minify(code);
  if (result.error !== undefined) {
    cmdp.setValue(`${result.error}`);
  } else {
    cmdp.setValue(`${result.code}`);
  }
}

let cm = new CodeMirror.fromTextArea(document.getElementById("shortener-ip"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
  lineWrapping: true,
  scrollbarStyle: "overlay",
  autoCloseBrackets: true,
});

cm.setValue(
  `
function greet(name) {
  console.log(\`Hello, \` + name + "!");
}
greet("wo" + 'r' + "ld")
`.trim() + "\n"
);

let cmdp = new CodeMirror.fromTextArea(document.getElementById("shortened"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
  lineWrapping: true,
  scrollbarStyle: "overlay",
  autoCloseBrackets: true,
  readOnly: "nocursor",
});

document.addEventListener("keyup", function (e) {
  shorten();
});

shorten();
