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
          <router-link to="/reg">
            <font-awesome-icon :icon="['fas','user']" size="lg"></font-awesome-icon>
            <span class="hidden-xs">註冊</span>
          </router-link>
          <span>&ensp;|&ensp;</span>
          <router-link to="/login">
            <font-awesome-icon :icon="['fas','sign-in-alt']" size="lg"></font-awesome-icon>
            <span class="hidden-xs">登入</span>
          </router-link>
          <span>&ensp;|&ensp;</span>
          <router-link to="/cart">
            <font-awesome-icon :icon="['fas','shopping-cart']" size="lg"></font-awesome-icon>
            <span class="hidden-xs" v-if="cartNum<=0">購物車</span>
            <span class="hidden-xs" v-else>共 {{cartNum}} 件商品</span>
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
    }
  }
}
</script>
