// popup working start
const addButton = document.getElementById("addBook")
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const submitButton = document.getElementById("submit");
const closeButton = document.getElementById("close");

function hidePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

function unhidePopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
}

addButton.addEventListener("click", () => {
    unhidePopup()
});

overlay.addEventListener("click", () => {
    hidePopup();
});

closeButton.addEventListener("click", () => {
    hidePopup();
});

submitButton.addEventListener("click", () => {
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    Book(title, author, pages, read);

})

// popup working end

let allBooks = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    allBooks.push([this.title, this.author, this.pages, this.read]);
    console.log(allBooks)
}

function defaultBooks() {
    Book("To Kill a Mocking Bird", "Harper Lee", "328", "No");
    Book("The Great Gatsby", "F. Scott Fitzgerald", "180", "No");
    Book("Pride and Prejudice", "Jane Austen", "279", "No");
    Book("The Catcher in the Rye", "J.D. Salinger", "277", "No");
    Book("The Alchemist", "Paulo Coelho", "208", "No");

}

defaultBooks();