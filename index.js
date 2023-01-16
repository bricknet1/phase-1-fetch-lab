function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    renderBooks(json);
    findFifthBook(json);
    findTotalPages(json);
  })
}

function fetchCharacters(x) {
  // To pass the tests, don't forget to return your fetch!
  return fetch(`https://anapioficeandfire.com/api/characters/${x}`)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(`Character number ${x} is ${json.name}`);
    // findSpecificCharNumber(json);
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetchCharacters(1031);
});

function findFifthBook(books) {
  console.log(books[4].name);
}

// function findSpecificCharNumber(books){
//   console.log(books[4].characters[1031]);
// }

function findTotalPages(books){
  let totalPages = 0;
  books.forEach(element => totalPages += element.numberOfPages);
  console.log(`Total number of pages for all books: ${totalPages}`);
}
