let balls = [];

let desired;
let p5;
const GOAL_DIST = 150;

let forceScale = .01;
const JIT = .02; 

export function main(_p5) {
  p5 = _p5;
  console.log(p5);
  
  p5.setup = _ => {
    let cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    cnv.style("position: absolute; right: 0; bottom: 0; z-index: -10;");
    cnv.parent("p5Canvas");
    desired = p5.createVector(p5.width - 300, p5.height - 300);
    for (let i = 0; i < 30; i++) {
      balls[i] = new ball(
        desired.x + p5.random(-20, 20),
        desired.y + p5.random(-20, 20)
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
      if (balls[i].distanceFrom(desired) > 20) {
        balls[i].attractTo(desired, 40);
      }
      balls[i].move();
    }
  }

  p5.mousePressed = _ => {
    balls.forEach( b => {
      b.spin();
    });
  }
}

function randomMovement() {
  return p5.createVector(
    p5.random(-JIT, JIT),
    p5.random(-JIT, JIT)
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

function dot(v1, v2) {
  return (v1.x * v2.x) + (v1.y * v2.y);
}

function angleBetween(v1, v2) {
  const num = dot(v1, v2);
  const den = v1.mag() * v2.mag();
  return p5.acos(num / den);
}

class ball {
  pos;
  size;
  velocity;
  forceCap = 10;
  attractCutoff

  constructor(x, y) {
    this.pos = p5.createVector(x, y);
    this.velocity = p5.createVector(0,0);
    this.size = p5.random(20, 35);
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
    this.velocity.mult(.99);
  }

  interactWithOtherBalls(others, selfId) {
    others.forEach((other, index) => {
      if (index == selfId) return;
      let distance = vectorSubtract(this.pos, other.pos);
      if (distance.mag() < GOAL_DIST) {
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
      this.repelFrom(mouseVector, 10**10 / vectorToMouse.mag());
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
    let scale = -forceScale * (this.size*strength) / denom;
    difference.mult(scale);
    return difference;
  }

  applyForce(force) {
    if (force.mag() > this.forceCap) {
      force.mult(this.forceCap/force.mag());
    }
    this.velocity.add(force);
  }

  distanceFrom(otherPos) {
    return vectorSubtract(this.pos, otherPos).mag();
  }
}