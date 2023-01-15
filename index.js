function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    renderBooks(json);
    findFifthBook(json);
    find1031stChar(json);
    findTotalPages(json);
  })
}

// function fetchCharacters() {
//   // To pass the tests, don't forget to return your fetch!
//   return fetch("https://anapioficeandfire.com/api/characters")
//   .then((resp) => resp.json())
//   .then((json) => {
//     console.log(json);
//     find1031stChar(json);
//   })
// }

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
  fetchCharacters();
});

function findFifthBook(books) {
  console.log(books[4].name);
}

function find1031stChar(books){
  console.log(books[4].characters[1031]);
}

function findTotalPages(books){

}
