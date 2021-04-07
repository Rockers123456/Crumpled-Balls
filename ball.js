class Ball {
    constructor(x, y,radius) {
      var options = { 
        density: 1.2, 
        friction: 0.5,
        restitution:0.3};
  
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      push();
      fill("red");
      ellipse(pos.x,pos.y, this.radius,this.radius);
      pop();
    }
  }