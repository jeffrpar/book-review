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
        author_name: 'Kai Bird, Martin J. Sherwin',
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
    {
        author_name: 'James Patterson, Brendan DuBois',
    },
    {
        author_name: 'Elin Hilderbrand',
    },
    {
        author_name: 'Lisa Wingate',
    },
    {
        author_name: 'Markus Zusak',
    },
    {
        author_name: 'Emily Henry',
    },
    {
        author_name: 'Kristin Harmel',
    },
    {
        author_name: 'don Miguel Ruiz',
    },
    {
        author_name: 'Meghan Quinn',
    },
    {
        author_name: 'Micalea Smeltzer',
    },
    {
        author_name: 'Jack Carr',
    },
    {
        author_name: 'Peter Kenny',
    },
    {
        author_name: 'Kathleen Glasgow',
    },
    {
        author_name: 'Charles Armstrong',
    },
    {
        author_name: 'Agatha Christie',
    },
    {
        author_name: 'Jerry Oppenheimer',
    },
    {
        author_name: 'Oscar Wilder, Brothers Grimm',
    },
]

const seedAuthor = () => Author.bulkCreate(authorData);

module.exports = seedAuthor;
