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
                title: '訊息',
                text: '長時間未操作，自動登出',
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
            title: '訊息',
            text: '發生錯誤',
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
    // 解決第三方cookies
    // let userPageView = parseInt(sessionStorage.getItem('userPageView'))

    // if (isNaN(userPageView)) {
    //   sessionStorage.setItem('userPageView', 1)
    // } else {
    //   sessionStorage.setItem('userPageView', userPageView + 1)
    // }

    // userPageView = parseInt(sessionStorage.getItem('userPageView'))

    // if (userPageView === 1) {
    //   window.location.href = process.env.VUE_APP_API + '/'
    // }

    // if (userPageView > 1) {
    //   this.axios.get(process.env.VUE_APP_API + '/webdata')
    //     .then(response => {
    //       this.webdata = response.data
    //       this.reload()
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }

    this.getWebData()

    // this.heartbeat()
    // setInterval(() => {
    //   this.heartbeat()
    // }, 1000 * 5)
  }
}
</script>
