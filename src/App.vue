<template>
  <div id="app">
    <!-- Navbar -->
    <TheNavbar></TheNavbar>
    <router-view />
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    TheNavbar,
    Footer
  },
  data () {
    return {
      storyText: '就說要換行 \n 還不換行'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
