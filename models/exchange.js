const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exchange extends Model {}

Exchange.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    exchangeDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exchange',
  }
);

module.exports = Exchange;