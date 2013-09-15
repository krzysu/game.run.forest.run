window.Game or= {}

class Game.Hero
  constructor: (data) ->
    @oldX = 10
    @newX = 10
    @oldY = 10
    @newY = 10

  goTo: (x, y) ->
    @newX = x
    @newY = y

  draw: (ctx) ->
    newX = @newX
    newY = @newY
    oldX = @oldX
    oldY = @oldY

    if(newX != oldX && newX > oldX)
      @oldX++

    else if(newX != oldX && newX < oldX)
      @oldX--

    if(newY != oldY && newY > oldY)
      @oldY++

    else if(newY != oldY && newY < oldY)
      @oldY--

    ctx.fillStyle = "rgb(200,0,0)"
    ctx.fillRect(oldX, oldY, 10, 10)
