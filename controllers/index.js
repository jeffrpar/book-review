const router = require('express').Router();

const homeControllers = require('./homeControllers.js');
const exchangeControllers = require('./exchangeController.js');
const bookControllers = require('./bookControllers.js');
const userControllers = require('./userControllers.js');

router.use('/', homeControllers);
router.use('/api/exchanges', exchangeControllers);
router.use('/api/books', bookControllers);
router.use('/api/users', userControllers);


module.exports = router;
