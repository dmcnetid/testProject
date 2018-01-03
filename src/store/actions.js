export default {
  login ({ commit }, user) {
    commit('user/login', user)
  },

  logout ({ commit }) {
    commit('user/logout')
  },

  unsetLocalStorage () {
    window.localStorage.clear()
  }
}
