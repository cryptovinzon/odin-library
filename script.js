let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.status = status;    
}

myLibrary.push(new Book('bitcoin', 'satoshi', 9, true))
myLibrary.push(new Book('ethereum', 'vitalik', 12, false))

Book.prototype.updateStatus = function(item) {
    item.status = 'true'? item.status === false : item.status === true;
    refreshLibrary();
}

document.querySelector('.add-book-panel').addEventListener('click', () => {
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
    myLibrary.push(new Book(title, author, pages, status));    
    refreshLibrary();
}

function refreshLibrary() {
    bookDiv = document.querySelectorAll('.book');
    bookDiv.forEach(book => book.remove());
    myLibrary.forEach(generateBookCards);
}

function generateBookCards(item, index) {
    const bookSection = document.querySelector('.book-section');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const title = document.createElement('div');
    title.textContent = item.title.toUpperCase();
    bookDiv.appendChild(title);
    const author = document.createElement('div');
    author.textContent = item.author;
    bookDiv.appendChild(author);
    const pages = document.createElement('div');
    pages.textContent = `${item.pages} pages`;
    bookDiv.appendChild(pages);

    const status = document.createElement('button');
    status.textContent = item.status? 'Read' : 'Unread';
    // add eventlistener to update read status
    status.addEventListener('click', function() {
        item.updateStatus(item);
    })
    bookDiv.appendChild(status);

    // assign data-attribute & event listener to each delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-index', index);
    deleteButton.addEventListener('click', function() {
        removeBook(index);
    })
    bookDiv.appendChild(deleteButton);

    bookSection.appendChild(bookDiv);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    refreshLibrary();
}

refreshLibrary()