dragElement(document.getElementById("simpleDate"));
dragElement(document.getElementById("workingDaysDate"));
dragElement(document.getElementById("timeFormat12H"));
dragElement(document.getElementById("formatSelector"));
dragElement(document.getElementById("timeFormat24H"));
dragElement(document.getElementById("colorSelector"));

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