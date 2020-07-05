<template>
  <div id="navbar">
    <!-- logo與登入登出 -->
    <b-container fluid class="bg-dark">
      <b-row class="justify-content-center align-items-center">
        <b-col class="links" cols="2">
          <a href="#" class="ig">
            ig
          </a>
          <a href="#" class="contact">
            聯絡我們
          </a>
        </b-col>
        <b-col class="logo" cols="8">
          <a href="#"><img width="100" src="../assets/logo.png" alt=""></a>
        </b-col>
        <b-col class="login" cols="2">
          <a href="#"></a>
        </b-col>
      </b-row>
    </b-container>
    <!-- Navigation -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background: #ffffff;
  transition: 0.3s linear box-shadow;
  box-shadow: 0 0 0em rgba(0, 0, 0, 0);
  border-bottom: 1px solid #eee;
  color: darkred;
}
</style>
