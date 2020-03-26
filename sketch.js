let array = [];
let backgroundColor = 220;

let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  // createCanvas(windowWidth, windowHeight/1.5);
  createCanvas(500,500);
  background(backgroundColor);

  drawGrid();

  noFill();
}

function draw() {
  if (mouseIsPressed) {
    // backgroundColor -= 10;
    // background(backgroundColor);
    // decrease by 2 frames

    // background(220, 220, 220, 5);
    // strokeWeight(strokeWidth);
    //
    // noiseOffset += 0.05;
    // strokeWidth = noise(noiseOffset) * 50;


// different drawing methods:
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY); // draws mirror image
    // both draws at same time if not ctrl+/ out.
    line(mouseY, mouseX, pmouseY, pmouseX);
    line(width - mouseY, height - mouseX, width - pmouseY, height - pmouseX);

    line(-mouseX, -mouseY, -pmouseX, -pmouseY);

    // array.push([mouseX, mouseY]);
    //
    // beginShape();
    // // for let the iterator equal 0, as long as i is less than the length of the array, increase it by 1
    // for (let i = 0; i < array.length - 1; i++) {
    //   // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1]);
    // }
    // endShape();
 }
}

function keyTyped() {
  //console.log(`key ${key} is being typed`)
  //  same thing ^v
  //console.log("key " + key + " is being typed")

  if (key === 's') {
    // save image
    saveCanvas('fileName', 'png');

  // } else if (key === 'd') {
  //   // display image
  //   background(220);
  //   beginShape();
  //   // for let the iterator equal 0, as long as i is less than the length of the array, increase it by 1
  //   for (let i = 0; i < array.length - 1; i++) {
  //     // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  //     curveVertex(array[i][0], array[i][1]);
  //   }
  //   endShape();

    // line(array[0][0], array[0][1], array[1][0], array[1][1]);
    // line(array[1][0], array[1][1], array[2][0], array[2][1]);
    // ^ same as the "for" loop

  } else if (key === 'e') {
    // erase image
    background(backgroundColor);
    drawGrid();
    noFill();
  }

  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 220;
}

function drawGrid() {
  numCells = 20;
  let startColor = color(141, 39, 219, 90);
  let endColor = color(20, 200, 160, 90);
  let fillColor;
  strokeWeight (1);
  stroke(0, 0, 0, 50);

  for (let i = 0; i <= width; i += width/numCells) {
    for (let j = 0; j <= height; j += height/numCells) {
      fillColor = lerpColor(startColor, endColor, j/height);
      fill(fillColor);

      rect(i, j, width/numCells, height/numCells);
    }
  }
  strokeWeight (3);
  stroke(0);

  // fillColor = 255;
  //
  // for (let i = 0; i <= width; i += width/numCells){
  //   for (let j = 0; j <= height; j += height/numCells){
  //     if (fillColor === 255){
  //       fillColor = 240;
  //     } else {
  //       fillColor = 255;
  //     }
  //     fill(fillColor);
  //     rect(i, j, width/numCells, height/numCells);
  //   }
  // }
}

// OTHER NOTES:
//    mousePressed() = function / called once after every mouse is mousePressed
//    mouseIsPressed = if statement /
//    !mouseIsPressed = if NOT mouseIsPressed = false

//    pmouseX/Y = PREVIOUS mouseX/Y

// keyPressed() and keyIsPressed is similar
// === = checks the value AND the variable each time
// == = checks the value
// ${} will print the value of the key
