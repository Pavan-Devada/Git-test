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
            newBook(title, author, pages, read);
            allBooks.push([this.title, this.author, this.pages, this.read]);
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

function createCard(a, b, c, d) {
    let bookCards = document.querySelector(".book-cards");

    // Create the main card container
    const card = document.createElement('div');
    card.className = 'card';

    // Create the book-information container
    const bookInformation = document.createElement('div');
    bookInformation.className = 'book-information';

    // Create the bookName container
    const bookName = document.createElement('div');
    bookName.className = 'bookName';
    const title = document.createElement('h3');
    title.textContent = a;
    bookName.appendChild(title);

    // Create the book-additionalInfo container
    const bookAdditionalInfo = document.createElement('div');
    bookAdditionalInfo.className = 'book-additionalInfo';

    const authorName = document.createElement('p');
    authorName.className = 'authorName';
    authorName.textContent = b;

    const pages = document.createElement('p');
    pages.className = 'pages';
    pages.textContent = c + " pages";

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
    statusIcon.className = `status-icon ${d === "notStarted" ? "status-red" : d === "inProgress" ? "status-orange" : "status-green"}`;


    const status = document.createElement('p');
    status.className = 'status';
    status.textContent = `${d === "notStarted" ? "Not Started" : d === "inProgress" ? "In Progress" : "Completed"}`;

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

//traversing through cards

//all other content

let allBooks = [];

function newBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    allBooks.push([this.title, this.author, this.pages, this.read]);
    createCard(this.title, this.author, this.pages, this.read);
}

function defaultBooks() {
    newBook("To Kill a Mocking Bird", "Harper Lee", "328", "inProgress");
    newBook("The Great Gatsby", "F. Scott Fitzgerald", "180", "notStarted");
    newBook("Pride and Prejudice", "Jane Austen", "279", "completed");
    newBook("The Catcher in the Rye", "J.D. Salinger", "277", "No");
    newBook("The Alchemist", "Paulo Coelho", "208", "No");

}

defaultBooks();