let cm = new CodeMirror.fromTextArea(document.getElementById("compiler-ip"), {
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
  console.log("Hello, " + name + "!");
}
greet("world");
`.trim() + "\n"
);

cm.setSize("auto", window.innerHeight);

const fetchData = async (code, lang) => {
  const req = await fetch(
    `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(
      code
    )}&lang=${encodeURIComponent(lang)}`
  );
  const newData = await req.json();

  const msg = newData.program_message || "";

  document.getElementById("msg").innerHTML = msg.replaceAll("\n", "<br>");
};

function submit() {
  const code = cm.getValue();
  fetchData(code, "nodejs-head");
}
