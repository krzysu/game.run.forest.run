window.Game or= {}

class Game.Canvas
  constructor: (options) ->
    canvas = document.createElement('canvas')
    @width = canvas.width = window.innerWidth
    @height = canvas.height = window.innerHeight
    document.getElementById(options.parentId).appendChild(canvas)
    @context = canvas.getContext('2d')

    # game objects
    @hero = new Game.Hero
      x: @width / 2
      y: @height / 2
      speed: 2

    # bad guys
    @dogs = []

    for i in [0..10]
      dog = new Game.Hero
        x: @width - i * 20
        y: @height - i * 20
        speed: i / 10
        color: 'red'

      @dogs.push dog


    # init canvas events
    canvas.addEventListener("mousedown", @onMouseDown, false)

    # game loop
    setInterval(@draw, 10)

  onMouseDown: (e) =>
    x = e.pageX
    y = e.pageY

    @hero.goTo(x, y)

  draw: =>
    @context.clearRect(0, 0, @width, @height)

    # game logic
    for dog in @dogs
      dog.goTo(@hero.x, @hero.y)

    # draw objects
    @hero.draw(@context)

    for dog in @dogs
      dog.draw(@context)



do ->
  new Game.Canvas
    parentId: 'game-wrapper'
