let balls = [];

let middle;
let p5;

export function main(_p5) {
  p5 = _p5;
  console.log(p5);
  
  p5.setup = _ => {
    let cnv = p5.createCanvas(600, 600);
    cnv.style("position: absolute; right: 0; bottom: 0; z-index: -10;");
    cnv.parent("p5Canvas");
    middle = p5.createVector(p5.width/2, p5.height/2);
    for (let i = 0; i < 50; i++) {
      balls[i] = new ball(
        middle.x + p5.random(-20, 20),
        middle.y + p5.random(-20, 20)
      );
    }
    p5.noStroke();
    p5.fill(0);
  }

  p5.draw = _ => {
    p5.background(255);
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].interactWithOtherBalls(balls, i);
      if (mouseIsOnCanvas()) {
        balls[i].runFromMouse();
      }
      balls[i].attractTo(middle, 100);
      balls[i].move();
    }
  }
}

function randomMovement() {
  return p5.createVector(
    p5.random(-1, 1),
    p5.random(-1, 1)
  );
}

function mouseIsOnCanvas() {
  return (p5.mouseX > 10 && p5.mouseX < p5.width-10) &&
    (p5.mouseY > 10 && p5.mouseY < p5.height-10);
}

function vectorSubtract(start, end) {
  return p5.createVector(
    start.x - end.x,
    start.y - end.y
  );
}

class ball {
  pos;
  size;
  velocity;
  forceCap = 10;

  constructor(x, y) {
    this.pos = p5.createVector(x, y);
    this.velocity = p5.createVector(0,0);
    this.size = p5.random(10, 40);
  }

  draw() {
    p5.ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.applyForce(randomMovement());
    this.applyFriction();
    if (this.velocity.mag() > .1) this.pos.add(this.velocity);
  }

  applyFriction() {
    this.velocity.mult(.1);
  }

  interactWithOtherBalls(others, selfId) {
    others.forEach((other, index) => {
      if (index == selfId) return;
      let distance = vectorSubtract(this.pos, other.pos);
      if (distance.mag() < p5.width/3) {
        this.repelFrom(other.pos, other.size);
      } else {
        this.attractTo(other.pos, other.size);
      }
    });
  }

  runFromMouse() {
    let mouseVector = p5.createVector(p5.mouseX, p5.mouseY);
    let vectorToMouse = vectorSubtract(this.pos, mouseVector);
    if (vectorToMouse.mag() < this.size * 3) {
      this.repelFrom(mouseVector, 10**20 / vectorToMouse.mag());
    }
  }

  repelFrom(dilluter, strength=10) {
    let force = this.calculateForceToObject(dilluter, strength);
    force.mult(-1);
    this.applyForce(force);
  }

  attractTo(attractor, strength=10) {
    let force = this.calculateForceToObject(attractor, strength);
    this.applyForce(force);
  }

  calculateForceToObject(objectPosition, strength) {
    let difference = vectorSubtract(this.pos, objectPosition);
    let denom = difference.mag()**2
    let scale = -.1 * (this.size*strength) / denom;
    difference.mult(scale);
    return difference;
  }

  applyForce(force) {
    if (force.mag() > this.forceCap) {
      force.mult(this.forceCap/force.mag());
    }
    this.velocity.add(force);
  }
}