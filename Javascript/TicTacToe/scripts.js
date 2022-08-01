function gameBoard() {
    // Creates board array
    this.board = []

    // Generates a new board in index.html
    this.newBoard = function() {

        const boardElements = document.getElementsByClassName("gridText")

        for (let i = 0; i < boardElements.length; i++){
            boardElements[i].innerHTML = ""
            this.board.push(boardElements[i])
        }
    }

    // Adds a new mark to the board.
    this.runGame = function() {
        
        // Sets which mark will be used
        let lastMark = "X"
        let board = this.board

        for (const box of this.board) {
            box.parentElement.classList.remove("selected")
            box.parentElement.style.backgroundColor = "white"
            box.parentElement.addEventListener("click", function callback(){
                box.parentElement.classList.add("selected")
                box.innerHTML = lastMark
                lastMark = (lastMark == "O") ? "X" : "O"
                winCheck(board)
            }, {once : true})
        }       
    }

    winCheck = function(board) {

        // Check for Row Win
        for (let i = 0; i < 9; i += 3){
            if (board[i].innerHTML == board[i + 1].innerHTML && board[i].innerHTML == board[i + 2].innerHTML
                && board[i].innerHTML != "") {
                winDisplay(board, board[i], board[i + 1], board[i + 2])
            }
        }

        // Check for Col Win
        for (let i = 0; i < 3; i++){
            if (board[i].innerHTML == board[i + 3].innerHTML && board[i].innerHTML == board[i + 6].innerHTML
                && board[i].innerHTML != "")
                winDisplay(board, board[i], board[i + 3], board[i + 6])
        }

        // Check for Diag Win
        if ((board[0].innerHTML == board[4].innerHTML && board[0].innerHTML == board[8].innerHTML) && board[4].innerHTML != "")
            winDisplay(board, board[0], board[4], board[8])
        else if ((board[2].innerHTML == board[4].innerHTML && board[2].innerHTML == board[6].innerHTML) && board[4].innerHTML != "")
            winDisplay(board, board[2], board[4], board[6])
    }

    winDisplay = function(board, ...args){
        for (const item of args) {
            item.parentElement.style.backgroundColor = "#33C3F0"
        }
        for (const item of board) {
            item.parentElement.classList.add("selected")
        }
        document.getElementById("overlay").style.display = "block";
    }

    test = function(){
        console.log("f")
    }
}

function gameManager(){
    
    // Create new game board
    const managerBoard = new gameBoard()
    managerBoard.newBoard()
    managerBoard.runGame()

    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").addEventListener("click", function(){
        managerBoard.newBoard()
        managerBoard.runGame()
        managerBoard.newBoard()
        managerBoard.runGame()
        this.style.display = "none";
    }) 
}

gameManager()
