//player object
let yeti = {
  name: "Yeti",
  health: 100,
  hits: 0,
  attacks: {
    Slap: -1,
    Punch: -5,
    Kick: -10
  },
  items: []
}

let items = {
  snowball: { name: "Snowball", modifier: 2, description: 'Snowball Fight' },
  highKick: { name: "High Kick", modifier: 4, description: 'Yeti so tall, kick so high' },
  avalanche: { name: "Avalanche", modifier: 6, description: 'AHHHHHHVALANCHE!!' }
}

// draw stats
function update() {
  let stats = ''
  stats = `
  <h3>${yeti.name}</h3>
  <h5>Health: ${yeti.health}</h5>
  <h5>Hits: ${yeti.hits}</h5>
  `
  document.getElementById('player-stats').innerHTML = stats
}
update()

function drawButtons() {
  let buttonTemplate = ''
  for (let key in yeti.attacks) {
    let attack = yeti.attacks[key];
    buttonTemplate += `
    <button class="btn btn-warning mx-1 my-1 shadow-sm" onclick="attack(${attack})">${key}</button>
    `
    document.getElementById('buttons').innerHTML = buttonTemplate
  }
}
drawButtons()

function drawItemButtons() {
  let itemTemplate = ''
  for (let key in items) {
    let item = items[key]
    itemTemplate += `
    <button class="btn btn-warning mx-1 my-1 shadow-sm" onclick="attack(${item.modifier})">${item.name}</button>
    `
    document.getElementById('itemButtons').innerHTML = itemTemplate
  }
}
drawItemButtons()


//slap function
function attack(healthIndex) {
  yeti.health += healthIndex
  yeti.hits++
  update()
}