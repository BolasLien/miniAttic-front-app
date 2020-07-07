<template>
  <div id="navbar">
    <!-- logo與登入登出 -->
    <b-container>
      <b-row class="align-items-center">
        <b-col class="links" cols="4">
          <a href="#">
            <font-awesome-icon :icon="['fab','instagram']" size="lg"></font-awesome-icon>
          </a>
          <span>&ensp;|&ensp;</span>
          <a href="#">聯絡我們</a>
        </b-col>
        <b-col class="logo" cols="4">
          <a href="#">
            <router-link to="/">
              <h1>小閣樓</h1>
              <h5>miniAttic</h5>
            </router-link>
          </a>
        </b-col>
        <b-col class="login" cols="4">
          <a href="#">
            註冊新會員
            <font-awesome-icon :icon="['fas','user']" size="lg"></font-awesome-icon>
          </a>
          <span>&ensp;|&ensp;</span>
          <a href="#">
            會員登入
            <font-awesome-icon :icon="['fas','sign-in-alt']" size="lg"></font-awesome-icon>
          </a>
          <span>&ensp;|&ensp;</span>
          <a href="#">
            <font-awesome-icon :icon="['fas','shopping-cart']" size="lg"></font-awesome-icon>
          </a>
        </b-col>
      </b-row>
    </b-container>
    <!-- Navigation -->
    <div>
      <b-navbar toggleable="lg">
        <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <router-link to="/About">關於我們</router-link>
            </b-nav-item>
            <!-- <b-nav-item href="#"><router-link to="Products">各式甜點</router-link></b-nav-item> -->

            <b-nav-item-dropdown text="各式甜點">
              <b-dropdown-item href="#"><router-link to="/Shop">布朗尼 BROWNIE</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link to="/Shop">餅乾 COOKIE</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link to="/Shop">下午茶 CAKE</router-link></b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">
              <router-link to="/News">最新消息</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/Faq">購買流程</router-link>
            </b-nav-item>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>-->

            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>-->

            <!-- <b-nav-item-dropdown right> -->
            <!-- Using 'button-content' slot -->
            <!-- <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>-->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
#navbar {
  margin: 0 auto;
  border: 0;
  padding: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 99;
  background: #faf9f9;
  transition: 0.3s linear box-shadow;
  box-shadow: 0 0 0em rgba(0, 0, 0, 0);
  border-bottom: 1px solid #eee;
}

a {
  color: #555b6e;
}

a:hover {
  text-decoration: none;
}
</style>
