const bookModel = require('./bookModel');

function getBooks(req, res) {
  const books = bookModel.Getbooks();
  res.render('books', { books: books });
}

function getBookById(req, res) {
  const bookId = parseInt(req.params.id);
  const books = bookModel.Getbooks();
  const book = books.find(book => book.id === bookId);
  if (book) {
    res.render('book', { book: book });
  } else {
    res.status(404).send('Book not found');
  }
}

function addBook(req, res) {
  const { title, author, year } = req.body;
    const newBook = { title, author, year };
    // Fetch existing books
    const books = GetBooks();

    // Add the new book to the array
    books.push(newBook);
    
}

module.exports = {
  getBooks,
  getBookById
};
