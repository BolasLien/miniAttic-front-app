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
      this.axios
        .get(process.env.VUE_APP_API + '/heartbeat',
          { headers: { Authorization: `Bearer ${this.token}` } })
        .then(response => {
          const data = response.data

          if (this.user.length > 0) {
            if (!data) {
              this.$alert.error('長時間未操作，自動登出').then(() => {
                // 前端登出
                this.$store.commit('logout')
                // 如果現在不是在首頁，跳到登出後的首頁
                if (this.$route.path !== '/') {
                  this.$router.push('/')
                }
              })
            }
          }
        })
        .catch(error => {
          this.$alert.error('發生錯誤').then(() => {
            console.log(error)
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登出後的首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          })
        })
    },
    getWebData () {
      this.axios.get(process.env.VUE_APP_API + '/webdata')
        .then(response => {
          this.webdata = response.data
          this.webdata.pages.map(e => { e.src = process.env.VUE_APP_API + '/image/' + e.src })
          this.webdata.products.map(e => { e.src = process.env.VUE_APP_API + '/image/' + e.src })

          this.reload()
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getWebData()
  }
}
</script>
