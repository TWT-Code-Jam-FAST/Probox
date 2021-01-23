var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

function setWidthAndHeight(){
    canvas.height = window.innerHeight-20;
    canvas.width = window.innerWidth-20;
}

window.addEventListener("load", () => {
    setWidthAndHeight();
    let isPainting = false;
    function paint(evt) {

        if(!isPainting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(evt.clientX, evt.clientY);
        ctx.stroke();
    };
    canvas.addEventListener("mousedown",(evt)=>{isPainting = true;paint(evt);});
    canvas.addEventListener("mouseup",()=>{isPainting = false;ctx.beginPath();});
    canvas.addEventListener("mousemove",paint)

});

window.addEventListener("resize", () => {
    setWidthAndHeight();
});