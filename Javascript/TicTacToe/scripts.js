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

    this.addMark = function() {
        let lastMark = "X"
        for (const box of this.board) {
            box.parentElement.addEventListener("click", function(){
                box.innerHTML = lastMark
                lastMark = (lastMark == "O") ? "X" : "O"
            }, {once : true})
        }
    }

}

function player(name) {
    this.name = name
}

function gameManager(){
    // Create new game board
    const managerBoard = new gameBoard()
    managerBoard.newBoard()

    const playerOne = new player("Jordan")
    const playerTwo = new player("Ben")

    managerBoard.addMark()
}

gameManager()
