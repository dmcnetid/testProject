import Vue from 'vue'

export default {
  getAllUsers () {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('http://api.wcarron.com/v1/users')
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
  },

  getSingleUser (id) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(`http://api.wcarron/com/v1/users/${id}`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  editSingleUser (id, body) {
    return new Promise((resolve, reject) => {
      Vue.http
        .put(`http://api.wcarron.com/v1/users/${id}/edit`, body)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  deleteSingleUser (id) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`http://api.wcarron.com/v1/users/${id}/delete`)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  login (formBody) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post('http://api.wcarron.com/v1/login', formBody)
        .then(response => resolve(response.body))
        .catch(err => reject(err))
    })
  },

  register (formBody) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post(`http://api.wcarron.com/v1/register`, formBody)
        .then(response => resolve(response.body))
        .catche(err => reject(err))
    })
  }
}
