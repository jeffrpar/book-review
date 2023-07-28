// Export models.
const { Model, DataTypes } = require('sequelize');
// Import, link/require the sequelize connection.
const sequelize = require('../config/connection');

// Class extent for books.
class Genre extends Model {}

Genre.init(
    {
        // Define genre id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // Define a column for the genre's name.
        genre_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre',
    }
);

module.exports = Genre;