import axios from 'axios';

export default {
  getArticles: function() {
    return axios.get('/articles')
  },
  getSavedArticles: function() {
    return axios.get('articles/saved')
  }
}