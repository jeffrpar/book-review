const router = require('express').Router();

const homeControllers = require('./homeControllers.js');

router.use('/', homeControllers);

module.exports = router;
