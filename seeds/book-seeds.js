// Require/Deconstruct the genre model
const { Book } = require('../models');

// Creates an array of genres to then populate the database.
const bookData = [
    {
        title: `THE BOOK EATERS`,
        book_cover: '/images/book-easter.jpg',
        book_date: '06/27/2023',
        author_id: 2,
        genre_id: 8,
    },
    {
        title: `Elon Musk (Signed Book)`,
        book_cover: '/images/elon-musk.jpg',
        book_date: '09/12/2023',
        author_id: 1,
        genre_id: 7,
    },
    {
        title: `It's a Small World`,
        book_cover: '/images/small-world.jpg',
        book_date: '01/05/2021',
        author_id: 3,
        genre_id: 3,
    },


];

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;
