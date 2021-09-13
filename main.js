var mouseEvent = "empty";

var last_position_of_x,last_position_of_y;

canvas = document.getElementById('myCanvas'); 

ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";  
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 

    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown"){
    ctx.beginPath();

    ctx.strokeStyle = "Black";

    ctx.lineWidth = 2;

    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);

    ctx.stroke();
}

last_position_of_x = current_position_of_mouse_x;

last_position_of_y = current_position_of_mouse_y;

}

function clear_area(){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
}