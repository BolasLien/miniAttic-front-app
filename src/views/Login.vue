<template>
  <div id="login">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item>
          <router-link to="/"><b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon></router-link>
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
            <b-form @submit="submit">
            <!-- 信箱 -->
            <b-form-group class="text-left">
              <b-form-input
                id="input-account"
                v-model="account"
                type="email"
                placeholder="請輸入信箱"
              ></b-form-input>
            </b-form-group>
            <!-- 密碼 -->
            <b-form-group class="text-left">
              <b-form-input
                id="input-password"
                v-model="password"
                type="password"
                placeholder="請輸入密碼"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit">會員登入</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()

      if (this.account.length === 0) {
        this.$alert.warning('請輸入帳號')
        return
      } else if (this.password.length === 0) {
        this.$alert.warning('請輸入密碼')
        return
      }

      this.$axios.login(this.account, this.password)
        .then(response => {
          const data = response.data
          if (response.data.success) {
          // // 如果回來的資料 success 是 true
            this.$alert.success('登入成功').then(() => {
            // 呼叫 vuex 的登入
              this.$store.commit('login', data)
              // 跳到登入後的首頁
              this.$router.push('/')
            })
          } else {
          // 不是就顯示回來的 message
            this.$alert.error(data.message)
          }
        })
      // .catch(error => {
      //   // 如果回來的狀態不是 200，顯示回來的 message
      //   if (error.response.data) {
      //     this.$alert.error(error.response.data.message)
      //   } else {
      //     console.log(error)
      //   }
      // })
    }
  }
}
</script>
