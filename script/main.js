
//Project: Library

//Array to store book objects
let myLibrary = [
    book1 = {
        title: "Harry potter",
        author: 'David boe',
        read: 'yes',
        func: function () {
            console.log(this.title);
        }
    },
    book2 = {
        title: "Linux",
        author: 'Baqqla Garba',
        read: "No",
        func: function () {
            console.log(this.title);
        }
    }

];

//Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        const report = `The ${Book} by ${author}, ${pages} pages,${read}`;
        return report;
    }
}



//Function that take user input and store book objects in to array
function addBookToLibrary() {

}
//function that loop through the array and displays each book on the page
function displayBooks() {
    for (let book in myLibrary) {
        let bookItem = document.querySelector('#book-item1');
        bookItem.textContent = book;
    }
}
