import UserAPI from './../../api/User'

const User = {
  namespaced: true,
  state: {
    allUsers: [],
    currentUser: null
  },
  getters: {
    getAllUsers: state => {
      return state.allUsers
    },

    getCurrentUser: state => {
      return state.currentUser
    },

    isLoggedIn: state => {
      return state.currentUser !== null
    }
  },
  actions: {
    setAllUsers ({ commit }) {
      UserAPI.getAllUsers()
      .then(response => {
        commit('setAllUsers', response)
      })
    },

    login ({ commit }, formBody) {
      UserAPI.login(formBody)
      .then(response => {
        commit('setCurrentUser', response.body)
        commit('setJwtToken', response.token)
      })
    },

    logout ({ commit, dispatch }) {
      commit('unsetCurrentUser')
      dispatch('unsetLocalStorage', { root: true })
    }
  },
  mutations: {
    setAllUsers (state, allUsers) {
      state.allUsers = allUsers
    },

    setCurrentUser (state, user) {
      state.currentUser = user
    },

    unsetCurrentUser (state) {
      state.currentUser = null
    },

    setJwtToken (token) {
      window.localStorage.setItem('token', token)
    }
  }
}

export default User
