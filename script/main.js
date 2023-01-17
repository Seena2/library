
//PROJECT : LIBRARY
//SELECTING TARGET ELEMENTS
//Select the searchbox
const search = document.getElementById('filter');

//select books grid container
const books = document.querySelector('.books');

//select add New book button
let displayForm = document.querySelector('.displayForm');

//select form accepting user input, that contain add book button
const form = document.getElementById('form_book');

//select div containing the Add book form
const formDiv = document.querySelector('.pop_form');

//Select the button in the add book form
const addBook = document.querySelector('.addBook');



//ADD EVENTS 
//add event listener to populate the div on page load
document.addEventListener('DOMContentLoaded', displayBooks);

//Add event to display add book form
displayForm.addEventListener('click', showForm);

//Add event on submit  when add book button is clicked on pop up form
form.addEventListener('submit', addBookToLibrary);

//add event listener to the books grid to catch click activity
books.addEventListener('click', removeBooks);

//Add Event to filter searched books
search.addEventListener('keyup', searchBooks);




//CREATING ARRAY OF OBJECTS
//Array to store book objects
let myLibrary = [
    {
        title: "Harry potter",
        author: 'David boe',
        pages: 132,
        read: true,
        cover: 'img',
        info: function () {
            console.log(this.title);
        }
    },
    {
        title: "Linux",
        author: 'Baqala Garba',
        pages: 200,
        read: false,
        cover: 'img',
        info: function () {
            console.log(this.title);
        }
    }
];

//Book constructor
function Book(title, author, pages, read, img) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cover = img;
    const information = function () {
        const report = `The book titled: ${title} is by ${author}, with ${pages} pages, i have ${read} read it: `;
        return report;
    }
    const info = console.log(this.information());
}

//function to show the Form when Add New book button is clicked
function showForm(e) {
    formDiv.style.display = 'block';
}



//Function that take user input and store book objects in to array
function addBookToLibrary(e) {
    //prevent the default behaviour of button to submit form content to server
    //i.e. ignore submiting form content since we dont have storage yet
    e.preventDefault();

    //creating book objects from protoype BOOK to store user input
    const newBook = Object.create(Book);
    //collect user input value to the object
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pages = document.getElementById('pages').value;
    newBook.read = document.getElementById('isRead').value;
    newBook.cover = document.getElementById('coverImage').value;

    //create new div element to hold this values
    let div = document.createElement('div');
    //Add this new book object to the Array-MyLibrary;
    myLibrary.push(newBook);
    formDiv.style.display = 'none';
    //display the old books along the new one
    if (myLibrary.length != 0) {
        myLibrary
    }
    displayBooks();
}
//function that loop through the array and displays each book on the page
function displayBooks(e) {

    //get all the objects and its value from the array by iterating it, 
    for (i = 0; i < myLibrary.length; i++) {

        // and store it on temp object
        const tempBook = Object.create(Book);
        tempBook.title = myLibrary[i].title;
        tempBook.author = myLibrary[i].author;
        tempBook.pages = myLibrary[i].pages;
        tempBook.read = myLibrary[i].read;
        tempBook.cover = myLibrary[i].cover;

        //create new div element
        let div = document.createElement('div');

        //Add class to the div
        div.className = 'card';

        //creat Paragraph element to hold  each value
        let titlePara = document.createElement('p');
        let authorPara = document.createElement('p');
        let pagesPara = document.createElement('p');
        let readPara = document.createElement('p');
        let coverImage = document.createElement('img');

        // create text node of the value from the object and add to the paragraph
        let titleNode = document.createTextNode(tempBook.title);
        let authorNode = document.createTextNode(tempBook.author)
        let pagesNode = document.createTextNode(tempBook.pages)
        let readNode = document.createTextNode(tempBook.read)
        let coverNode = document.createTextNode(tempBook.cover)

        //Append the values from the array to the paragraph/div
        titlePara.appendChild(titleNode);
        authorPara.appendChild(authorNode);
        pagesPara.appendChild(pagesNode);
        readPara.appendChild(readNode);
        coverImage.appendChild(coverNode);


        //Add classes to paragraph for styling
        titlePara.className = 'nline beauty';

        //create Delete button
        let deleteBtn = document.createElement('button');

        //Add class to the delete button
        deleteBtn.className = 'btn delete';

        //Add the text node with string value 'X'
        deleteBtn.appendChild(document.createTextNode('X'));

        //Add the delete button as well as the paragraphs to the div
        div.appendChild(titlePara);
        div.appendChild(deleteBtn);
        div.appendChild(authorPara);
        div.appendChild(pagesPara);
        div.appendChild(readPara);
        div.appendChild(coverImage);

        //Add the div to the books grid container
        books.appendChild(div);
    }
}

//REMOVING BOOKS
//Function to remove books from the grid when delete btn is clicked
function removeBooks(e) {
    //target only the button containing the class delete
    //otherwise when you click any where in the grid the div will be deleted
    if (e.target.classList.contains('delete')) {
        //if so ask user to confirm
        if (confirm('Are you sure you want to permanently delete this item')) {
            //if user choose yes, we grab the parent element containing the delete btn
            let div2delete = e.target.parentElement;
            //and remove the div element get clicked from parent element
            books.removeChild(div2delete);
        }

    }

}

//Function to filter or search books
function searchBooks(e) {

    //Searching, using DOM
    //get entered text and convert it to lowercase
    let searchItem = e.target.value.toLowerCase();
    //console.log(searchItem);
    //get all the div elements in the books grid
    let allBooks = books.getElementsByTagName('div');
    //console.log(allBooks);
    //Turn the above collection to an Array and loop through them
    Array.from(allBooks).forEach(function (book) {
        let bookItem = book.firstChild.textContent;

        //console.log(bookItem);
        //compare the search box text with books 
        //note we are using first containt , be specific whith tile or author somehting
        //convert to lowercase and compare if it is much, not equal to -1 means it is much
        if (bookItem.toLowerCase().indexOf(searchItem) != -1) {
            //then add style to if to be identified easly
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
        //This is not good solution , to avoid form from poping when key is up
        formDiv.style.display = 'none';
    });
}

//Do the following on your next visit
//1-obtimize the code to use more objects rather than primitive data types
//2 -resolve the duplicate display of the div's in DOM in displayBooks function when new book is added
//3-compare the value resived from searchbox with each objects 'Title' 
//4-Style the delete and position it at right corner
//5-accept image fine for cover of the book and display it back on the div
//6-accept file attachments
//7-include radio, checkbox and dropdown input types to accept user input and store the data to te array
//8-Delete the book object from the array not from the DOM
//9-Add button to change the read status of the book, toogle between read and not read