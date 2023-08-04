// Require/Deconstruct the genre model
const { User } = require('../models');

// Creates an array of genres to then populate the database.
const userData = [
    {
        username: 'johncena',
        email: 'johncena@gmail.com',
        password: 'elpepedos'
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
