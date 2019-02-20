const router = require('express').Router();
const Comments = require('../../models/comment');
const commentsController = require('../../controller/comments')

// comments
router
		.route('/:id')
		.get(commentsController.find)
router
	.route('/:id/comments/new')
	.post(commentsController.create);

router
	.route('/:id/delete')
	.post(commentsController.delete);

module.exports = router;