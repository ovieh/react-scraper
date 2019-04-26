import axios from 'axios';

export default {
  getArticles: function() {
    return axios.get('/articles')
  },
  getSavedArticles: function() {
    return axios.get('/articles/save')
  },
  saveArticle: function(article) {
    return axios.post('/articles/save', article)
  },
  unsaveArticle: function(article) {
    return axios.post('/articles/unsave', article)
  }


}