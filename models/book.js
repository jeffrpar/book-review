// Export models.
const { Model, DataTypes } = require('sequelize');
// Import, link/require the sequelize connection.
const sequelize = require('../config/connection');

// Class extent for books.
class Book extends Model {}

Book.init(
    {
        // Define book id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // Define a column for the book's name.
        book_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Define a column for the book's cover.
        book_cover: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Define a column for the book's publishment date
        book_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Define a column for the book's author.
        author_name: {
            type: DataTypes.STRING,
            references: {
                model: 'author',
                key: 'id',
            }
        },

        // Define a column for the book's genre.
        genre_name: {
            type: DataTypes.STRING,
            references: {
                model: 'genre',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book',
    }
);

module.exports = Book;