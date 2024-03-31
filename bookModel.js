const fs = require('fs');

function getbooksall() {
  const Allbooks = fs.readFileSync('data/books.json');
  const books = JSON.parse(Allbooks);
  return books;
}

function updatebooks(books) {
  const booksJSON = JSON.stringify(books, null, 2);
  fs.writeFileSync('data/books.json', booksJSON);
}

module.exports = {
  getbooksall,
  updatebooks
};

