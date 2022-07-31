function gameBoard() {
    this.board = []

    this.newBoard = function() {

        const boardElements = document.getElementsByClassName("gridText")

        for (let i = 0; i < boardElements.length; i++){
            boardElements[i].innerHTML = ""
            // this.addMark(boardElements[i], "X")
            this.board.push(boardElements[i])
        }
    }

    this.addMark = function(mark) {

        for (const box of this.board) {
            box.parentElement.addEventListener("click", function(){
                box.innerHTML = mark
            })
        }
    }

}

function player(name, mark) {
    this.name = name
    this.mark = mark
}

function gameManager(){
    // Create new game board
    const board = new gameBoard()
    board.newBoard()
    
    const playerOne = new player("Jordan", "X")
    const playerTwo = new player("Ben", "O")

    board.addMark("J")
    // let playerOneTurn = true

    // for (let i = 0; i < 10; i++){

    // }
}

gameManager()

// const testBoard = new gameBoard();

// testBoard.newBoard();
// testBoard.addMark(testBoard.board[2], "P")