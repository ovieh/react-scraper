const router = require('express').Router();
const articleController = require('../../controller/articles')
const scraper = require('../../scripts/scraper');


router
	.route('/scrape')
	.get(scraper.scrapeHeadlines)