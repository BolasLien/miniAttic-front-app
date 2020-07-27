<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- views的頁面 -->
    <router-view v-if="isRouterAlive" :webdata="webdata"/>
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
        .get(process.env.VUE_APP_API + '/heartbeat')
        .then(response => {
          const data = response.data

          if (this.user.length > 0) {
            if (!data) {
              this.$swal({
                title: '長時間未操作',
                icon: 'error',
                timer: 1000,
                timerProgressBar: true
              }).then(() => {
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
          console.log(error)
          this.$swal({
            title: '發生錯誤',
            icon: 'error',
            timer: 1000,
            timerProgressBar: true
          }).then(() => {
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登出後的首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          })
        })
    }
  },
  mounted () {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 1000 * 5)
    this.axios.get(process.env.VUE_APP_API + '/webdata')
      .then(response => {
        this.webdata = response.data
        this.reload()
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
