const router = require('express').Router();
// const articleController = require('../../controller/articles')
const fetchController = require('../../controller/fetch');


router
	.route('/scrape')
	.get(fetchController.scrapeHeadlines)

module.exports = router;

