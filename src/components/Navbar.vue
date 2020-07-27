<template>
  <div id="navbar">
    <!-- logo與登入登出 -->
    <b-container>
      <b-row class="align-items-center">
        <b-col class="links" cols="4">
          <router-link to="/">
            <font-awesome-icon to="/" :icon="['fab','instagram']" size="lg"></font-awesome-icon>
          </router-link>
          <span>&ensp;|&ensp;</span>
          <router-link to="/">
            <font-awesome-icon to="/" :icon="['fab','facebook-square']" size="lg"></font-awesome-icon>
          </router-link>
        </b-col>
        <b-col class="logo" cols="4">
          <router-link to="/">
            <h1>小閣樓</h1>
            <h5>miniAttic</h5>
          </router-link>
        </b-col>
        <b-col class="login" cols="4">
          <router-link to="/reg" v-if="user.length===0 || user === undefined">
            <font-awesome-icon :icon="['fas','user']" size="lg"></font-awesome-icon>
            <span class="hidden-md">註冊</span>
          </router-link>
          <router-link to="/order" v-else>
            <font-awesome-icon :icon="['fas','list-alt']" size="lg"></font-awesome-icon>
            <span class="hidden-md">訂單管理</span>
          </router-link>
          <span>&ensp;|&ensp;</span>

          <router-link to="/login" v-if="user.length===0 || user === undefined">
            <font-awesome-icon :icon="['fas','sign-in-alt']" size="lg"></font-awesome-icon>
            <span class="hidden-md">登入</span>
          </router-link>
          <a href="#" v-else @click="logout">
            <font-awesome-icon :icon="['fas','sign-out-alt']" size="lg"></font-awesome-icon>
            <span class="hidden-md">登出</span>
          </a>
          <span>&ensp;|&ensp;</span>

          <router-link to="/cart">
            <font-awesome-icon :icon="['fas','shopping-cart']" size="lg"></font-awesome-icon>
            <span class="hidden-md" v-if="cartNum<=0">購物車</span>
            <span v-else>
              <span class="hidden-lg">共</span>
              {{cartNum}}
              <span class="hidden-lg">件商品</span>
            </span>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
    <!-- Navigation -->
    <div>
      <b-navbar toggleable="sm">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item to="/About">關於我們</b-nav-item>
            <b-nav-item to="/Shop">各式甜點</b-nav-item>
            <b-nav-item to="/News">最新消息</b-nav-item>
            <b-nav-item to="/Faq">購買流程</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    cartNum () {
      return this.$store.getters.cart.totalAmount
    },
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    logout (event) {
      event.preventDefault()

      this.axios
        .delete(process.env.VUE_APP_API + '/logout')
        .then((response) => {
          const data = response.data
          // 如果回來的資料 success 是 true
          if (data.success) {
            alert('登出成功')
            // 呼叫 vuex 的登出
            this.$store.commit('logout')

            // 如果現在不是在首頁，跳到登出後的首頁
            if (this.$route.path !== '/') {
              // 跳到登出後的首頁
              this.$router.push('/')
            }
          } else {
            alert(data.message)
          }
        })
        .catch((error) => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })

      this.$store.commit('logout', this.user)
    }
  }
}
</script>
