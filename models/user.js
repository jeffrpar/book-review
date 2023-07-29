const { Model, DataTypes } = require('sequelize');
// import becrypt packge for secret users passwords
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password); //compare input password and saved password if they are match then return true if not return false
  }
}



User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6] //set the password length to 6
      }
    }
  },

  {

    //hash the passwords
    hooks: {
      async beforeCreate(newUserData) { //Runs before  new user is created, it's used to hash the new user's password for safety.
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {//Runs before an existing user's data is updated, it's used to hash the updated password.
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },

    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    timestamps: true,
  }
);

module.exports = User;