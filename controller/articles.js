const Article = require('../models/article');


// const setSaved = (id, saved) => {
// 	return Article.findByIdAndUpdate(
// 		id, {
// 			saved
// 		}, {
// 			new: true
// 		}
// 	);
// };

module.exports = {
  find: function(req,res) {
    Article.find({})
    .then(articles => res.json(articles))
    .catch(err => res.status(500).json(err));
  },
  findSaved: function(req, res) {
    Article.find({ saved: true})
      .populate('comments')
      .then( dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    Article.find({
      saved: true
    })
    .then(articles => res.json(articles))
    .catch(err => res.status(500).send(err))
  },
  setSaved: function(req, res) {
    Article.findByIdAndUpdate(
      id, {
        saved
      }, {
        new: true
      }
    )
  },
  unsave: function(req,res) {
    setSaved(req.body.id, false)
    .then(article => res.json(article))
    .catch(err => res.status(404).json(err))
  }

}
