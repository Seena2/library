
//Project: Library
//select the form containing add New book button
let addBtn=document.getElementById('addForm');

//select books grid container
const books = document.querySelector('.books');

//select form to accept user input
const form=document.getElementById('form_book');

//select div container containing the book form
const formDiv=document.querySelector('.pop_form');

//Select the searchbox
const search=document.getElementById('filter');


//Add Events 
//form submit event when add new book button is clicked
addBtn.addEventListener('submit',addBookToLibrary);

//add event listener to the books grid to catch click activity
books.addEventListener('click',removeBooks);

//Add Event to filter searched books
search.addEventListener('keyup',searchBooks);

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
        author: 'Baqala Garba',
        pages:200,
        read: false,
        info: function () {
            console.log(this.title);
        }
    }
];


//object- constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    const information = function () {
        const report = `The book titled: ${title} is by ${author}, with ${pages} pages, i have ${read} read it: `;
        return report;
    }
    const info =console.log(this.information());
}

//creating book objects from protoype BOOK
const bookd = Object.create(Book);
bookd.title="door";
bookd.info;



//Function that take user input and store book objects in to array
function addBookToLibrary(e){
    //prevent the default behaviour of button to submit form content to server
    //i.e. ignore submiting form content since we dont have storage yet
    e.preventDefault();
    //test the function, should print 1 when the button is clicked
    //console.log(1); 
    //pop the input form that accepts the user input to get their values
    //formDiv.setAttribute(visibility:show);
    //collect user input value
    let title=document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    let readTheBook=document.getElementById('isRead').value;
    let coverImg=document.getElementById('coverImage').value;

    //create new div element
    let div=document.createElement('div');

    //Add class to the div
    div.className='card';
   //console.log(div); //checks if div is added to DOM

   //Append the value recieved from user to the div
   //Add text node with input value 
   let newTitle=document.createTextNode(title);
   
   let newAuthor=document.createTextNode(author);
   let newPages=document.createTextNode(pages);
   let isRead=document.createTextNode(readTheBook);
   let cover=document.createTextNode(coverImg);
   div.appendChild(newTitle);
   div.appendChild(newAuthor);
   div.appendChild(newPages);
   div.appendChild(isRead);
   div.appendChild(cover);


// Add the delete button and other HTML
let deleteBtn=document.createElement('button');
//Add classes to delete btn
deleteBtn.className='btn delete';

//Append the text node 'X'
deleteBtn.appendChild(document.createTextNode('X'));

//append the button to the div
div.appendChild(deleteBtn)

//Append(adds) the div to the books grid container
   books.appendChild(div); 

   

}
//REMOVING BOOKS
   //Function to remove books from the grid when delete btn is clicked
   function removeBooks(e){
    //target only the button containing the class delete
    //otherwise when you click any where in the grid the div will be deleted
    if(e.target.classList.contains('delete')){
        //if so ask user to confirm
        if(confirm('Are you sure you want to permanently delete this item')){
            //if user choose yes, we grab the parent element containing the delete btn
            let div2delete=e.target.parentElement;
            //and remove the div element get clicked
            books.removeChild(div2delete);
        }

    }

   }

/*
function addBookToLibrary(title, author, pages, read) {
    let obj = {};
    obj.title = title;
    obj.author=author;
    obj.pages =pages;
    obj.read=read;
    myLibrary.push();
}
*/
//function that loop through the array and displays each book on the page
function displayBooks() {
    for (let book in myLibrary) {
        let bookItem = document.querySelector('#book-item1');
        bookItem.textContent = book;
    }
}


//Function to filter or search books
function searchBooks(e){
    //get entered text and convert it to lowercase
    let searchItem= e.target.value.toLowerCase();
    //console.log(searchItem);
    //get all the div elements in the books grid
    let allBooks=books.getElementsByTagName('div');
    //console.log(allBooks);
    //Turn the above collection to an Array and loop through them
    Array.from(allBooks).forEach(function(book){
        let bookItem=book.firstChild.textContent;
        //console.log(bookItem);
        //compare the search box text with books 
        //note we are using first containt , be specific whith tile or author somehting
        //convert to lowercase and compare if it is much, not equal to -1 means it is much
        if(bookItem.toLowerCase().indexOf(searchItem)!= -1){ 
            //then add style to if to be identified easly
            book.style.display='block';
        }else{
            book.style.display='none';
        }
    });
}
