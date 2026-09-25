let turn = "x";
let gameOver = false;

function game(id) {
    let element = document.getElementById(id);

    if (element.innerHTML !== "" || gameOver) {
        return;
    }

    element.innerHTML = turn;

    if (checkWinner()) {
        document.querySelector('.title p').innerText = `${turn.toUpperCase()} Wins!`;
        gameOver = true;
        return;
    }

    if (checkDraw()) {
        document.querySelector('.title p').innerText = `It's a Draw!`;
        gameOver = true;
        return;
    }

    turn = turn === 'x' ? 'o' : 'x';
    document.querySelector('.title p').innerText = `${turn.toUpperCase()}'s turn`;
}

function checkWinner() {
    let cases = [];
    for (let i = 1; i <= 9; i++) {
        cases[i] = document.getElementById('item' + i).innerHTML;
    }

    const winPatterns = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cases[a] !== '' && cases[a] === cases[b] && cases[a] === cases[c];
    });
}

function checkDraw() {
    let cases = [];
    for (let i = 1; i <= 9; i++) {
        cases[i] = document.getElementById('item' + i).innerHTML;
    }
    return cases.slice(1).every(val => val !== '');
}