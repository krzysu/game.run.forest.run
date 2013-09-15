(function() {
  window.Game || (window.Game = {});

  Game.Hero = (function() {
    function Hero(x, y, speed) {
      if (x == null) {
        x = 10;
      }
      if (y == null) {
        y = 10;
      }
      if (speed == null) {
        speed = 1;
      }
      this.currentPosition = {
        x: x,
        y: y
      };
      this.targetPosition = {
        x: x,
        y: y
      };
      this.speed = speed;
    }

    Hero.prototype.goTo = function(x, y) {
      return this.targetPosition = {
        x: x,
        y: y
      };
    };

    Hero.prototype.draw = function(canvasContext) {
      this.count();
      canvasContext.fillStyle = "rgb(200,0,0)";
      return canvasContext.fillRect(this.currentPosition.x, this.currentPosition.y, 10, 10);
    };

    Hero.prototype.count = function() {
      var cur, speed, tar;
      cur = this.currentPosition;
      tar = this.targetPosition;
      speed = this.speed;
      if ((Math.abs(cur.x - tar.x) < speed) && (Math.abs(cur.y - tar.y) < speed)) {
        return;
      }
      if (tar.x !== cur.x && tar.x > cur.x) {
        cur.x += speed;
      } else if (tar.x !== cur.x && tar.x < cur.x) {
        cur.x -= speed;
      }
      if (tar.y !== cur.y && tar.y > cur.y) {
        return cur.y += speed;
      } else if (tar.y !== cur.y && tar.y < cur.y) {
        return cur.y -= speed;
      }
    };

    return Hero;

  })();

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Game || (window.Game = {});

  Game.Canvas = (function() {
    function Canvas(options) {
      this.draw = __bind(this.draw, this);
      this.onMouseDown = __bind(this.onMouseDown, this);
      var canvas;
      canvas = document.createElement('canvas');
      this.width = canvas.width = window.innerWidth;
      this.height = canvas.height = window.innerHeight;
      document.getElementById(options.parentId).appendChild(canvas);
      this.context = canvas.getContext('2d');
      this.hero = new Game.Hero();
      canvas.addEventListener("mousedown", this.onMouseDown, false);
      setInterval(this.draw, 10);
    }

    Canvas.prototype.onMouseDown = function(e) {
      var x, y;
      x = e.pageX;
      y = e.pageY;
      return this.hero.goTo(x, y);
    };

    Canvas.prototype.draw = function() {
      this.context.clearRect(0, 0, this.width, this.height);
      return this.hero.draw(this.context);
    };

    return Canvas;

  })();

  (function() {
    return new Game.Canvas({
      parentId: 'game-wrapper'
    });
  })();

}).call(this);
