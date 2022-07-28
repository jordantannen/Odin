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

function addToLibrary(userBook) {
    myLibrary.push(userBook)
    myLibrary.sort()

    var libraryTable = document.getElementById("library")
    
    var newRow = libraryTable.insertRow(-1)
    newRow.insertCell(0).innerHTML = userBook.getTitle()
    newRow.insertCell(1).innerHTML = userBook.getAuthor()
    newRow.insertCell(2).innerHTML = userBook.getPages()

}

let testBook = new Book("Gatsby", "Scott", 200)
let testBook2 = new Book("Jame", "Bob", 240)
let testBook3 = new Book("Ape", "Tom", 300)

addToLibrary(testBook)
addToLibrary(testBook2)
addToLibrary(testBook3)

let addBook = document.getElementById("add")
let overlay = document.getElementById("overlay")

addBook.addEventListener("click", () => {
    overlay.style.visibility = 'visible';
});
