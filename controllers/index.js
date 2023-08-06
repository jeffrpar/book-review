const router = require('express').Router();

const homeControllers = require('./homeControllers.js');
const bookControllers = require('./bookControllers.js');
const userControllers = require('./userControllers.js');

router.use('/', homeControllers);
router.use('/api/books', bookControllers);
router.use('/api/users', userControllers);


module.exports = router;
