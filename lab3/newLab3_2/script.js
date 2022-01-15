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

function drawBlock() {
  var button = document.getElementById('generateBtn');
  var draggableArea = document.getElementById('movableObjectZone');

  var newDiv = document.createElement('div');
  var newId = Math.random().toString();
  newDiv.setAttribute('id', newId);
  newDiv.setAttribute('class', 'draggableObject');
  newDiv.setAttribute('draggable', true);
  newDiv.style.backgroundColor = randomColor();
  draggableArea.appendChild(newDiv);
  
  dragElement(document.getElementById(newId));
};

function dragElement(object) {
  var position1 = 0, position2 = 0, position3 = 0, position4 = 0;
  if (object) {
    if (document.getElementById(object.id)) {
      document.getElementById(object.id).onmousedown = dragMouseDown;
    } else {
      object.onmousedown = dragMouseDown;
    }

    function elementDrag(o) {
      o = o || window.event;
      o.preventDefault();
      position1 = position3 - o.clientX;
      position2 = position4 - o.clientY;
      position3 = o.clientX;
      position4 = o.clientY;
      object.style.top = (object.offsetTop - position2) + "px";
      object.style.left = (object.offsetLeft - position1) + "px";
    };
	
    function dragMouseDown(o) {
      o = o || window.event;
      o.preventDefault();
      position3 = o.clientX;
      position4 = o.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };


    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    };
  };
};