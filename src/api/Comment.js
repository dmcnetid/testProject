import Vue from 'vue'

export default {
  getAllComments () {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(`/comments`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  getArticleComments (slug) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(`/comments/${slug}`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  }, 

  getSingleComment (id) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(`/comments/${id}`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  createComment (body) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`/comments/${articleId}/new`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  updateComment (body, id) {
    return new Promise((resolve, reject) => {
      Vue.http
        .put(`/comments/${id}/edit`, body)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  deleteComment (id) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`/comments/${id}`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  }
}

