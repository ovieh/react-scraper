const router = require('express').Router();
const Article = require('../../models/article');
const Comments = require('../../models/comment');
const scraper = require('../../controller/scraper');

const setSaved = (id, saved) => {
	return Article.findByIdAndUpdate(
		id, {
			saved
		}, {
			new: true
		}
	);
};

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
	.route('/articles/saved')
	.get((req, res) => {
		Article
		.find({ saved: true})
		.populate('comments')
		.then( dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err))
	});

router
	.route('/scrape')
	.get((req, res) => {
		scraper()
			.then(data => {
				Article.create(data, (err, newArticles) => {
					if (err) console.log(err);
					res.json(newArticles);
				})
			})
			.catch(err => res.status(400).send(err))
	})

// returns /articles
router
	.route('/articles')
		.get((req, res) => {
			Article.find({})
			.then(articles => res.json(articles))
			.catch(err => res.status(500).json(err));
	})

// returns /articles/save
router
	.route('/articles/save')
		.get((req, res) => {
			Article.find({
				saved: true
			})
			.then(articles => res.json(articles))
			.catch(err => res.status(500).send(err.message))
		})
		.post((req, res) => {
			setSaved(req.body.id, true)
				.then(article => res.json(article))
				.catch(err => res.status(404).json(err))
		})

// returns /articles/unsave
router
		.route('/articles/unsave')
		.post((req, res) => {
			setSaved(req.body.id, false)
				.then(article => res.json(article))
				.catch(err => res.status(404).json(err))
		})


// comments
router
		.route('/articles/:id')
		.get((req, res) => {
			Article
				.findOne({ _id: req.params.id })
				.populate('comments')
				.then(article => res.json(article))
				.catch(err => res.status(404).json(err))
		})
router
	.route('/articles/:id/comments/new')
	.post((req,res) => {
		Comments
			.create(req.body)
			.then(newComment => {
				return Article.findOneAndUpdate(
					{ _id: req.params.id },
					{ $push: { comments: newComment._id }},
					{ new: true }
				);
			})
		.then(data => res.json(data))
		.catch(err => res.status(404).send(err.message));
});

router
	.route('/comments/:id/delete')
		.post((req, res) => {
			Comments.remove({ _id: req.params.id }).then(() => {
				Article
					.update(
						{ comments: req.params.id },
						{ $pullAll: { comments: [{ _id: req.params.id }] } }
					)
					.then(data => {
						res.json(data);
			});
	});
});
		
module.exports = router;