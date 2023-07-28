// Imports models.
const Book = require('./book');
const Author = require('./author');
const Genre = require('./genre');

// Book belongs to a Genre.
Book.belongsTo(Genre, {
    foreignKey: 'genre_name',
});

// Book belongs to an Author.
Book.belongsTo(Author, {
    foreignKey: 'author_name',
});

// Genre has many books.
Genre.hasMany(Book, {
    foreignKey: 'genre_name',
});

module.exports = {
    Book,
    Author,
    Genre,
};