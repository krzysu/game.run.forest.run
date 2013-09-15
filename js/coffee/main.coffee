do ->
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  hero = new Game.Hero()

  onMouseDown = (e) ->
    x = e.pageX
    y = e.pageY
    hero.goTo(x, y)
    console.log('clicked', x, y)

  draw = ->
    ctx.clearRect(0,0,300,300)
    hero.draw(ctx)

  canvas.addEventListener("mousedown", onMouseDown, false)

  setInterval(draw, 10)

