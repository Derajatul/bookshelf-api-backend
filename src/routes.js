const { addBookHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksByIdHandler,

  }
];

module.exports = routes;
