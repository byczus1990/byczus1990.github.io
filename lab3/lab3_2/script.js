function drawSquare(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = randomColor();
ctx.beginPath();
ctx.fillRect(20, 20, 20, 20);
ctx.stroke();
}

function randomColor(){
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	return "#" + randomColor;
}