function Book (title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead

    this.getTitle = function(){
        console.log(title);
    }
}

Pokemon = new Book("Pokemon", "Jordan", 22, true)
Pokemon.getTitle()