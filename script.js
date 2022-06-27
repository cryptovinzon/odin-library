let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook);
    console.table(myLibrary)
}

function generateBook() {
    const bookSection = document.querySelector('.book-section');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookSection.appendChild(bookDiv);
}

document.querySelector('.add-button').addEventListener('click', () => {
    document.querySelector('.panel').classList.toggle('active');
});

document.getElementById('add-book-form').addEventListener('submit', () => {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    addBookToLibrary(title, author, pages);
    generateBook();
});