(function() {
  window.Game || (window.Game = {});

  Game.Hero = (function() {
    function Hero(data) {
      this.oldX = 10;
      this.newX = 10;
      this.oldY = 10;
      this.newY = 10;
    }

    Hero.prototype.goTo = function(x, y) {
      this.newX = x;
      return this.newY = y;
    };

    Hero.prototype.draw = function(ctx) {
      var newX, newY, oldX, oldY;
      newX = this.newX;
      newY = this.newY;
      oldX = this.oldX;
      oldY = this.oldY;
      if (newX !== oldX && newX > oldX) {
        this.oldX++;
      } else if (newX !== oldX && newX < oldX) {
        this.oldX--;
      }
      if (newY !== oldY && newY > oldY) {
        this.oldY++;
      } else if (newY !== oldY && newY < oldY) {
        this.oldY--;
      }
      ctx.fillStyle = "rgb(200,0,0)";
      return ctx.fillRect(oldX, oldY, 10, 10);
    };

    return Hero;

  })();

}).call(this);

(function() {
  (function() {
    var canvas, ctx, draw, hero, onMouseDown;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    hero = new Game.Hero();
    onMouseDown = function(e) {
      var x, y;
      x = e.pageX;
      y = e.pageY;
      hero.goTo(x, y);
      return console.log('clicked', x, y);
    };
    draw = function() {
      ctx.clearRect(0, 0, 300, 300);
      return hero.draw(ctx);
    };
    canvas.addEventListener("mousedown", onMouseDown, false);
    return setInterval(draw, 10);
  })();

}).call(this);
