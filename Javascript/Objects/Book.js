function Book (title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.info = function(){
    if (this.isRead)
        return this.title + " by " + this.author + ", " + this.pages + " pages, not yet read"
    return this.title + " by " + this.author + ", " + this.pages + " pages, read"
}

Pokemon = new Book("Pokemon", "Jordan", 22, true)
Pokemon2 = new Book("Pokemon2", "Jordan", 22, true)
console.log(Pokemon.info())
console.log(Pokemon2.info())