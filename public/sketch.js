var canvas = null;

function setup() {
  const container = $("#board");
  canvas = createCanvas(container.width(), container.height());
  
  canvas.parent("board");
  
}

function myTriangle() {

  const center = {x: canvas.width/2.0, y: canvas.height/2.0};
  let p1 = { x: 0, y:0 };
  let p2 = { x: 0, y:0 };
  let numberOfTriangles = random(33);
  for(let i = 0; i < numberOfTriangles; i ++ ){
    p1 = {x : ( random(canvas.width)), y: ( random(canvas.height)) } ;
    p2 = {x : ( random(canvas.width)), y: ( random(canvas.height)) } ;
    triangle(center.x,center.y,p1.x,p1.y,p2.x,p2.y);
  }

}

/*
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
*/
