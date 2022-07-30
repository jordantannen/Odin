let myLibrary = []

// Book Object and Methods
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.getTitle = function(){
    return this.title
}

Book.prototype.getAuthor = function(){
    return this.author
}

Book.prototype.getPages = function(){
    return this.pages
}

Book.prototype.getReadStatus = function(){
    return this.isRead
}

Book.prototype.changeReadStatus = function(status){
    this.isRead = status
}

// Add to library
function addToLibrary(title, author, pages, isRead) {

    // Creates new book, pushes to library
    let userBook = new Book(title, author, pages, isRead)
    myLibrary.push(userBook)
    myLibrary.sort()

}

function updateTable() {

    // Pulls librarytable and creates a new row
    var libraryTable = document.getElementById("library")
    var newRow = libraryTable.insertRow(-1)
    newRow.id = myLibrary.length - 1
    
    // Inserts data into new rows
    newRow.insertCell(0).innerHTML = myLibrary[newRow.id].getTitle()
    newRow.insertCell(1).innerHTML = myLibrary[newRow.id].getAuthor()
    newRow.insertCell(2).innerHTML = myLibrary[newRow.id].getPages()

    // Creates the isRead checkbox
    let readBox = document.createElement("INPUT")
    readBox.setAttribute("type", "checkbox")
    newRow.append(readBox)
    
    // Checks readbox if book has been read
    if (myLibrary[newRow.id].getReadStatus()){
        readBox.checked = true
    }

    // Updates readbox on user input
    readBox.onclick = () => {
        if (readBox.checked)
            myLibrary[newRow.id].changeReadStatus(true)
        else
            myLibrary[newRow.id].changeReadStatus(false)
    }
    
    // Creates delete button and ads to table
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Remove"
    newRow.append(deleteButton)

    // Removes row based on user input
    deleteButton.onclick = () => {
        newRow.remove()
        myLibrary.splice(newRow.id, 1)
    }
}


// Get buttons and overlay
let addBook = document.getElementById("add")
let submitButton = document.getElementById("submit")
let overlay = document.getElementById("overlay")

// Makes form visible when addbook button is clicked
addBook.addEventListener("click", () => {
    overlay.style.visibility = 'visible';
});

// Adds to library
submitButton.addEventListener("click", () => {

    // Determines if book has been read
    let isRead = false
    if (document.getElementById("isRead").checked)
        isRead = true

    // Adds book to library array
    addToLibrary(document.getElementById("title").value, 
        document.getElementById("author").value, 
        document.getElementById("pages").value,
        isRead);

    // Updates table
    updateTable()

    // Hides overlay
    overlay.style.visibility = 'hidden';
});

