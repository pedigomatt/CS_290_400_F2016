var root = document.getElementsByTagName("body")[0];
var title = document.head.getElementsByTagName("title")[0];


//Creates Table
function table(){
  rows=3;
  columns=4;

  tableNode= document.createElement("table");
  root.appendChild(tableNode);
  var Node = document.createElement("thead");
	tableNode.appendChild(Node);

    for(var i=0; i<columns; i++){
	  var nextNode = document.createElement("th");
    nextNode.style.border="1px solid black";
	  nextNode.textContent = "Header "+(i+1);
	  Node.appendChild(nextNode);
	}

  var Node = document.createElement("tbody");
  tableNode.appendChild(Node);
  for(var i=0; i<rows; i++){
	var nextNode= document.createElement("tr");
	Node.appendChild(nextNode);
    for(var t=0; t<columns; t++){
	  var next1Node = document.createElement("td");
	  next1Node.style.border="1px solid black";
	  next1Node.textContent =(i+1)+", "+(t+1);
	  nextNode.appendChild(next1Node);
	  }
	}
  }

//Creates Table
var tab = new table();


//Create up button
var up = document.createElement("button");
text = document.createTextNode("Up");
root.appendChild(up);
up.appendChild(text);

//Inserts break
var brea = document.createElement("br")
root.appendChild(brea)

//Creates Left button
var left = document.createElement("button");
var text = document.createTextNode("Left");
root.appendChild(left);
left.appendChild(text);

//Creates Right button
var right = document.createElement("button");
text = document.createTextNode("Right");
root.appendChild(right);
right.appendChild(text);

//Inserts break
var brea1 = document.createElement("br")
root.appendChild(brea1)

//Creates Down button
var down = document.createElement("button");
text = document.createTextNode("Down");
root.appendChild(down);
down.appendChild(text);

//Inserts break
var brea2 = document.createElement("br")
root.appendChild(brea2)

//Creates mark button
var mark = document.createElement("button");
text = document.createTextNode("Mark");
root.appendChild(mark);
mark.appendChild(text);

//Add Event Listener
document.body.addEventListener("click",function(event){
  if (event.target.textContent == "Up"){
    if(cell.parentNode.previousElementSibling == null) {
      return;
    }
    else {
      clear(cell);
      cell = cell.parentNode.previousElementSibling;
      cell = cell.childNodes[cindex];
      set(cell);
    }
  }
  else if (event.target.textContent == "Down"){
    if(cell.parentNode.nextElementSibling == null) {
      return;
    }
    else {
      clear(cell);
      cell = cell.parentNode.nextElementSibling;
      cell = cell.childNodes[cindex];
      set(cell);
    }
  }
  else if (event.target.textContent == "Left"){
    if(cell.previousElementSibling == null) {
      return;
    }
    else {
      clear(cell);
      cell = cell.previousElementSibling;
      cell = cell.parentNode.childNodes[--cindex];
      set(cell);
    }
  }
  else if (event.target.textContent == "Right"){
    if(cell.nextElementSibling == null) {
      return;
    }
    else {
      clear(cell);
      cell = cell.nextElementSibling;
      cell = cell.parentNode.childNodes[++cindex];
      set(cell);
    }
  }
  else if (event.target.textContent == "Mark"){
    cell.style.backgroundColor = "yellow";
  }
});

//Changes border to 3px
function set(cell){
cell.style.border="3px solid black";
}

//Changes border to 1px
function clear(cell){
cell.style.border="1px solid black";
}

//Sets first cell
var cell = document.getElementsByTagName("td")[0];
var cindex=0;
set(cell);
