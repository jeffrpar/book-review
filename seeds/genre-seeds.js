// Require/Deconstruct the genre model
const { Genre } = require('../models');

// Creates an array of genres to then populate the database.
const genreData = [
    {
        genre_name: 'Fantasy Fiction',
    },
    {
        genre_name: 'Technology',
    },
    {
        genre_name: 'Children Book',
    },
    {
        genre_name: 'Action',
    },
    {
        genre_name: 'Mystery',
    },
    {
        genre_name: 'Drama',
    },
    {
        genre_name: 'Biography',
    },
    {
        genre_name: 'Fantasy',
    },
    {
        genre_name: 'Audio Book',
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
