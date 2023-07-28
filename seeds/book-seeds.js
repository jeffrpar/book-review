// Require/Deconstruct the genre model
const { Book } = require('../models');

// Creates an array of genres to then populate the database.
const bookData = [
    {
        book_name: `Jake's Adventures`,
        book_cover: 'random-pic-route',
        book_date: '10/07/2002',
        author_name: 2,
        genre_name: 8,
    },
    {
        book_name: `The Beatles Chronics`,
        book_cover: 'random-pic-route',
        book_date: '10/07/1908',
        author_name: 1,
        genre_name: 7,
    },
    {
        book_name: `Big Hause random Dog`,
        book_cover: 'random-pic-route',
        book_date: '10/07/2010',
        author_name: 6,
        genre_name: 3,
    },


];

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;
