const router = require('express').Router();
const articleController = require('../../controller/articles')
const commentsController = require('../../controller/comments')

//This seemingly just displays articles that aren't saved, maybe
//I don't need it

// app.get('/', (req, res) => {
// 	Article
// 		.find({ saved: false})
// 		.populate('comments')
// 		.then(articles => {
// 			res.render('index', articles);
// 		})
// 		.catch(()=> res.status(404).send('page unavailable'));
// });

router
	.route('/saved')
	.get(articleController.findSaved);

// returns /articles
router.get('/', articleController.find)


// returns /articles/save
router.route('/save')
		.get(articleController.save)
		.post(articleController.setSaved)

// returns /articles/unsave
router
		.route('/unsave')
		.post(articleController.unsave)

		router
		.route('/:id/comments/new')
		.post(commentsController.create);

module.exports = router;