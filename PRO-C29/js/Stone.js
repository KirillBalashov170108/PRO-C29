class Stone {
    constructor(x, y, w, h) {
      let options = {
        restitution: 0.4
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
    show() {
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(1);
      ellipseMode(CENTER);
      fill(255);
      ellipse(0, 0, this.w, this.h);
      noStroke();
      pop();
    }
  }