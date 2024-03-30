const bookModel = require('./bookModel');

function getBooks(req, res) {
  const books = bookModel.getbooksall();
  res.render('books', { books: books });
}

function getBookById(req, res) {
  const bookId = parseInt(req.params.id);
  const books = bookModel.getbooksall();
  const book = books.find(book => book.id === bookId);
  if (book) {
    res.render('book', { book: book });
  } else {
    res.status(404).send('Book not found');
  }
}

function addBook(req, res) {
  const { title, author, year } = req.body;
  const books = bookModel.getbooksall();
  const newBook = {
    id: books.length + 1,
    title: title,
    author: author,
    year: year
    };
    books.push(newBook);
    bookModel.updatebooks(books);
    res.redirect('/books');
}

module.exports = {
  getBooks,
  getBookById,
  addBook
};
