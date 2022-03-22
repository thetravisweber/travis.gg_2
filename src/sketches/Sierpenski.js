let p5;
let cutoff = 5;

let speed = 1;

export function main(_p5) {
  p5 = _p5;

  p5.setup = _ => {      
    let cnv = p5.createCanvas(600, 500); 
    cnv.style("position: absolute; right: 0; bottom: 0; z-index: -10;");
    cnv.parent("p5Canvas");
  }

  p5.draw = _ => {      
    p5.background(220);
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(3);
    p5.push();
    drawSierpinski(p5.width/2, 0, p5.width * .8);
    p5.pop();

    if (speed > 0) {
      cutoff *= 1.01;
    } else {
      cutoff /= 1.01;
    }
    if (cutoff > p5.width/2 || cutoff < 4) {
      speed*=-1
    }
  }  
}

function midpoint(v1, v2) {
  return p5.createVector(
    (v1.x + v2.x) / 2,
    (v1.y + v2.y) / 2
  );
}

function drawSierpinski(x, y, size) {
  if (size <= cutoff) {
    return;
  }
  let tip = p5.createVector(x, y);

  p5.translate(tip.x, tip.y);

  let bottomLeft = p5.createVector(
    -size/2,
    size
  );
  let bottomRight = p5.createVector(
    size/2,
    size
  );
  let top = p5.createVector(
    0,
    0
  );

  p5.line(
    top.x,
    top.y,
    bottomLeft.x,
    bottomLeft.y,
  );
  p5.line(
    top.x,
    top.y,
    bottomRight.x,
    bottomRight.y
  );
  p5.line(
    bottomLeft.x,
    bottomLeft.y,
    bottomRight.x,
    bottomRight.y
  );
  // temp
  let right = midpoint(top, bottomRight);
  let left = midpoint(top, bottomLeft);
  let bott = midpoint(bottomLeft, bottomRight);
  p5.triangle(right.x, right.y, left.x, left.y);
  p5.triangle(right.x, right.y, bott.x, bott.y);
  p5.triangle(bott.x, bott.y, left.x, left.y);
  // end temp

  // midpoint of midline
  
  p5.push();
  drawSierpinski(0, -size/2, size/4);
  p5.pop();
  p5.push();
  drawSierpinski(size/4, -size, size/4);
  p5.pop();
  p5.push();
  drawSierpinski(-size/4, -size, size/4);
  p5.pop();
}

