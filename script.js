let gameBoardArr = [];
let gameBoardDiv = document.querySelector('.gameBoard');
let boardSpots = document.querySelectorAll('td');
let markButtons = document.querySelectorAll('.markButton');
// let xMark = document.querySelector('.xMark')
let playersMark = '';

let gameBoard = (() => {
    let gameBoardTable = document.createElement('table');
    gameBoardTable.classList.add('actualGameBoard');
    gameBoardDiv.appendChild(gameBoardTable);
    let tableTr;
    let tableTd;

    for (i = 0; i < 3; i++) {
        tableTr = document.createElement('tr');
        tableTr.classList.add('tr' + (i + 1));
        gameBoardTable.appendChild(tableTr);
        for (j = 0; j < 3; j++) {
            tableTd = document.createElement('td');
            tableTd.classList.add('td' + (i * 3 + j + 1));
            tableTr.appendChild(tableTd);
        }
    }
})();

const playerOne = (name) => {
    return { name };
}

const Kuba = playerOne('Kuba');

function placeMarker() {



}





markButtons.forEach(actualMark => {
    actualMark.addEventListener('click', () => {
        if (actualMark.textContent === 'X') {
            playersMark = 'X';
        }
        else {
            playersMark = 'O';
        }
    })
});
boardSpots.forEach(actualSpot => {
    if (playersMark === 'X') {
        actualSpot.addEventListener('click', () => {
            actualSpot.textContent = 'X'
        });
    }
    else {
        actualSpot.addEventListener('click', () => {
            actualSpot.textContent = 'O'
        });
    }
});
