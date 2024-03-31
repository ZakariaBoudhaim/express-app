const express = require('express');
const bookModel = require('./bookModel');
const bookController = require('./bookController');
const app = express();
const port = 3000;

app.listen(port);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index")
} );

app.get('/books/new', (req, res) => {
  res.render('new');
});

app.post('/books/new', bookController.addBook);

app.get('/books', bookController.getBooks );

app.get('/books/:id', bookController.getBookById);

app.post('/books/:id', bookController.deleteBook);

console.log(`Server running on http://localhost:${port}`);
