const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife'],
    attack: function (name){
        console.log(name + '' + 'Fight...')
    }
};

const player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife'],
    attack: function (name){
        console.log(name + '' + 'Fight...')
    }
};

function createPlayer(player1, names, hp){
    const player = createElement('div');
    player.clasList.add('player');

    const progressbar = createElement('div');
    player.clasList.add('progressbar');
    player.appendChild(progressbar);

    const character = createElement('div');
    character.clasList.add('character');
    player.appendChild(character);

    const life = createElement('div');
    life.clasList.add('life');
    life.appendChild(progressbar);
    life.style.width = '100%';

    const name = createElement('div');
    name.clasList.add('name');
    name.appendChild(progressbar);
    name.InnerText = '';

    const img = createElement('img');
    img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    character.appendChild(img);

    const arenas = document.querySelector('.arena');
    arenas.appendChild(player);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'Kitana', 80);