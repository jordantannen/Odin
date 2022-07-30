let myLibrary = []

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

function addToLibrary(title, author, pages, isRead) {
    console.log(isRead)
    console.log(title)

    let userBook = new Book(title, author, pages, isRead)
    myLibrary.push(userBook)
    myLibrary.sort()

    var libraryTable = document.getElementById("library")
    
    var newRow = libraryTable.insertRow(-1)
    newRow.id = myLibrary.length - 1
    newRow.insertCell(0).innerHTML = userBook.getTitle()
    newRow.insertCell(1).innerHTML = userBook.getAuthor()
    newRow.insertCell(2).innerHTML = userBook.getPages()

    let readBox = document.createElement("INPUT")
    readBox.setAttribute("type", "checkbox")
    newRow.append(readBox)
    
    
    if (userBook.getReadStatus()){
        readBox.checked = true
        console.log(userBook.getReadStatus())
    }

    readBox.onclick = () => 
    
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
    let isRead = false
    console.log(isRead)
    if (document.getElementById("isRead").checked)
        isRead = true
    console.log(isRead)
    addToLibrary(document.getElementById("title").value, 
        document.getElementById("author").value, 
        document.getElementById("pages").value,
        isRead);
    overlay.style.visibility = 'hidden';
});

