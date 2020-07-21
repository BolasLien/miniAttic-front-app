<template>
  <div id="login">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="/login">會員登入</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <b-row class="justify-content-md-center">
        <b-col class="form" sm="12" lg="6" md="8">
          <p class="h4 text-center mb-4 mt-4">會員登入</p>
          <input type="email" class="form-control" placeholder="請輸入註冊信箱" />
          <br />
          <input type="password" class="form-control" placeholder="請輸入會員密碼" />
          <div class="text-center mt-4 mb-4">
            <button class="btn btn-indigo" type="submit">會員登入</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
