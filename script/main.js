
//Project: Library
//select cards
const cards = document.querySelector('.cards');

//Array to store book objects
let myLibrary = [
    {
        title: "Harry potter",
        author: 'David boe',
        pages:132,
        read: true,
        info: function () {
            console.log(this.title);
        }
    },
    {
        title: "Linux",
        author: 'Baqqla Garba',
        pages:200,
        read: false,
        info: function () {
            console.log(this.title);
        }
    }
];


//object-can be a constructor
function Booke(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        const report = `The ${Book} by ${author}, ${pages} pages,${read}`;
        return report;
    }
}

const Book = {
    info: function () {
        console.log(this.information);
    }
}
//creating book objects from protoype BOOK
const bookd = Object.create(Book);
bookd.information = 'Another book';
bookd.info();


//Function that take user input and store book objects in to array
function addBookToLibrary(title, author, pages, read) {
    let obj = {};
    obj.title = title;
    myLibrary.push();
}

//function that loop through the array and displays each book on the page
function displayBooks() {
    for (let book in myLibrary) {
        let bookItem = document.querySelector('#book-item1');
        bookItem.textContent = book;
    }
}


