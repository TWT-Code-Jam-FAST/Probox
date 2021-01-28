let cm = new CodeMirror.fromTextArea(document.getElementById("compiler-ip"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
  lineWrapping: true,
  scrollbarStyle: "overlay",
  autoCloseBrackets: true,
});

cm.setValue(JSCODE);

cm.setSize("auto", window.innerHeight);

const fetchData = async (code, lang) => {
  const req = await fetch(
    `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(
      code
    )}&lang=${encodeURIComponent(lang)}`
  );
  const newData = await req.json();

  const msg = newData.program_message || newData.compiler_message || "";

  document.getElementById("msg").innerHTML = msg
    .replaceAll("\n", "<br>")
    .replaceAll(" ", "&nbsp");
  document.getElementById("runbtn").innerHTML = "Run";
  document.getElementById("runbtn").classList = "btn btn-success";
};

function submit() {
  document.getElementById("runbtn").innerHTML = "Compiling...";
  document.getElementById("runbtn").classList = "btn btn-info";
  const code = cm.getValue();
  fetchData(code, lang);
}

function selectTheme() {
  const input = document.getElementById("select");
  const theme = input.options[input.selectedIndex].value;
  cm.setOption("theme", theme.trim().toLowerCase());
}

var lang = "nodejs-head";

$(document).ready(function () {
  document.getElementById("msg").innerHTML = "Press 'Run' to run code!";
  $("#select-py").click(function (e) {
    e.preventDefault();
    cm.setValue(PYCODE);
    cm.setOption("mode", "python");
    lang = "cpython-head";
  });
  $("#select-js").click(function (e) {
    e.preventDefault();
    cm.setValue(JSCODE);
    cm.setOption("mode", "javascript");
    lang = "nodejs-head";
  });
  $("#select-cpp").click(function (e) {
    e.preventDefault();
    cm.setValue(CPPCODE);
    cm.setOption("mode", "text/x-c++src");
    lang = "gcc-head";
  });
  $("#select-rb").click(function (e) {
    e.preventDefault();
    cm.setValue(RBCODE);
    cm.setOption("mode", "ruby");
    lang = "ruby-head";
  });
  $("#select-lua").click(function (e) {
    e.preventDefault();
    cm.setValue(LUACODE);
    cm.setOption("mode", "lua");
    lang = "lua-5.4.0";
  });

  $("select").on("change", selectTheme);
});
