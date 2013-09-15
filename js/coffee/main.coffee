window.Game or= {}

class Game.Canvas
  constructor: (options) ->
    canvas = document.createElement('canvas')
    @width = canvas.width = window.innerWidth
    @height = canvas.height = window.innerHeight
    document.getElementById(options.parentId).appendChild(canvas)
    @context = canvas.getContext('2d')

    # game objects
    @hero = new Game.Hero()

    # init canvas events
    canvas.addEventListener("mousedown", @onMouseDown, false)

    # game loop
    setInterval(@draw, 10)

  onMouseDown: (e) =>
    x = e.pageX
    y = e.pageY

    @hero.goTo(x, y)
    # console.log('clicked', x, y)

  draw: =>
    @context.clearRect(0, 0, @width, @height)

    # draw objects
    @hero.draw(@context)



do ->
  new Game.Canvas
    parentId: 'game-wrapper'
