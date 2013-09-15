window.Game or= {}

class Game.Hero
  constructor: (options) ->
    for key, option of options
      @[key] = option

    # must have values
    @speed or= 1
    @color or= 'black'
    @x or= 10
    @y or= 10

    @targetPosition =
      x: @x
      y: @y

  goTo: (x, y) ->
    @targetPosition =
      x: x
      y: y

  draw: (canvasContext) ->
    @count()

    canvasContext.fillStyle = @color
    canvasContext.fillRect(@x, @y, 10, 10)

  count: ->
    tar = @targetPosition
    speed = @speed || 1

    if (Math.abs(@x - tar.x) < speed) && (Math.abs(@y - tar.y) < speed)
      return

    if(tar.x != @x && tar.x > @x)
      @x += speed

    else if(tar.x != @x && tar.x < @x)
      @x -= speed

    if(tar.y != @y && tar.y > @y)
      @y += speed

    else if(tar.y != @y && tar.y < @y)
      @y -= speed

