const Comments = require('../models/comment');
// const Article = require('./articles');
const Article = require('../models/article');

module.exports = {
  find: function(req,res) {
    Article
    .findOne({ _id: req.params.id })
    .populate('comments')
    .then(article => res.json(article))
    .catch(err => res.status(404).json(err))
  },
  create: function(req,res) {
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
  },
  delete: function(req, res) {
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
  }
}