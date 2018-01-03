<template>
  <div>
    <h1 class="page__title title"></h1>
    <div v-for="a in articles" :key="a._id" class="list-item--article level">
      <div class="level-left">
        <span class="level-item">{{a.created_at}}</span>
      </div>

      <div class="level-right">
        <router-link to="{ name: 'single-article', params: { slug: a.slug }}" tag="h4">
          {{a.title}}
        </router-link>
        <p class="list-item__summary">{{ a.summary }}
        <router-link to="{ name: 'single-article', params: { slug: a.slug }}" tag="span" class="list-item__link-span">
          Read on <i class="material-icons">left_arrow</i>
        </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  head: {
    meta: [
      {
        name: 'description',
        content: 'Home page'
      }
    ]
  },
  created () {
    this.getArticles()
  },
  computed: {
    ...mapState({
      articles: state => state.article.allArticles
    })
  },
  methods: {
    ...mapActions({
      'getArticles': 'article/setAllArticles',
      'selectArticle': 'article/selectCurrentArticle'
    })
  }
}
</script>

