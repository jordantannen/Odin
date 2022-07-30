let myLibrary = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
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

function addToLibrary(title, author, pages) {
    let userBook = new Book(title, author, pages)
    myLibrary.push(userBook)
    myLibrary.sort()

    var libraryTable = document.getElementById("library")
    
    var newRow = libraryTable.insertRow(-1)
    newRow.id = myLibrary.length - 1
    newRow.insertCell(0).innerHTML = userBook.getTitle()
    newRow.insertCell(1).innerHTML = userBook.getAuthor()
    newRow.insertCell(2).innerHTML = userBook.getPages()
    
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Remove"
    newRow.append(deleteButton)
    deleteButton.onclick = () => newRow.remove()

}

let addBook = document.getElementById("add")
let overlay = document.getElementById("overlay")

addBook.addEventListener("click", () => {
    overlay.style.visibility = 'visible';
});

let submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {
    addToLibrary(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value);
    overlay.style.visibility = 'hidden';
});

