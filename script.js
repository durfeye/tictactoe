let gameBoardArr = [];
let gameBoardDiv = document.querySelector('.gameBoard');
let markButtons = document.querySelectorAll('.markButton');
let selectMarkDiv = document.querySelector('.selectMark');
let resultInfoTxt = document.querySelector('.resultInfo');
let restartBtn = document.querySelector('.restartBtn');
let playersMark = '';
let computersMark = '';
let playersWin = false;
let computersWin = false;

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

let boardSpots = document.querySelectorAll('td');
let boardEl = Array.from(boardSpots);

boardSpots.forEach(actualSpot => {
    actualSpot.addEventListener('click', () => {
        if (playersMark == 'X' && actualSpot.textContent == '') {
            actualSpot.textContent = 'X';
            computerPlay();
        }
        else if (playersMark == 'O' && actualSpot.textContent == '') {
            actualSpot.textContent = 'O';
            computerPlay();
        }
        gameResult();
    });

});

markButtons.forEach(actualMark => {
    actualMark.addEventListener('click', () => {
        if (actualMark.textContent === 'X') {
            playersMark = 'X';
            computersMark = 'O';
        }
        else {
            playersMark = 'O';
            computersMark = 'X';
        }
        selectMarkDiv.style.display = 'none';
        let gameBoardView = document.querySelector('.actualGameBoard');
        gameBoardView.style.display = 'block';
    })
});

const gameResult = (() => {
    checkRows()
    checkColumns()
    checkDiagonals()
    if (playersWin == true || computersWin == true) {
        resultInfo();
        boardSpots.forEach(actualSpot => {
            actualSpot.style = 'pointer-events: none'
        });
    }
});
row3 = [boardEl[6], boardEl[7], boardEl[8]]
const checkRows = () => {
    row1 = [boardEl[0], boardEl[1], boardEl[2]]
    row2 = [boardEl[3], boardEl[4], boardEl[5]]
    row3 = [boardEl[6], boardEl[7], boardEl[8]]
    if (row1.every(field => field.textContent == playersMark)
        || row2.every(field => field.textContent == playersMark)
        || row3.every(field => field.textContent == playersMark)) {
        playersWin = true;
        computersWin = false;
    }
    else if (row1.every(field => field.textContent == computersMark)
        || row2.every(field => field.textContent == computersMark)
        || row3.every(field => field.textContent == computersMark)) {
        computersWin = true;
        playersWin = false;
    }
}
const checkColumns = () => {
    column1 = [boardEl[0], boardEl[3], boardEl[6]]
    column2 = [boardEl[1], boardEl[4], boardEl[7]]
    column3 = [boardEl[2], boardEl[5], boardEl[8]]
    if (column1.every(field => field.textContent == playersMark)
        || column2.every(field => field.textContent == playersMark)
        || column3.every(field => field.textContent == playersMark)) {
        playersWin = true;
        computersWin = false;
    }
    else if (column1.every(field => field.textContent == computersMark)
        || column2.every(field => field.textContent == computersMark)
        || column3.every(field => field.textContent == computersMark)) {
        computersWin = true;
        playersWin = false;
    }
}
const checkDiagonals = () => {
    diagonal1 = [boardEl[0], boardEl[4], boardEl[8]]
    diagonal2 = [boardEl[2], boardEl[4], boardEl[6]]
    if (diagonal1.every(field => field.textContent == playersMark)
        || diagonal2.every(field => field.textContent == playersMark)) {
        playersWin = true;
        computersWin = false;
    }
    else if (diagonal1.every(field => field.textContent == computersMark)
        || diagonal2.every(field => field.textContent == computersMark)) {
        computersWin = true;
        playersWin = false;
    }
}

const resultInfo = (() => {
    if (playersWin == true) {
        resultInfoTxt.style = 'display: block; color: green';
        resultInfoTxt.textContent = 'You won, congratz!'
        restartBtn.style = 'display: block';
    }
    else if (computersWin == true) {
        resultInfoTxt.style = 'display: block; color: red';
        resultInfoTxt.textContent = 'You lose :(!'
        restartBtn.style = 'display: block';
    }
});

const drawInfo = (() => {
    resultInfoTxt.style = 'display: block; color: blue';
    resultInfoTxt.textContent = 'DRAW!'
    restartBtn.style = 'display: block';
});

const restartGame = () => {
    playersWin = false;
    computersWin = false;
    playersMark = '';
    resultInfoTxt.style = 'display: none';
    selectMarkDiv.style.display = 'flex';
    let gameBoardView = document.querySelector('.actualGameBoard');
    gameBoardView.style.display = 'none';
    restartBtn.style = 'display: none';
    boardSpots.forEach(actualSpot => {
        actualSpot.textContent = '';
        actualSpot.style = 'pointer-events: auto'
    });
}

restartBtn.addEventListener('click', restartGame);

let computerPlay = (min, max) => {
    min = 0;
    max = 8;
    let computerChoice = Math.floor(Math.random() * (max - min) + min);
    let allSet = [...boardEl].filter(actualSpot => actualSpot.textContent != '');
    if (allSet.length > 7) {
        drawInfo();
        return;
    }
    else if (boardEl[computerChoice].textContent != '') {
        do {
            computerChoice = Math.floor(Math.random() * (max - min) + min);
        } while (boardEl[computerChoice].textContent != '')

        boardEl[computerChoice].textContent = computersMark;
    }
    else if (boardEl[computerChoice].textContent === '') {
        boardEl[computerChoice].textContent = computersMark;
    }

}