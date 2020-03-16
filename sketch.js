let array = [];

function setup() {
  createCanvas(500, 500);
  background(220);

  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed == true) {
    background(0);
    stroke(map(mouseX, 0, 600, 0, 255, true));
//    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
//  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY); = drawing mirror image
// both draws at same time if not ctrl+/ out.
  }
}

function keyTyped(){
//console.log(`key ${key} is being typed`)
//  same thing ^v
//console.log("key " + key + " is being typed")

  if (key === 's'){
    // save image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    // display image
    background(220);
    beginShape();
    // for let the iterator equal 0, as long as i is less than the length of the array, increase it by 1
    for (let i = 0; i < array.length - 1; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }

    endShape();

    // line(array[0][0], array[0][1], array[1][0], array[1][1]);
    // line(array[1][0], array[1][1], array[2][0], array[2][1]);
    // ^ same as the "for" loop

  }

  return false;
}

// NOTES:
//    mousePressed() = function / called once after every mouse is mousePressed
//    mouseIsPressed = if statement /
//    !mouseIsPressed = if NOT mouseIsPressed = false

//    pmouseX/Y = PREVIOUS mouseX/Y

// keyPressed() and keyIsPressed is similar
// === = checks the value AND the variable each time
// == = checks the value
// ${} will print the value of the key
