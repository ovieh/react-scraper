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
  },
  scrape: function(){
    return axios.get('/scrape')
  },
  saveComment: function(comment, id) {
    return axios.post(`/articles/${id}/comments/new`, comment)
  },
  getComments: function(id){
    return axios.get(`/articles/${id}/`);
  },
  deleteComment: function(id) {
    return axios.get(`/comments/${id}/delete`)
  }


}