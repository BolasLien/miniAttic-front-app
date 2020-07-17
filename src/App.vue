<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- views的頁面 -->
    <router-view v-if="isRouterAlive" :datas="datas" :products="products" />
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      isRouterAlive: true,
      datas: [],
      products: []
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/pages')
      .then(response => {
        this.datas = response.data.datas
        this.reload()
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
    this.axios.get(process.env.VUE_APP_API + '/products')
      .then(response => {
        this.products = response.data.datas
        this.reload()
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
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
