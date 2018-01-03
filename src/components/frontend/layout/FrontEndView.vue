<template>
  <div class="columns is-mobile is-multiline">
    <the-sidebar></the-sidebar>
    <div class="column is-12-mobile is-9-tablet is-9-desktop">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
export default {
  name: 'FrontEndView',
  data () {
    return {}
  },
  components: {
    'theSidebar': TheSidebar
  }
}
</script>

<style lang="scss">
.columns {
  margin: 0px;
}
</style>
