const Article = require('../models/article');
const scraper = require('../scripts/scraper');

module.exports = {
  scrapeHeadlines: function(req,res) {
    return scraper()
      .then(data => {
        Article.insertMany(data, (err, newArticles) => {
          if (err) console.log(err);
          res.json(newArticles);
        }, { ordered: true })
      })
      .catch(err => res.status(400).send(err))
  }
}
