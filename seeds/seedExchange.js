//testing file 
const { Exchange } = require('../models');


const exchangeData = [
  {
    bookId: 1, 
    userId: 1, 
    exchangeDate: new Date(),
  },
  {
    bookId: 2,
    userId: 2,
    exchangeDate: new Date(),
  },
  {
    bookId: 3,
    userId: 3,
    exchangeDate: new Date(),
  },
];

const seedExchange = () => Exchange.bulkCreate(exchangeData);

module.exports = seedExchange;
