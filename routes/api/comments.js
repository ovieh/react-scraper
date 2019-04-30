const router = require('express').Router();
const commentsController = require('../../controller/comments')

// comments
router
		.route('/articles/:id')
		.get(commentsController.find)
router
	.route('/articles/:id/comments/new')
	.post(commentsController.create);

router
	.route('/comments/:id/delete')
	.get(commentsController.delete);

module.exports = router;