// display modal
window.onload=function(){

let myLibrary = [];
let modal = document.querySelector('.modal');

let bookTitle;
let author;
let pages;
let read;
let row;
let shelf = document.getElementById('tBody');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document.getElementById('make-book').addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'none';
});

document.getElementById('addToLibrary').addEventListener('click', addBook);
document.getElementById('addToLibrary').addEventListener('click', render);

document.getElementById('addToLibrary').addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'none';
});

document.querySelectorAll('#read').forEach(item => {
  item.addEventListener('click', function() {
    if (this.innerHTML === 'Read') {
      this.innerHTML = 'Not Read';
      this.style.backgroundColor = '#f34f34';
        }
    else {
      this.innerHTML = 'Read';
      this.style.backgroundColor = 'green';
    }
  });
});

function addBook()  {

  bookTitle = document.querySelector('#title').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  read = document.querySelector('#status').value;

  let book = new Book(bookTitle, author, pages, read);

  myLibrary.push(book);
  console.log(myLibrary);
};


  function render() {


    let card = document.createElement('tr');
    let cell01 = document.createElement('td');
    let cell02 = document.createElement('td');
    let cell03 = document.createElement('td');
    let cell04 = document.createElement('td');
    cell01.innerHTML = bookTitle;
    cell02.innerHTML = author;
    cell03.innerHTML = pages;

    if (read == 'read') {
      cell04.innerHTML = '<button class="isRead" id="read" value="True">Read</button> <button class="delete">Delete</button>';
    } else {
      cell04.innerHTML = '<button class="notRead" id="read" value="False">Not Read</button><button class="delete">Delete</button>';
    }

    card.appendChild(cell01);
    card.appendChild(cell02);
    card.appendChild(cell03);
    card.appendChild(cell04);

    shelf.appendChild(card);

  }

shelf.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Delete') {
    console.log('mashallah it works');
    //e.target.parentNode.parentNode.style.border = '5px solid red';
    let tr = e.target.parentNode.parentNode;
    shelf.removeChild(tr);
  } else if (e.target.innerHTML === 'Read') {
    e.target.style.backgroundColor = '#f34f34';
    e.target.innerHTML = 'Not Read';
  } else if (e.target.innerHTML === 'Not Read') {
    e.target.style.backgroundColor = 'green';
    e.target.innerHTML = 'Read';
  } else {
    console.log('huh');
  }
});

};
