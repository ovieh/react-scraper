const Article = require('../models/article');

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
    setSaved(req.body.id, true)
      .then(article => res.json(article))
      .catch(err => res.status(404).json(err))
  },

  unsave: function(req, res) {
    Article.findByIdAndUpdate(
      req.body._id, { saved: 'false'}
    )
    .then(article => res.json(article))
    .catch(err => res.status(422).json(err))
  },
  
  setSaved: function(req, res) {
    Article.findByIdAndUpdate(
      req.body._id, { saved: 'true' }
    )
    .then(article => res.json(article))
    .catch(err => res.status(422).json(err))
  },

}


