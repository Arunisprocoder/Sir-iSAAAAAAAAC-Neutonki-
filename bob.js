class Bob {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 1.35,
      friction: 0.0000000008,
      density: 1,
    };
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x, this.y, this.radius / 2.01, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    
    fill("blue");
    
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
