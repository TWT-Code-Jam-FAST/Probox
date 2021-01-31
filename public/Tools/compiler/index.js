const Storage = window.localStorage;

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
  update();
  fetchData(code, lang);
}

var lang = "nodejs-head";

function update() {
  const input = document.getElementById("select");
  const theme = input.options[input.selectedIndex].value;
  cm.setOption("theme", theme.trim().toLowerCase());
  localStorage.setItem("SAVETHEME", input.selectedIndex);
  localStorage.setItem("SAVELANG", lang);
  localStorage.setItem("SAVECODE", cm.getValue());
}

$(document).ready(function () {
  if ((t = localStorage.getItem("SAVETHEME")))
    document.getElementById("select").selectedIndex = t;
  cm.on("change", update);
  if ((l = localStorage.getItem("SAVELANG"))) {
    lang = l;
    var temp = JSCODE;
    var i = 1;
    var j = "js";
    var m = "javascript";
    switch (l) {
      case "cpython-head":
        temp = PYCODE;
        i = 2;
        j = "py";
        m = "python";
        break;
      case "nodejs-head":
        temp = JSCODE;
        i = 1;
        j = "js";
        m = "javascript";
        break;
      case "gcc-head":
        temp = CPPCODE;
        i = 3;
        j = "cpp";
        m = "text/x-c++src";
        break;
      case "ruby-head":
        temp = RBCODE;
        i = 4;
        j = "rb";
        m = "ruby";
        break;
      case "lua-5.4.0":
        temp = LUACODE;
        i = 5;
        j = "lua";
        m = "lua";
        break;
    }
    if ((co = localStorage.getItem("SAVECODE"))) temp = co;
    $("#tab-" + i).tab("show");
    $("#select-" + j).tab("show");
    cm.setValue(temp);
    cm.setOption("mode", m);
  }
  document.getElementById("msg").innerHTML = "Press 'Run' to run code!";
  $("#select-py").click(function (e) {
    e.preventDefault();
    cm.setValue(PYCODE);
    cm.setOption("mode", "python");
    lang = "cpython-head";
    update();
  });
  $("#select-js").click(function (e) {
    e.preventDefault();
    cm.setValue(JSCODE);
    cm.setOption("mode", "javascript");
    lang = "nodejs-head";
    update();
  });
  $("#select-cpp").click(function (e) {
    e.preventDefault();
    cm.setValue(CPPCODE);
    cm.setOption("mode", "text/x-c++src");
    lang = "gcc-head";
    update();
  });
  $("#select-rb").click(function (e) {
    e.preventDefault();
    cm.setValue(RBCODE);
    cm.setOption("mode", "ruby");
    lang = "ruby-head";
    update();
  });
  $("#select-lua").click(function (e) {
    e.preventDefault();
    cm.setValue(LUACODE);
    cm.setOption("mode", "lua");
    lang = "lua-5.4.0";
    update();
  });
  update();

  $("select").on("change", update);
});

function reset() {
  localStorage.clear();
}
