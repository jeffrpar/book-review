seedGenre = require('./genre-seeds');
seedAuthor = require('./author-seeds');
seedBook = require('./bookData');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedGenre();
    console.log('\n----- GENRES SEEDED -----\n');
  
    await seedAuthor();
    console.log('\n----- AUTHORS SEEDED -----\n');
  
    await seedBook();
    console.log('\n----- BOOKS SEEDED -----\n');
  
    process.exit(0);
};

seedAll();