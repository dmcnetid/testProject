import ArticleAPI from './../../api/Article'

const Article = {
  namespaced: true,
  state: {
    allArticles: [],
    currentSelectedArticle: null
  },
  getters: {
    getAllArticles: state => {
      return state.allArticles
    },

    getActiveArticles: state => {
      return state.allArticles.filter(article => article.active)
    }
  },
  actions: {
    setAllArticles ({ commit }) {
      ArticleAPI.getAllArticles()
      .then(response => {
        commit('setAllArticles', response)
      })
    },

    selectCurrentArticle ({ commit }, slug) {
      ArticleAPI.getSingleArticle(slug)
      .then(response => {
        commit('selectCurrentArticle', response)
      })
    },

    deselectArticle ({ commit }) {
      commit('deselectArticle')
    },

    createArticle ({ commit }, body) {
      ArticleAPI.createArticle(body)
      .then(response => {
        commit('appendNewArticle', response.body)
      })
    },

    deleteArticle ({ dispatch }, slug) {
      ArticleAPI.deleteArticle(slug)
      .then(response => {
        dispatch('setAllArticles')
      })
    }
  },
  mutations: {
    setAllArticles (state, articles) {
      state.allArticles = articles
    },

    unsetAllArticles (state) {
      state.allArticles = []
    },

    selectCurrentArticle (state, article) {
      state.currentSelectedArticle = article
    },

    deselectArticle (state) {
      state.currentSelectedArticle = null
    },

    appendNewArticle (state, article) {
      state.allArticles.push(article)
    }
  }
}

export default Article
