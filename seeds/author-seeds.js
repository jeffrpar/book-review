// Require/Deconstruct the genre model
const { Author } = require('../models');

// Creates an array of genres to then populate the database.
const authorData = [
    {
        author_name: 'Sunyi Dean',
    },
    {
        author_name: 'Walter Isaacson',
    },
    {
        author_name: 'Golden Books',
    },
    {
        author_name: 'David Goggins',
    },
    {
        author_name: 'James Clear',
    },
    {
        author_name: 'Kai Bird',
    },
    {
        author_name: 'Rebecca Yarros',
    },
    {
        author_name: 'Bonnie Garmus',
    },
    {
        author_name: 'Abraham Verghese',
    },
    {
        author_name: 'Barbara Kingsolver',
    },
    {
        author_name: 'Peter Attia MD',
    },
    {
        author_name: 'Freida McFadden',
    },
    {
        author_name: 'Margot Hunt',
    },
    {
        author_name: 'Mark Manson',
    },
    {
        author_name: 'J.K. Rowling',
    },
    {
        author_name: 'Pierce Brown',
    },
    {
        author_name: 'Sarah J. Maas',
    },
    {
        author_name: 'Matthew McConaughey',
    },
    {
        author_name: 'Colleen Hoover',
    },
    {
        author_name: 'Jennette McCurdy',
    },
]

const seedAuthor = () => Author.bulkCreate(authorData);

module.exports = seedAuthor;
