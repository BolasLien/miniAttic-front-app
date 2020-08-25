<template>
  <div id="reg" class="container">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item>
          <router-link to="/"><b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon></router-link>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="/reg">新會員註冊</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <b-row class="justify-content-md-center">
        <b-col class="form" sm="12" lg="6" md="8">
          <p class="h4 text-center mb-4 mt-4">新會員註冊</p>
          <b-form @submit="submit">
            <!-- 姓名 -->
            <b-form-group class="text-left" invalid-feedback="最少2個字 或 最多20個字">
              <b-form-input
                id="input-name"
                v-model="name"
                :state="state('name')"
                type="text"
                placeholder="請輸入姓名"
              ></b-form-input>
            </b-form-group>
            <!-- 電話 -->
            <b-form-group class="text-left" invalid-feedback="最多10個字">
              <b-form-input
                id="input-phone"
                v-model="phone"
                :state="state('phone')"
                type="text"
                placeholder="請輸入電話"
              ></b-form-input>
            </b-form-group>
            <!-- 信箱 -->
            <b-form-group class="text-left" invalid-feedback="格式不符">
              <b-form-input
                id="input-account"
                v-model="account"
                :state="state('account')"
                type="email"
                placeholder="請輸入信箱"
              ></b-form-input>
            </b-form-group>
            <!-- 密碼 -->
            <b-form-group class="text-left" invalid-feedback="至少8個字">
              <b-form-input
                id="input-password"
                v-model="password"
                :state="state('password')"
                type="password"
                placeholder="請輸入密碼"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit">會員註冊</b-button>
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
      name: '',
      phone: '',
      account: '',
      password: ''
    }
  },
  methods: {
    state (type) {
      if (type === 'name') {
        return !(this.name.length < 2 || this.name.length > 20)
      } else if (type === 'phone') {
        return !(this.phone.length < 9 || this.phone.length > 10)
      } else if (type === 'account') {
        return this.account.includes('@')
      } else if (type === 'password') {
        return !(this.password.length < 8)
      }
    },
    submit (event) {
      event.preventDefault()

      if (this.name.length < 2 || this.name.length > 20) {
        this.$alert.warning('名字格式不符')
        return
      } else if (this.phone.length < 9 || this.phone.length > 10) {
        this.$alert.warning('電話格式不符')
        return
      } else if (!this.account.includes('@')) {
        this.$alert.warning('信箱格式不符')
        return
      } else if (this.password.length < 8) {
        this.$alert.warning('密碼格式不符')
        return
      }

      this.axios
        .post(process.env.VUE_APP_API + '/users', {
          name: this.name,
          phone: this.phone,
          account: this.account,
          password: this.password
        })
        .then(response => {
          if (response.data.success) {
            this.$alert.success(response.data.message).then(() => {
              this.$router.push('login')
            })
          }
        })
        .catch(error => {
          if (error.response.data) {
            this.$alert.error(error.response.data.message)
          }
          console.log(error)
        })
    }
  }
}
</script>
