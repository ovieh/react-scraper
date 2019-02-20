const router = require('express').Router();
const articleRoutes = require('./articles');
const commentRoutes = require('./comments')

router.use('/articles', articleRoutes);
router.use('/comments', commentRoutes);

module.exports = router;