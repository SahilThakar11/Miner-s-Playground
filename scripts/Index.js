let msgArea = document.getElementById("msg-area");
const Mines = [
  "Stone Valley",
  "Bronze Basin",
  "Iron Ridge Quarry",
  "Silverstone Grotto",
  "Goldium Vein Tunnel",
  "Platinumstone Chasm",
  "Cobaltite Abyss",
  "Titaniumstone Cavern",
  "Emeraldium Hollow",
  "Diamondium Depths",
];
const miningProbabilities = {
  "Stone Valley": {
    range: { min: 43, max: 57 },
    stone: 0.9,
    bronze: 0.1,
    iron: 0,
    silver: 0,
    gold: 0,
    platinum: 0,
    cobalt: 0,
    titanium: 0,
    emerald: 0,
    diamond: 0,
  },
  "Bronze Basin": {
    range: { min: 67, max: 89 },
    stone: 0.4,
    bronze: 0.4,
    iron: 0.1,
    silver: 0,
    gold: 0,
    platinum: 0,
    cobalt: 0,
    titanium: 0,
    emerald: 0,
    diamond: 0,
  },
  "Iron Ridge Quarry": {
    range: { min: 91, max: 103 },
    stone: 0.2,
    bronze: 0.2,
    iron: 0.4,
    silver: 0.1,
    gold: 0,
    platinum: 0,
    cobalt: 0,
    titanium: 0,
    emerald: 0,
    diamond: 0,
  },
  "Silverstone Grotto": {
    range: { min: 111, max: 119 },
    stone: 0.1,
    bronze: 0.1,
    iron: 0.2,
    silver: 0.4,
    gold: 0.1,
    platinum: 0,
    cobalt: 0,
    titanium: 0,
    emerald: 0,
    diamond: 0,
  },
  "Goldium Vein Tunnel": {
    range: { min: 120, max: 127 },
    stone: 0.05,
    bronze: 0.05,
    iron: 0.1,
    silver: 0.2,
    gold: 0.4,
    platinum: 0.1,
    cobalt: 0,
    titanium: 0,
    emerald: 0,
    diamond: 0,
  },
  "Platinumstone Chasm": {
    range: { min: 133, max: 142 },
    stone: 0.03,
    bronze: 0.03,
    iron: 0.05,
    silver: 0.1,
    gold: 0.2,
    platinum: 0.4,
    cobalt: 0.1,
    titanium: 0,
    emerald: 0,
    diamond: 0,
  },
  "Cobaltite Abyss": {
    range: { min: 149, max: 161 },
    stone: 0.02,
    bronze: 0.02,
    iron: 0.03,
    silver: 0.05,
    gold: 0.1,
    platinum: 0.2,
    cobalt: 0.4,
    titanium: 0.1,
    emerald: 0,
    diamond: 0,
  },
  "Titaniumstone Cavern": {
    range: { min: 167, max: 177 },
    stone: 0.01,
    bronze: 0.01,
    iron: 0.02,
    silver: 0.03,
    gold: 0.05,
    platinum: 0.1,
    cobalt: 0.2,
    titanium: 0.4,
    emerald: 0.1,
    diamond: 0,
  },
  "Emeraldium Hollow": {
    range: { min: 178, max: 185 },
    stone: 0.005,
    bronze: 0.005,
    iron: 0.01,
    silver: 0.02,
    gold: 0.03,
    platinum: 0.05,
    cobalt: 0.1,
    titanium: 0.2,
    emerald: 0.4,
    diamond: 0.1,
  },
  "Diamondium Depths": {
    range: { min: 187, max: 200 },
    stone: 0.002,
    bronze: 0.002,
    iron: 0.005,
    silver: 0.01,
    gold: 0.02,
    platinum: 0.03,
    cobalt: 0.05,
    titanium: 0.1,
    emerald: 0.2,
    diamond: 0.4,
  },
};

let Inventory = {
  Money: 500,
  coal: 10,
  stone: 0,
  bronze: 0,
  iron: 0,
  silver: 0,
  gold: 0,
  platinum: 0,
  cobalt: 0,
  titanium: 0,
  emerald: 0,
  diamond: 0,
};

const sellables = {
  stone: { price: 1 },
  bronze: { price: 4 },
  iron: { price: 8 },
  silver: { price: 12 },
  gold: { price: 20 },
  platinum: { price: 30 },
  cobalt: { price: 40 },
  titanium: { price: 50 },
  emerald: { price: 70 },
  diamond: { price: 100 },
};
let minedBlock = 0;
let nextBlockLevel = 1000;
let CurrentLocation = Mines[0];
let nextMine = Mines[1];
let userName;
let miningTimer = 3;
let counter;

// Handle Command function to handle all the commands for the game like /h, /mine
function handleCommand(command) {
  let mineContainer = document.createElement("p");
  const args = command.split("-");
  const action = args[0].trim();
  const secondary = args[1] ? args[1].trim() : null;
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[1];
    nextMine = Mines[2];
    nextBlockLevel = 10000;

    miningTimer = 5;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[2];
    nextMine = Mines[3];
    nextBlockLevel = 50000;

    miningTimer = 8;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[3];
    nextMine = Mines[4];
    nextBlockLevel = 100000;

    miningTimer = 10;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[4];
    nextMine = Mines[5];
    nextBlockLevel = 500000;

    miningTimer = 15;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[5];
    nextMine = Mines[6];
    nextBlockLevel = 1000000;

    miningTimer = 20;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[6];
    nextMine = Mines[7];
    nextBlockLevel = 5000000;

    miningTimer = 25;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[7];
    nextMine = Mines[8];
    nextBlockLevel = 10000000;

    miningTimer = 30;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[8];
    nextMine = Mines[9];
    nextBlockLevel = 100000000;

    miningTimer = 35;
  }
  if (minedBlock > nextBlockLevel) {
    CurrentLocation = Mines[9];
    nextMine = "No Mines left! :)) Wait till next Update!!";
    nextBlockLevel = "All level reached";
    mineContainer.classList.add("info-msg");
    mineContainer.classList.add("bg-info");
    mineContainer.innerHTML = `Your Current Mine updated to <span class="order">${CurrentLocation}</span>.<br> Next mine <span class="order">${nextMine} is ${
      nextBlockLevel - minedBlock
    }</span> blocks away.`;
    miningTimer = 40;
  }
  msgArea.appendChild(mineContainer);
  counter = miningTimer;
  switch (action) {
    case "/mine":
      mine();
      break;
    case "/sell":
      sell(secondary);
      break;
    case "/name":
      registerName(secondary);
      break;
    case "/h":
      helpMsg();
      break;
    case "/info":
      mineName();
      break;
    case "/mineInfo":
      mineInfo();
      break;
    case "/cls":
      clearConsole();
      break;
    default:
      showError();
  }
}

function mineInfo() {
  let container = document.createElement("p");
  container.classList.add("info-msg");
  container.innerHTML = `<h4><span class="order">All Mines</span> -- <span class="cmd">Blocks Required</span></h4>
  <span class="order">"Stone Valley"</span> -- <span class="cmd">0</span> <br>
  <span class="order">"Bronze Basin"</span> -- <span class="cmd">1000</span> <br>
  <span class="order">"Iron Ridge Quarry"</span> -- <span class="cmd">10000</span> <br>
  <span class="order">"Silverstone Grotto"</span>-- <span class="cmd">50000</span> <br>
  <span class="order">"Goldium Vein Tunnel"</span> -- <span class="cmd">100000</span> <br>
  <span class="order">"Platinumstone Chasm"</span> -- <span class="cmd">500000</span> <br>
  <span class="order">"Cobaltite Abyss"</span> -- <span class="cmd">1000000</span> <br>
  <span class="order">"Titaniumstone Cavern"</span> -- <span class="cmd">5000000</span> <br>
  <span class="order">"Emeraldium Hollow"</span> -- <span class="cmd">10000000</span> <br>
  <span class="order">"Diamondium Depths"</span> -- <span class="cmd">100000000</span> <br>
  `;
  msgArea.appendChild(container);
}

function clearConsole() {
  msgArea.innerHTML = "";
}
function showError() {
  let errorContainer = document.createElement("p");
  errorContainer.classList.add("bg-danger");
  errorContainer.classList.add("info-msg");
  errorContainer.innerHTML = `Invalid Command!! use <span class="cmd">/h</span> for help.`;
  msgArea.appendChild(errorContainer);
}

function mine() {
  console.log(`mining in ${CurrentLocation}`);
  const probabilities = miningProbabilities[CurrentLocation];
  if (!probabilities) {
    console.log("Invalid Location. Cannot mine here.");
    return;
  }

  const minedStones = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.stone
  );
  const minedBronze = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.bronze
  );
  const minedIron = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.iron
  );
  const minedSilver = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.silver
  );
  const minedGold = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.gold
  );
  const minedPlatinum = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.platinum
  );
  const minedCobalt = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.cobalt
  );
  const minedTitanium = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.titanium
  );
  const minedEmerald = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.emerald
  );
  const minedDiamond = calculateRandomeQuantity(
    probabilities.range.min,
    probabilities.range.max,
    probabilities.diamond
  );

  Inventory.stone += minedStones;
  Inventory.bronze += minedBronze;
  Inventory.iron += minedIron;
  Inventory.silver += minedSilver;
  Inventory.gold += minedGold;
  Inventory.platinum += minedPlatinum;
  Inventory.cobalt += minedCobalt;
  Inventory.titanium += minedTitanium;
  Inventory.emerald += minedEmerald;
  Inventory.diamond += minedDiamond;

  let mineContainer = document.createElement("p");
  mineContainer.classList.add("info-msg");

  function updateMiningMessage() {
    mineContainer.innerHTML = `
      Mining started at <span class="order">${CurrentLocation}</span>.<br>
      <h1><span class="cmd">${counter} To GO</span></h1>
    `;

    counter--;

    let items;
    switch (CurrentLocation) {
      case Mines[0]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze`;
        break;
      case Mines[1]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron`;
        break;
      case Mines[2]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver`;
        break;
      case Mines[3]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver, ${minedGold}x Gold`;
        break;
      case Mines[4]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver, ${minedGold}x Gold, ${minedPlatinum}x Platinum`;
        break;
      case Mines[5]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver, ${minedGold}x Gold, ${minedPlatinum}x Platinum, ${minedCobalt}x Cobalt`;
        break;
      case Mines[6]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver, ${minedGold}x Gold, ${minedPlatinum}x Platinum, ${minedCobalt}x Cobalt, ${minedTitanium}x Titanium`;
        break;
      case Mines[7]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver, ${minedGold}x Gold, ${minedPlatinum}x Platinum, ${minedCobalt}x Cobalt, ${minedTitanium}x Titanium, ${minedEmerald}x Emerald`;
        break;
      case Mines[8]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver, ${minedGold}x Gold, ${minedPlatinum}x Platinum, ${minedCobalt}x Cobalt, ${minedTitanium}x Titanium, ${minedEmerald}x Emerald, ${minedDiamond}x Diamond`;
        break;
      case Mines[9]:
        items = `${minedStones}x Stones, ${minedBronze}x Bronze, ${minedIron}x Iron, ${minedSilver}x Silver, ${minedGold}x Gold, ${minedPlatinum}x Platinum, ${minedCobalt}x Cobalt, ${minedTitanium}x Titanium, ${minedEmerald}x Emerald, ${minedDiamond}x Diamond`;
        break;
    }

    if (counter < 0) {
      clearInterval(miningInterval);
      mineContainer.classList.add("bg-success");
      mineContainer.innerHTML = `Mining completed! <br> You got <span class="order">${items}</span><br> Total <span class="cmd">${
        minedBronze +
        minedStones +
        minedIron +
        minedGold +
        minedSilver +
        minedCobalt +
        minedPlatinum +
        minedEmerald +
        minedDiamond +
        minedTitanium
      }</span> blocks.`;
      UpdateInventory();
      counter = miningTimer;
    }
    msgArea.appendChild(mineContainer);
  }
  const miningInterval = setInterval(updateMiningMessage, 1000);
}
function mineName() {
  let msgContainer = document.createElement("p");
  msgContainer.classList.add("info-msg");
  msgContainer.innerHTML = `Current Mine is <span class="order">${CurrentLocation}.</span><br> Current Mined Block is <span class="cmd">${minedBlock}.</span><br/> Next mine <span class="order">${nextMine}</span> is <span class="cmd">${
    nextBlockLevel - minedBlock
  }</span> block away.`;
  msgArea.appendChild(msgContainer);
}
function calculateRandomeQuantity(min, max, prob) {
  const blockCount = Math.floor((Math.random() * (max - min + 1) + min) * prob);
  minedBlock += blockCount;

  return blockCount;
}
function sell(material) {
  let ErrorMsg = null;
  let errorContainer = document.createElement("p");
  errorContainer.classList.add("info-msg");
  errorContainer.classList.add("bg-danger");

  if (!sellables[material] && material !== "all") {
    ErrorMsg = "Invalid Resource Name";
    errorContainer.innerHTML = ErrorMsg;
    msgArea.appendChild(errorContainer);
    return;
  }
  if (Inventory[material] === 0) {
    ErrorMsg = `Can not sell!! You have 0 ${material}`;
    errorContainer.innerHTML = ErrorMsg;
    msgArea.appendChild(errorContainer);
    return;
  }
  let soldMsg;
  let msgContainer = document.createElement("p");
  msgContainer.classList.add("info-msg");
  msgContainer.classList.add("bg-success");

  let stoneQuantity = Inventory.stone;
  let bronzeQuantity = Inventory.bronze;
  let ironQuantity = Inventory.iron;
  let goldQuantity = Inventory.gold;
  let platinumQuantity = Inventory.platinum;
  let silverQuantity = Inventory.silver;
  let titaniumQuantity = Inventory.titanium;
  let diamondQuantity = Inventory.diamond;
  let emeraldQuantity = Inventory.emerald;
  let cobaltQuantity = Inventory.cobalt;
  if (material === "all") {
    let result =
      stoneQuantity * sellables.stone.price +
      bronzeQuantity * sellables.bronze.price +
      ironQuantity * sellables.iron.price +
      silverQuantity * sellables.silver.price +
      goldQuantity * sellables.gold.price +
      platinumQuantity * sellables.platinum.price +
      titaniumQuantity * sellables.titanium.price +
      diamondQuantity * sellables.diamond.price +
      emeraldQuantity * sellables.emerald.price +
      cobaltQuantity * sellables.cobalt.price;
    Inventory.Money += result;
    InventoryClear();
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "stone") {
    let result = stoneQuantity * sellables.stone.price;
    Inventory.Money += result;
    Inventory.stone = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "bronze") {
    let result = bronzeQuantity * sellables.bronze.price;
    Inventory.Money += result;
    Inventory.bronze = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "iron") {
    let result = ironQuantity * sellables.iron.price;
    Inventory.Money += result;
    Inventory.iron = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "gold") {
    let result = goldQuantity * sellables.gold.price;
    Inventory.Money += result;
    Inventory.gold = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "platinum") {
    let result = platinumQuantity * sellables.platinum.price;
    Inventory.Money += result;
    Inventory.platinum = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "silver") {
    let result = silverQuantity * sellables.silver.price;
    Inventory.Money += result;
    Inventory.silver = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "cobalt") {
    let result = cobaltQuantity * sellables.cobalt.price;
    Inventory.Money += result;
    Inventory.cobalt = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "diamond") {
    let result = diamondQuantity * sellables.diamond.price;
    Inventory.Money += result;
    Inventory.diamond = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "emerald") {
    let result = emeraldQuantity * sellables.emerald.price;
    Inventory.Money += result;
    Inventory.emerald = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  if (material === "titanium") {
    let result = titaniumQuantity * sellables.titanium.price;
    Inventory.Money += result;
    Inventory.titanium = 0;
    soldMsg = `Sold!! You got $${result}`;
  }
  msgContainer.innerHTML = soldMsg;
  msgArea.appendChild(msgContainer);
  UpdateInventory();
}
function InventoryClear() {
  localStorage.removeItem("Inventory");
  Inventory.stone = 0;
  Inventory.silver = 0;
  Inventory.iron = 0;
  Inventory.bronze = 0;
  Inventory.emerald = 0;
  Inventory.diamond = 0;
  Inventory.cobalt = 0;
  Inventory.gold = 0;
  Inventory.titanium = 0;
  Inventory.platinum = 0;
}
loadInventory();
function UpdateInventory() {
  document.getElementById("money").innerHTML = Inventory.Money;
  document.getElementById("stone").innerHTML = Inventory.stone;
  document.getElementById("bronze").innerHTML = Inventory.bronze;
  document.getElementById("iron").innerHTML = Inventory.iron;
  document.getElementById("silver").innerHTML = Inventory.silver;
  document.getElementById("gold").innerHTML = Inventory.gold;
  document.getElementById("platinum").innerHTML = Inventory.platinum;
  document.getElementById("cobalt").innerHTML = Inventory.cobalt;
  document.getElementById("titanium").innerHTML = Inventory.titanium;
  document.getElementById("emerald").innerHTML = Inventory.emerald;
  document.getElementById("diamond").innerHTML = Inventory.diamond;

  saveInventory();
}
UpdateInventory();

function processInput() {
  let input = document.getElementById("input");
  sendUserMsg(input.value);
  handleCommand(input.value);
  document.getElementById("input").value = "";
}

document.getElementById("send-btn").addEventListener("click", processInput);
const inputField = document.getElementById("input");
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    processInput();
  }
});

function WelcomeMsg() {
  let msg = `Hello Miner! Welcome to the Miner's Playground!!<br>
  <span class="cmd">/name</span>-<span class='order'>[yourName]</span> to register your name <br>
  <span class="cmd">/h</span> for help to learn commands.
  `;
  let msgArea = document.getElementById("msg-area");
  let welcomeMSG = document.createElement("p");
  welcomeMSG.classList.add("info-msg");
  welcomeMSG.innerHTML = msg;
  msgArea.appendChild(welcomeMSG);
}
WelcomeMsg();

function registerName(name) {
  userName = name;
  document.getElementById(
    "name"
  ).innerHTML = `<span class="cmd">Welcome</span> &nbsp;<span class="order"> "${userName}"</span>`;
  let container = document.createElement("p");
  container.classList.add("bg-success");
  container.classList.add("info-msg");
  container.innerHTML = `Name <span class="text-danger">"${name}"</span> Updated Successfully.`;
  msgArea.appendChild(container);
  saveUserName();
}

function helpMsg() {
  let helpMsg = `<h3>All commands</h3><span class="cmd">/name</span>-<span class="order">[yourName]</span> - For user name<br><span class="cmd">/mine</span> - To mine in resource<br><span class="cmd">/sell</span>-<span class="order">[material]</span> - To sell the resource and earn Money<br><span class="cmd">/info</span> - To get info about current level/mine.<br><span class="cmd">/mineInfo</span> - Info about all mines in game.<br><span class="cmd">/cls</span> - To clear console.`;

  let helpMSG = document.createElement("p");
  helpMSG.classList.add("info-msg");
  helpMSG.innerHTML = helpMsg;
  msgArea.appendChild(helpMSG);
}
function sendUserMsg(userMsg) {
  let msgArea = document.getElementById("msg-area");
  let msg = document.createElement("p");
  msg.classList.add("info-msg");
  msg.classList.add("user-msg");
  msg.innerHTML = userMsg;
  msgArea.appendChild(msg);
}

function saveInventory() {
  localStorage.setItem("Inventory", JSON.stringify(Inventory));
  localStorage.setItem("CurrentMine", JSON.stringify(CurrentLocation));
  localStorage.setItem("currentBlockMined", JSON.stringify(minedBlock));
  localStorage.setItem("counter", JSON.stringify(miningTimer));
  console.log(miningTimer);
}
function saveUserName() {
  localStorage.setItem("userName", JSON.stringify(userName));
}
function loadUserName() {
  const Name = localStorage.getItem("userName");
  if (Name) {
    userName = Name;
    UpdateName();
  }
}
loadUserName();
function loadInventory() {
  const savedInventory = localStorage.getItem("Inventory");
  const savedCurrentMine = localStorage.getItem("CurrentMine");
  const savedMinedBlock = localStorage.getItem("currentBlockMined");
  const saveCounter = localStorage.getItem("counter");
  if (savedInventory) {
    Inventory = JSON.parse(savedInventory);
    UpdateInventory();
  }
  if (savedCurrentMine) {
    CurrentLocation = JSON.parse(savedCurrentMine);
  }
  if (savedMinedBlock) {
    minedBlock = JSON.parse(savedMinedBlock);
  }
  if (saveCounter) {
    miningTimer = JSON.parse(saveCounter);
  }
}

function UpdateName() {
  document.getElementById(
    "name"
  ).innerHTML = `<span class="cmd">Welcome</span> &nbsp;<span class="order"> ${userName}</span>`;
}
