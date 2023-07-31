const router = require('express').Router();

const homeControllers = require('./homeControllers.js');
const exchangeControllers = require('./exchangeController.js');

router.use('/', homeControllers);
router.use('/api/exchanges', exchangeControllers);


module.exports = router;
