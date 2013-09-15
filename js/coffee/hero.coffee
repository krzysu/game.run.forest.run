window.Game or= {}

class Game.Hero
  constructor: (x = 10, y = 10, speed = 1) ->
    @currentPosition =
      x: x
      y: y

    @targetPosition =
      x: x
      y: y

    @speed = speed

  goTo: (x, y) ->
    @targetPosition =
      x: x
      y: y

  draw: (canvasContext) ->
    @count()

    canvasContext.fillStyle = "rgb(200,0,0)"
    canvasContext.fillRect(@currentPosition.x, @currentPosition.y, 10, 10)

  count: ->
    cur = @currentPosition
    tar = @targetPosition
    speed = @speed

    if (Math.abs(cur.x - tar.x) < speed) && (Math.abs(cur.y - tar.y) < speed)
      return

    if(tar.x != cur.x && tar.x > cur.x)
      cur.x += speed

    else if(tar.x != cur.x && tar.x < cur.x)
      cur.x -= speed

    if(tar.y != cur.y && tar.y > cur.y)
      cur.y += speed

    else if(tar.y != cur.y && tar.y < cur.y)
      cur.y -= speed

