const { Book } = require('../models');

const bookdata = [
  {
    title: 'Book Title 1'
  },
  {
    title: 'Book Title 2'
  },
  {
    title: 'Book Title 3'
  },
  {
    title: 'Book Title 4'
  },
];

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;
