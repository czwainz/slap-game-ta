//player object
let yeti = {
  name: "Yeti",
  health: 100,
  hits: 0,
  attacks: {
    Slap: 1,
    Punch: 5,
    Kick: 10
  },
  items: []
}

let items = {
  snowball: { name: "Snowball", modifier: 2, description: 'Snowball Fight', count: 7 },
  highKick: { name: "High Kick", modifier: 4, description: 'Yeti so tall, kick so high', count: 4 },
  avalanche: { name: "Avalanche", modifier: 6, description: 'AHHHHVALANCHE!!', count: 1 }
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

//draw buttons
function drawButtons() {
  let buttonTemplate = ''
  for (let key in yeti.attacks) {
    let attack = yeti.attacks[key];
    buttonTemplate += `
    <button class="btn btn-primary mx-1 my-1 shadow-sm attackButtons" onclick="attack(${attack})">${key}</button>
    `
    document.getElementById('buttons').innerHTML = buttonTemplate
  }
}
drawButtons()

//draw items
function drawItemButtons() {
  let itemTemplate = ''
  for (let key in items) {
    let item = items[key]
    itemTemplate += `
    <button class="btn btn-warning mx-1 my-1 shadow-sm itemButtons" onclick="addModifier('${key}')">${item.name}</button>
    `
    document.getElementById('itemButtons').innerHTML = itemTemplate
  }
}
drawItemButtons()

//attack function
function attack(health) {
  yeti.health -= health + totalMods()
  yeti.hits++
  knockout()
  update()
}

//add modifier
function addModifier(key) {
  // let button = document.getElementById('itemButtons')
  if (items[key].count >= 1) {
    yeti.items.push(items[key])
    for (let i = 0; i < yeti.items.length; i++) {
      let item = yeti.items[i]
    }
    items[key].count--
    update()
  } else {
    window.alert('Cannot use any more ' + items[key].name)
    // document.querySelectorAll()
  }
}

function totalMods() {
  let total = 0
  yeti.items.forEach(i => total += i.modifier)
  return total
}


//reset function
function reset() {
  yeti = {
    name: "Yeti",
    health: 100,
    hits: 0,
    attacks: {
      Slap: 1,
      Punch: 5,
      Kick: 10
    },
    items: []
  }
  update()
}

//knockout
function knockout() {
  if (yeti.health <= 0) {
    document.getElementById('KO').innerHTML = `<h4><strong>YETI IS DEDDI!</strong></h4>`
    document.querySelectorAll("buttons")
  } else {
    document.getElementById('KO').innerHTML = ``
  }
}



//counter
// function countMods() {

// }
