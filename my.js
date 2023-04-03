const canvas=document.getElementById("canvas");
// canvas.width=window.innerWidth-60;

const ctx = canvas.getContext("2d");
ctx.fillStyle="white";
ctx.fillRect(0,0,canvas.width,canvas.height);

let isDrawing = false,
selectedTool = "brush",
brushWidth = "5",
color="black";

canvas.addEventListener("touchstart",start,false);
canvas.addEventListener("touchmove",draw,false);
canvas.addEventListener("mousedown",start,false);
canvas.addEventListener("mousemove",draw,false);

function start(event){
    isDrawing=true;
    ctx.beginPath();
    ctx.moveTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop);
    event.preventDefault();
}


function draw(event){
    if(isDrawing){
        ctx.lineTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop);
        ctx.strokeStyle=color;
        ctx.lineWidth=brushWidth;
        
    }

}
