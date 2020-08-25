import Vue from 'vue'
// vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import alert from '@/api/alert.js'

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

export default {
  install (Vue, options) {
    Vue.prototype.$axios = {
      login: (account, password) => userLogin(account, password)
    }
  }
}

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  console.log(error)
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  const { response } = error
  if (response) {
    errorHandle(response.status, response.data.message)
    return Promise.reject(error)
  } else {
    return Promise.reject(error)
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // return Promise.reject(error)
})

const userLogin = (account, password) => {
  return axios.post(
    process.env.VUE_APP_API + '/login',
    { account, password })
}

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
