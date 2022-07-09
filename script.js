let myLibrary = [
    {title: 'bitcoin', author: 'satoshi', pages: 9, status: true},
    {title: 'ethereum', author: 'vitalik', pages: 12, status: false}
];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.status = status;
}

document.querySelector('.add-book-panel').addEventListener('click', (e) => {
    document.querySelector('.panel').classList.toggle('active');
});

document.getElementById('add-book-form').addEventListener('submit', () => {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').checked;
    addBookToLibrary(title, author, pages, status);
});

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status)
    myLibrary.push(newBook);
    refreshLibrary()
}

function refreshLibrary() {
    bookDiv = document.querySelectorAll('.book');
    bookDiv.forEach(book => book.remove());
    myLibrary.forEach(generateBook);
}

function generateBook(item, index) {
    const bookSection = document.querySelector('.book-section');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.classList.add(`data-index=${index}`)

    const title = document.createElement('div');
    title.textContent = item.title.toUpperCase()
    bookDiv.appendChild(title);
    const author = document.createElement('div');
    author.textContent = item.author
    bookDiv.appendChild(author);
    const pages = document.createElement('div');
    pages.textContent = `${item.pages} pages`;
    bookDiv.appendChild(pages);
    const status = document.createElement('div');
    status.textContent = item.status? 'Read' : 'Unread';
    bookDiv.appendChild(status);

    bookSection.appendChild(bookDiv);
}

refreshLibrary()