function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.3;
  this.lift = -5 ;    
  this.velocity = 0;

  this.show = function() {
     image(pigeon, this.x, this.y, 100, 100);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}