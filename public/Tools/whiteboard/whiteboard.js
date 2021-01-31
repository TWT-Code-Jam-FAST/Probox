var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var penColor = "black";
var pencilBtn = document.getElementById("pencil");
var eraserBtn = document.getElementById("eraser");
var url;

function drawingCanvasImage(dataUrl, context) {}

function setWidthAndHeight() {
  canvas.height = window.innerHeight - 20;
  canvas.width = window.innerWidth - 20;
}

window.addEventListener("load", () => {
  setWidthAndHeight();
  let isPainting = false;
  function paint(evt) {
    if (!isPainting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = penColor;
    ctx.lineTo(evt.clientX, evt.clientY - 50);
    ctx.stroke();
  }
  canvas.addEventListener("mousedown", (evt) => {
    isPainting = true;
    paint(evt);
  });
  canvas.addEventListener("mouseup", () => {
    isPainting = false;
    ctx.beginPath();
  });
  canvas.addEventListener("mousemove", paint);
  pencilBtn.addEventListener("click", () => {
    penColor = "black";
  });
  eraserBtn.addEventListener("click", () => {
    penColor = "white";
  });
});

window.addEventListener("resize", () => {
  setWidthAndHeight();
});
