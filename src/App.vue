<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- views的頁面 -->
    <div id="contant">
    <router-view v-if="isRouterAlive" :webdata="webdata" />
    </div>
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
      isRouterAlive: false,
      webdata: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    token () {
      return this.$store.getters.token
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    },
    heartbeat () {
      this.$axios.heartbeat()
    },
    getWebData () {
      this.$axios.getWebData()
        .then(response => {
          this.webdata = response.data
          this.webdata.pages.map(e => { e.src = process.env.VUE_APP_API + '/image/' + e.src })
          this.webdata.products.map(e => { e.src = process.env.VUE_APP_API + '/image/' + e.src })

          this.reload()
        })
    }
  },
  mounted () {
    this.getWebData()
  }
}
</script>
