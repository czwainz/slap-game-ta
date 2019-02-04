//player object
let player = {
  health: 100,
  hits: 0
}

// draw stats
function update() {
  let stats = ''
  stats = `
  <h5>Health: ${player.health}</h5>
  <h5>Hits: ${player.hits}</h5>
  `
  document.getElementById('player-stats').innerHTML = stats
}
update()


//slap function
function slap() {
  player.health--
  player.hits++
  update()
}