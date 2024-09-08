let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    startGame();
} 

function startGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement('div')
        tile.id = i.toString();
        tile.addEventListener('click', selectTile)
        let board = document.getElementById('board')
        board.appendChild(tile);
    }


    setInterval(setMole, 500);
    setInterval(setPlant, 1500);
} 


function getRandomTile() {
    let random = Math.floor(Math.random() * 9)
    return random.toString();
}

function setMole() {
    if(gameOver) {
        return;
    }
    if (currentMoleTile) {
        currentMoleTile.innerHTML = '';
    }
    let mole = document.createElement('img');
    mole.src = './images/mole.png'

    let random = getRandomTile();

    if(currentPlantTile && currentPlantTile.id == random) {
        return;
    }


    currentMoleTile = document.getElementById(random);
    currentMoleTile.appendChild(mole);

}



function setPlant() {
    if(gameOver) {
        return;
    }
    if (currentPlantTile) {
        currentPlantTile.innerHTML = '';
    }
    let plant = document.createElement('img');
    plant.src = './images/plant.png'

    let random = getRandomTile();

    if(currentMoleTile && currentMoleTile.id == random) {
        return;
    }

    currentPlantTile = document.getElementById(random);
    currentPlantTile.appendChild(plant);

}


function selectTile() {
    if(gameOver) {
        return;
    }
    if(this == currentMoleTile) {
        score += 10;
        let playerScore = document.getElementById('score');
        playerScore.innerText = 'Your score: ' + score;
    } else if (this == currentPlantTile) {
        let playerScore = document.getElementById('score');
        playerScore.innerText = 'GAME OVER : ' + score;
        gameOver = true;
        let restart = document.getElementById('restart');
        restart.addEventListener('click', restartButton)
    }
}


function restartButton() {
    let playerScore = document.getElementById('score');
    playerScore.innerText = '0';
    score = 0;
    gameOver = false;
    setInterval(setMole, 2500);
    setInterval(setPlant, 1500);
}