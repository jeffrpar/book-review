// Imports models.
const Book = require('./book');
const Author = require('./author');
const Genre = require('./genre');
const User = require('./user');
const Exchange = require('./exchange');


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

//users can ecahange more than one
User.hasMany(Exchange, {
    foreignKey: 'userId',
  });
  
  // books can exchange more than once
  Book.hasMany(Exchange, {
    foreignKey: 'bookId',
  });
  
  //exchange belongs to one user
  Exchange.belongsTo(User, {
    foreignKey: 'userId',
  });
  

  // echang belongs to one book
  Exchange.belongsTo(Book, {
    foreignKey: 'bookId',
  });


module.exports = {
    Book,
    Author,
    Genre,
    User,
    Exchange,
};