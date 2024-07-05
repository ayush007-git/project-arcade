let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let currentPlayer = "X";
let gameOver = false;

async function makeMove(row, col) {

    if (gameOver || board[row][col] !== "") {
        return;
    }

    board[row][col] = currentPlayer;

    

    document.getElementById("board").children[row * 3 + col].innerText = currentPlayer;

    if (checkWin(currentPlayer)) {
        gameOver = true;
        alert(`Player "${currentPlayer}" won the game!`);
        document.getElementById("player_win_status").innerText = `Player "${currentPlayer}" won the game!`;
    } else if (checkTie()) {
        gameOver = true;
        document.getElementById("player_win_status").innerText = "It's a tie!";
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}


function checkWin(player) {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (
            board[row][0] === player &&
            board[row][1] === player &&
            board[row][2] === player
        ) {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (
            board[0][col] === player &&
            board[1][col] === player &&
            board[2][col] === player
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
    ) {
        return true;
    }
    if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
    ) {
        return true;
    }

    return false;
}

function checkTie() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === "") {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    currentPlayer = "X";
    gameOver = false;
    let tiles = document.getElementsByClassName("tile");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].innerText = "";
    }
    document.getElementById("player_win_status").innerText=" ";
}
