(function() {
  window.Game || (window.Game = {});

  Game.Hero = (function() {
    function Hero(options) {
      var key, option;
      for (key in options) {
        option = options[key];
        this[key] = option;
      }
      this.speed || (this.speed = 1);
      this.color || (this.color = 'black');
      this.x || (this.x = 10);
      this.y || (this.y = 10);
      this.targetPosition = {
        x: this.x,
        y: this.y
      };
    }

    Hero.prototype.goTo = function(x, y) {
      return this.targetPosition = {
        x: x,
        y: y
      };
    };

    Hero.prototype.draw = function(canvasContext) {
      this.count();
      canvasContext.fillStyle = this.color;
      return canvasContext.fillRect(this.x, this.y, 10, 10);
    };

    Hero.prototype.count = function() {
      var speed, tar;
      tar = this.targetPosition;
      speed = this.speed || 1;
      if ((Math.abs(this.x - tar.x) < speed) && (Math.abs(this.y - tar.y) < speed)) {
        return;
      }
      if (tar.x !== this.x && tar.x > this.x) {
        this.x += speed;
      } else if (tar.x !== this.x && tar.x < this.x) {
        this.x -= speed;
      }
      if (tar.y !== this.y && tar.y > this.y) {
        return this.y += speed;
      } else if (tar.y !== this.y && tar.y < this.y) {
        return this.y -= speed;
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
      var canvas, dog, i, _i;
      canvas = document.createElement('canvas');
      this.width = canvas.width = window.innerWidth;
      this.height = canvas.height = window.innerHeight;
      document.getElementById(options.parentId).appendChild(canvas);
      this.context = canvas.getContext('2d');
      this.hero = new Game.Hero({
        x: this.width / 2,
        y: this.height / 2,
        speed: 2
      });
      this.dogs = [];
      for (i = _i = 0; _i <= 10; i = ++_i) {
        dog = new Game.Hero({
          x: this.width - i * 20,
          y: this.height - i * 20,
          speed: i / 10,
          color: 'red'
        });
        this.dogs.push(dog);
      }
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
      var dog, _i, _j, _len, _len1, _ref, _ref1, _results;
      this.context.clearRect(0, 0, this.width, this.height);
      _ref = this.dogs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dog = _ref[_i];
        dog.goTo(this.hero.x, this.hero.y);
      }
      this.hero.draw(this.context);
      _ref1 = this.dogs;
      _results = [];
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        dog = _ref1[_j];
        _results.push(dog.draw(this.context));
      }
      return _results;
    };

    return Canvas;

  })();

  (function() {
    return new Game.Canvas({
      parentId: 'game-wrapper'
    });
  })();

}).call(this);
