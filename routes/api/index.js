const router = require('express').Router();
const articleRoutes = require('./articles-api');

router.use('/articles', articleRoutes);
module.exports = router;