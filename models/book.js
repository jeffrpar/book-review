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
        // Define a column for the book's title.
        title: {
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
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'author',
                key: 'id',
            }
        },

        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'genre',
                key: 'id',
            }
        },

        amazon_link: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        review_link: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        

        about: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        pages: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        Language: {
            type: DataTypes.STRING,
            allowNull: true, 
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