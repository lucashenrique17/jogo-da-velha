document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handClick);
    })

})

function handClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi " + playerTime)
        }, 10)

    };
    updateSquare(position);

}

function updateSquare(position) {

    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function atualizar() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.innerHTML = '';
    })

}

function restart() {
    
    board = ["", "", "", "", "", "", "", "", "",];
    playerTime = 0;
    gameOver = false;
    atualizar()
}



