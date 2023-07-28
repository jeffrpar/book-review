// Require/Deconstruct the genre model
const { Author } = require('../models');

// Creates an array of genres to then populate the database.
const authorData = [
    {
        author_name: 'John Lennon',
    },
    {
        author_name: 'Harry Potter',
    },
    {
        author_name: 'Donald Trump',
    },
    {
        author_name: 'Joe Biden',
    },
    {
        author_name: 'Uvufuevuevue Osas',
    },
    {
        author_name: 'Mike Perry',
    },
    {
        author_name: 'Joe',
    },
]

const seedAuthor = () => Author.bulkCreate(authorData);

module.exports = seedAuthor;
