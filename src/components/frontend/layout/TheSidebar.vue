<template>
  <div class="Sidebar column is-12-mobile is-small-tablet is-small-desktop has-text-centered">
    <div class="Sidebar__content-box">
      <figure class="Sidebar__LogoImg image is-128x128">
        <img src="./../../../assets/logo.png" alt="sidebar logo" />
      </figure>
      <h1 class="menu-label">wcarron</h1>

      <aside class="Sidebar__menu menu">
        <ul class="menu-list">
          <li class="menu-list__item">
            <router-link to="/" tag="a" exact>HOME</router-link>
          </li>
          <li class="menu-list__item">
            <router-link to="articles" tag="a">ARTICLES</router-link>
          </li>
          <li class="menu-list__item">
            <router-link to="about" tag="a" exact>ABOUT</router-link>
          </li>
          <li class="menu-list__item">
            <router-link to="contact" tag="a" exact>CONTACT</router-link>
          </li>
<!--          <li class="menu-list__item">
            <router-link to="projects" tag="a">PROJECTS</router-link>
</li> -->
        </ul>
      </aside>
    </div>

    <div class="Sidebar__disclaimers">
      <small>&copy; {{ currentYear }} William Carron. All rights reserved.</small><br>
      <router-link to="terms-of-service" tag="a" exact><small>Terms of Service</small></router-link>
      <router-link to="privacy-policy" tag="a" exact><small>Privacy Policy</small></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.Sidebar {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  box-shadow: 6px 0 6px -6px rgba(0,0,0,0.23), 5px 0 5px -5px rgba(0,0,0,0.16);
}

.Sidebar__LogoImg {
  margin: 0 auto;
}

.menu-label {
  font-size: 1.4rem;
}

.menu-list__item {
  a {
    font-size: 1rem;
  }
}

small {
  font-size: 0.7rem;
}
</style>
