//player object
let yeti = {
  name: "Yeti",
  health: 100,
  hits: 0,
  attacks: [
    { name: "Slap", health: -1 },
    { name: "Punch", health: -5 },
    { name: "Kick", health: -10 }
  ]
}

let items = [
  { name: "Snowball", modifier: 2, description: 'Snowball Fight' },
  { name: "High Kick", modifier: 4, description: 'Yeti so tall, kick so high' },
  { name: "Avalanche", modifier: 6, description: 'AHHHHHHVALANCHE!!' }
]

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
  for (let i = 0; i < yeti.attacks.length; i++) {
    let button = yeti.attacks[i];
    buttonTemplate += `
    <button class="btn btn-warning mx-1 my-1 shadow-sm" onclick="attack(${button.health})">${button.name}</button>
    `
    document.getElementById('buttons').innerHTML = buttonTemplate
  }
}
drawButtons()

function drawItemButtons() {
  let itemTemplate = ''
  for (let i = 0; i < items.length; i++) {
    let itemButton = items[i];
    itemTemplate += `
        <button class="btn btn-primary mx-1 my-1 shadow-sm" onclick="attack(${itemButton.health})">${itemButton.name}</button>
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

function punch() {
  yeti.health -= 5
  yeti.hits++
  update()
}

function kick() {
  yeti.health -= 10
  yeti.hits++
  update()
}