import Vue from 'vue'

export default {
  getAllProjects () {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('http://api.wcarron.com/v1/projects')
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
  },

  getSingleProject (slug) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(`http://api.wcarron.com/v1/projects/${slug}`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },


  editSingleProject (slug, body) {
    return new Promise((resolve, reject) => {
      Vue.http
        .put(`http://api.wcarron.com/v1/projects/${slug}`, body)
        .then(response => resolve({ body, message: response.message }))
        .catch(err => reject(err))
    })
  },

  toggleSingleProjectActive (slug) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`http://api.wcarron.com/v1/projects/${slug}/toggle-active`)
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
  },

  deleteProject (slug) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`http://api.wcarron.com/v1/projects/${slug}/delete`)
        .then(response => resolve({ body: response.body, message: response.message }))
        .catch(err => reject(err))
    })
  },

  createProject (body) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`http://api.wcarron.com/v1/projects/new`, body)
        .then(response => resolve({ body, message: response.message }))
        .catch(err => reject(err))
    })
  }
}
