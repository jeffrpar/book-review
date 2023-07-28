// Export models.
const { Model, DataTypes } = require('sequelize');
// Import, link/require the sequelize connection.
const sequelize = require('../config/connection');

// Class extent for books.
class Author extends Model {}

Author.init(
    {
        // Define author id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // Define a column for the author's name.
        author_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'author',
    }
);

module.exports = Author;