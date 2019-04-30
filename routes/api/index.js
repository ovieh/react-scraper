const router = require('express').Router();
const articleRoutes = require('./articles');
const commentRoutes = require('./comments');
const fetchRoute = require('./fetch');

router.use('/articles', articleRoutes);
router.use('/', commentRoutes);
router.use('/', fetchRoute)

module.exports = router;