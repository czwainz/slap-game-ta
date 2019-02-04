//player object
let player = {
  name: "Yeti",
  health: 100,
  hits: 0
}

// draw stats
function update() {
  let stats = ''
  stats = `
  <h3>${player.name}</h3>
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

function punch() {
  player.health -= 5
  player.hits++
  update()
}

function kick() {
  player.health -= 10
  player.hits++
  update()
}