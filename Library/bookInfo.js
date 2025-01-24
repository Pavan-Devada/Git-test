// popup working start
const addButton = document.getElementById("addBook")
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const submitButton = document.getElementById("submit");
const closeButton = document.getElementById("close");
const popupError = document.querySelector(".popup-error");

function hidePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

function unhidePopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
}

addButton.addEventListener("click", () => {
    removePopupError();
    let title = document.getElementById("name").value = "";
    let author = document.getElementById("author").value = "";
    let pages = document.getElementById("pages").value = "";
    let read = document.getElementById("read").value = "";
    unhidePopup()
});

overlay.addEventListener("click", () => {
    hidePopup();
});

closeButton.addEventListener("click", () => {
    hidePopup();
});

submitButton.addEventListener("click", () => {
    removePopupError();
    let errors = []
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    if (title === "") {
        errors.push("Title")
    }
    if (author === "") {
        errors.push("Author")
    }
    if (pages === "") {
        errors.push("Pages");
    }
    if (read === "") {
        errors.push("Reading Status")
    }
    if (errors.length === 0) {
        if (pages.includes(".") || isNaN(Number(pages))) {
            displayPopupError(errors, true)
        }
        else {
            if (edit) {
                let updatedBook = {
                    id: Number(bookId),
                    title: title,
                    author: author,
                    pages: pages,
                    read: read,
                }
                allBooks[Number(bookId - 1)] = updatedBook;
                edit = false;
                removeCards();
                allBooksreRun();
            }
            else {
                newBook(title, author, pages, read);
            }
            hidePopup();
        }
    }
    else {
        displayPopupError(errors, false);
    }
})

function displayPopupError(errors, decimalError) {
    if (errors.length) {
        popupError.textContent = `The ${errors.join(", ")} cannot be empty`;
    }
    if (decimalError) {
        popupError.textContent = "Enter valid number of pages";
    }
    popupError.style.display = "block";
}

function removePopupError() {
    popupError.style.display = "none";
}

// popup working end


//creating cards

function createCard(book) {
    let bookCards = document.querySelector(".book-cards");

    // Create the main card container
    const card = document.createElement('div');
    card.className = 'card';

    // Create the book-information container
    const bookInformation = document.createElement('div');
    bookInformation.className = 'book-information';
    bookInformation.setAttribute("book-id", `${book["id"]}`);

    // Create the bookName container
    const bookName = document.createElement('div');
    bookName.className = 'bookName';
    const title = document.createElement('h3');
    title.textContent = `${book["title"]}`;
    bookName.appendChild(title);

    // Create the book-additionalInfo container
    const bookAdditionalInfo = document.createElement('div');
    bookAdditionalInfo.className = 'book-additionalInfo';

    const authorName = document.createElement('p');
    authorName.className = 'authorName';
    authorName.textContent = `${book["author"]}`;

    const pages = document.createElement('p');
    pages.className = 'pages';
    pages.textContent = `${book["pages"]} pages`;

    bookAdditionalInfo.appendChild(authorName);
    bookAdditionalInfo.appendChild(pages);

    // Append bookName and bookAdditionalInfo to bookInformation
    bookInformation.appendChild(bookName);
    bookInformation.appendChild(bookAdditionalInfo);

    // Create the status-edit container
    const statusEdit = document.createElement('div');
    statusEdit.className = 'status-edit';

    // Create the reading-status container
    const readingStatus = document.createElement('div');
    readingStatus.className = 'reading-status';

    const statusIcon = document.createElement('p');
    statusIcon.className = `status-icon ${book["read"] === "notStarted" ? "status-red" : book["read"] === "inProgress" ? "status-orange" : "status-green"}`;


    const status = document.createElement('p');
    status.className = 'status';
    status.textContent = `${book["read"] === "notStarted" ? "Not Started" : book["read"] === "inProgress" ? "In Progress" : "Completed"}`;

    readingStatus.appendChild(statusIcon);
    readingStatus.appendChild(status);

    // Create the edit-button span
    const editButton = document.createElement('span');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';

    // Append readingStatus and editButton to statusEdit
    statusEdit.appendChild(readingStatus);
    statusEdit.appendChild(editButton);

    // Append bookInformation and statusEdit to card
    card.appendChild(bookInformation);
    card.appendChild(statusEdit);

    // Append the card to the body or another container
    bookCards.appendChild(card);
}

//all other content

let allBooks = [];
let bookId = "";
let edit = false;

function newBook(title, author, pages, read) {
    book = {
        id: allBooks.length + 1,
        title: title,
        author: author,
        pages: pages,
        read: read,
    }
    allBooks.push(book);
    createCard(book);
}

function defaultBooks() {
    newBook("To Kill a Mocking Bird", "Harper Lee", "328", "inProgress");
    newBook("The Great Gatsby", "F. Scott Fitzgerald", "180", "notStarted");
    newBook("Pride and Prejudice", "Jane Austen", "279", "completed");
    newBook("The Catcher in the Rye", "J.D. Salinger", "277", "No");
    newBook("The Alchemist", "Paulo Coelho", "208", "No");

}
defaultBooks();

//editing created cards thorugh event delegation
let cardEdit = document.querySelector(".book-cards");
cardEdit.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        edit = true;
        const bookInfo = event.target.closest(".card").querySelector(".book-information");
        if (bookInfo) {
            bookId = bookInfo.getAttribute("book-id");
        }
        for (let book of allBooks) {
            if (book["id"] === Number(bookId)) {
                let title = document.getElementById("name");
                let author = document.getElementById("author");
                let pages = document.getElementById("pages");
                let read = document.getElementById("read");
                title.value = book["title"];
                author.value = book["author"];
                pages.value = book["pages"];
                read.value = book["read"];
            }
        }
        unhidePopup();
    }
})

//traversing through cards
function allBooksreRun() {
    for (let book of allBooks) {
        edit = true;
        createCard(book);
    }
}
// allBooksreRun();

function removeCards() {
    document.querySelectorAll(".card").forEach(e => e.remove());;
}