var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var penColor = "black";
var pencilBtn = document.getElementById("pencil");
var eraserBtn = document.getElementById("eraser");
var resetBtn = document.getElementById("reset");
//var whiteBoardWindowCloserBtn = document.getElementById("whiteboard-window-closer"); 
var dataUrl;
var penWidth=10;


function setWidthAndHeight() {
  canvas.height = window.innerHeight - 20;
  canvas.width = window.innerWidth - 20;
}

window.addEventListener("load", () => {
    try {
        dataUrl = localStorage.getItem("drawing");
        var dataImg = new Image;
        dataImg.src = dataUrl;
        dataImg.onload = () => {
            ctx.drawImage(dataImg, 0, 0);
        }
    }
    catch {}
    setWidthAndHeight();
    let isPainting = false;
    function paint(evt) {

        if(!isPainting) return;
        ctx.lineWidth = penWidth;
        ctx.lineCap = "round";
        ctx.strokeStyle = penColor; 
        ctx.lineTo(evt.clientX, evt.clientY-50);
        ctx.stroke();
    };
    canvas.addEventListener("mousedown",(evt)=>{isPainting = true;paint(evt);});
    canvas.addEventListener("mouseup",()=>{
        isPainting = false;
        ctx.beginPath();
        localStorage.setItem("drawing", canvas.toDataURL());
    });
    canvas.addEventListener("mousemove",paint)
    pencilBtn.addEventListener("click", () => {penColor = "black"; penWidth=10;});
    eraserBtn.addEventListener("click", () => {penColor = "white"; penWidth=15;});
    resetBtn.addEventListener("click", () => {
        ctx.clearRect(0,0,canvas.width, canvas.height)
        localStorage.removeItem("drawing"); 
    });
});

window.addEventListener("resize", () => {
  //  try
 //       {localStorage.removeItem("drawing");}
//    catch{}
    localStorage.setItem("drawing", canvas.toDataURL());
    setWidthAndHeight();
    dataUrl = localStorage.getItem("drawing");
    var dataImg = new Image;
    dataImg.src = dataUrl;
    dataImg.onload = () => {
        ctx.drawImage(dataImg, 0, 0);
    }
});
