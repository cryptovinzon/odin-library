let myLibrary = [];

function Book(title) {
    this.title = title;
}

document.getElementById('add-book-form').addEventListener('submit', () => {
    let title = document.getElementById('book-title').value;
    addBookToLibrary(title);
});

function addBookToLibrary(title) {
    const newBook = new Book(title)
    myLibrary.push(newBook);
}