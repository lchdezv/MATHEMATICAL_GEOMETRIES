function setup() {
  createCanvas(1464, 832);
}

function draw() {
  background(0);
  stroke(255,180,50);
  noFill();
  recursive_circle(732, 416, 732);

}

r = 0.5; 

function recursive_circle(x, y, d) {
  
  ellipse(x, y, d);

  if (d > 2) {
    recursive_circle(x + d * r, y, d * r);
    recursive_circle(x - d * r, y, d * r);
    recursive_circle(x , y + d * r, d * r);
  }

}
