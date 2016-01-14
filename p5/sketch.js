// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 0, 0);
}

function draw() {
  background(255);
  ellipse(mouseX,mouseY,75,100);

}
function mousePressed(){
	rect(250,250,75,100);
}


