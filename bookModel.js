const fs = require('fs');

function Getbooks() {
  const Allbooks = fs.readFileSync('data/books.json');
  const books = JSON.parse(Allbooks);
  return books;
}

function updatebooks() {
  const books = Getbooks();
  const booksJSON = JSON.stringify(books, null, 2);
  fs.writeFileSync('data/books.json', booksJSON);
  
}

module.exports = {
  Getbooks,
  updatebooks
};
