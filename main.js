const mainArena = document.querySelector('.arenas'),
  randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Socrpion',
  hp: 100,
  imgPlayer: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gunOne', 'gunTwo', 'gunThree', 'gunFour', 'gunFive'],
  attack: function () {
    console.log(this.name);
  },
};
const player2 = {
  player: 2,
  name: 'Sonya',
  hp: 100,
  imgPlayer: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['gunOne', 'gunTwo', 'gunThree', 'gunFour', 'gunFive'],
  attack: function () {
    console.log(this.name);
  },
};

function createElement(tag, className) {
  const crTag = document.createElement(tag);

  if (className) {
    crTag.classList.add(className);
  }

  return crTag;
}

function createPlayer(obj) {
  const { name, hp, imgPlayer, weapon } = obj;

  //Создание div
  const containerDiv = createElement('div', 'player' + obj.player), // Корневой див
    progressbrDiv = createElement('div', 'progressbar'),
    lifeDiv = createElement('div', 'life'),
    nameDiv = createElement('div', 'name'),
    characterDiv = createElement('div', 'character'),
    img = document.createElement('img');

  //Добавление классов

  img.src = imgPlayer;

  //Стили
  lifeDiv.style.width = hp + '%';
  nameDiv.innerText = name;

  //Вложение div
  characterDiv.appendChild(img);
  progressbrDiv.appendChild(lifeDiv);
  progressbrDiv.appendChild(nameDiv);
  containerDiv.appendChild(progressbrDiv);
  containerDiv.appendChild(characterDiv);

  return containerDiv;
}

function changeHP(player) {
  const playerLife = document.querySelector(
    '.player' + player.player + ' .life'
  );

  const normalizingZeroValue = pickRandomValue(player);

  playerLife.style.width = normalizingZeroValue + '%';

  if (normalizingZeroValue <= 0) {
    determiningWhoIsWin();
  }
}

function playerWin(name) {
  const winTitle = createElement('div', 'winTitle');
  winTitle.innerText = name + ' win';
  return winTitle;
}

function pickRandomValue(player) {
  const hpChange =
    (player.hp -= Math.floor(Math.random() * (20 - 0 + 1) + 0)) < 0
      ? (player.hp = 0)
      : player.hp;

  return hpChange;
}

function determiningWhoIsWin() {
  randomButton.disabled = true;

  if (player1.hp > player2.hp) {
    mainArena.appendChild(playerWin(player1.name));
  } else {
    mainArena.appendChild(playerWin(player2.name));
  }
}

randomButton.addEventListener('click', () => {
  changeHP(player1);
  changeHP(player2);
});
mainArena.appendChild(createPlayer(player1));
mainArena.appendChild(createPlayer(player2));
