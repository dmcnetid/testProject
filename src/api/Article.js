import Vue from 'vue'

export default {
  getAllArticles () {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(`articles`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  getSingleArticle (slug) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(`/articles/${slug}`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  editSingleArticle (slug, body) {
    return new Promise((resolve, reject) => {
      Vue.http
        .put(`/articles/${slug}`, body)
        .then(response => resolve({ body: response.body, message: response.message }))
        .catch(err => reject(err))
    })
  },

  toggleSingleArticleActive (slug) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`/articles/${slug}/toggle-active`)
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
  },

  deleteArticle (slug) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`/articles/${slug}/delete`)
        .then(response => resolve({ body: response.body, message: response.message }))
        .catch(err => reject(err))
    })
  },

  createArticle (body) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`/articles/new`, body)
        .then(response => resolve({ body, message: response.message }))
        .catch(err => reject(err))
    })
  }
}
