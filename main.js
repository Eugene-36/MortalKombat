const player1 = {
  name: 'FirstPlayer',
  hp: 50,
  imgPlayer: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gunOne', 'gunTwo', 'gunThree', 'gunFour', 'gunFive'],
  attack: function () {
    console.log(this.name);
  },
};
const player2 = {
  name: 'SecondPlayer',
  hp: 80,
  imgPlayer: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['gunOne', 'gunTwo', 'gunThree', 'gunFour', 'gunFive'],
  attack: function () {
    console.log(this.name);
  },
};

function createPlayer(player, obj) {
  const { name, hp, imgPlayer, weapon } = obj;

  //Создание div
  const containerDiv = document.createElement('div'), // Корневой див
    progressbrDiv = document.createElement('div'),
    lifeDiv = document.createElement('div'),
    nameDiv = document.createElement('div'),
    characterDiv = document.createElement('div'),
    img = document.createElement('img'),
    mainArena = document.querySelector('.arenas');

  //Добавление классов
  containerDiv.classList.add(player);
  progressbrDiv.classList.add('progressbar');
  lifeDiv.classList.add('life');
  nameDiv.classList.add('name');
  characterDiv.classList.add('character');
  img.src = imgPlayer;

  //Стили
  lifeDiv.style.width = hp;
  nameDiv.innerText = name;

  //Вложение div
  characterDiv.appendChild(img);
  progressbrDiv.appendChild(lifeDiv);
  progressbrDiv.appendChild(nameDiv);
  containerDiv.appendChild(progressbrDiv);
  containerDiv.appendChild(characterDiv);
  mainArena.appendChild(containerDiv);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
