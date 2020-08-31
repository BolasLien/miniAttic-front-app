import Vue from 'vue'
// vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import alert from '@/api/alert.js'
import router from '../router'
import store from '../store'

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

export default {
  install (Vue, options) {
    Vue.prototype.$axios = {
      login: (account, password) => login(account, password),
      logout: () => logout(),
      reg: (name, phone, account, password) => reg(name, phone, account, password),
      getOrders: () => getOrders()
    }
  }
}

// Api
const login = (account, password) => {
  return axios.post(process.env.VUE_APP_API + '/login', { account, password })
    .then(response => {
      if (response.data.success) {
      // 如果回來的資料 success 是 true
        alert.success('登入成功').then(() => {
        // 呼叫 vuex 的登入
          store.commit('login', response.data)
          // 跳到首頁
          if (router.currentRoute.path !== '/') { router.replace('/') }
        })
      }
    })
}

const logout = () => {
  return axios.delete(process.env.VUE_APP_API + '/login')
    .then((response) => {
      alert.success(response.data.message)
        .then(() => {
        // 呼叫 vuex 的登出
          store.commit('logout')
          // 跳到首頁
          if (router.currentRoute.path !== '/') { router.replace('/') }
        })
    })
}

const reg = (name, phone, account, password) => {
  return axios.post(
    process.env.VUE_APP_API + '/users',
    { name, phone, account, password })
    .then(response => {
      if (response.data.success) {
        alert.success(response.data.message).then(() => {
          router.push('login')
        })
      }
    })
}

const getOrders = () => {
  return axios.get(process.env.VUE_APP_API + '/orders',
    { headers: { Authorization: `Bearer ${store.getters.token}` } })
    .catch((error) => {
      if (error.response.status) {
        alert.error('請重新登入').then(() => {
          // 前端登出
          store.commit('logout')
          router.push('/login')
        })
      }
    })
}

// request攔截器
axios.interceptors.request.use(function (config) {
  // 發請求出去之前會觸發這個函式
  return config
}, function (error) {
  console.log(error)
  // 發請求出去有異常時會觸發這個函式
  return Promise.reject(error)
})

// response攔截器
axios.interceptors.response.use(function (response) {
  // 回來的狀態碼是2XX會觸發這個函式
  return response
}, function (error) {
  const { response } = error
  if (response) {
    errorHandle(response.status, response.data.message)
    return Promise.reject(error)
  } else {
    alert.error('請檢查網路連線')
    return Promise.reject(error)
  }
  // 回來的狀態碼超出2XX會觸發這個函式
  // return Promise.reject(error)
})

// catch到錯誤的時候會進來這
const errorHandle = (status, msg) => {
  switch (status) {
    case 400:
      alert.error(msg)
      break

    case 401:
      alert.error(msg)
      break

    case 403:
      alert.error(msg)
      break

    case 404:
      alert.error(msg)
      break

    default:
      console.log('額外的錯誤' + msg)
  }
}
