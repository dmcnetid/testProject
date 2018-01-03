<template>
  <div class="shit">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      'articles': state => state.frontend.allArticles
    })
  },
  methods: {
    ...mapActions({
      'setAllArticles': 'article/setAllArticles'
    })
  },
  created () {
    this.setAllArticles()
  }
}
</script>

