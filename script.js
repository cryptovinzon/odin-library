let myLibrary = [];

function Book(title) {
    this.title = title;
}

function addBookToLibrary(title) {
    const newBook = new Book(title)
    myLibrary.push(newBook);
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
    addBookToLibrary(title);
    generateBook();
});