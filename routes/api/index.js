const router = require('express').Router();
const articleRoutes = require('./articles');

router.use('/', articleRoutes);

module.exports = router;