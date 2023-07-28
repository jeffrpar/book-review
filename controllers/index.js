const router = require('express').Router();

const homeRoutes = require('./homeControllers.js');

router.use('/', homeRoutes);

module.exports = router;
