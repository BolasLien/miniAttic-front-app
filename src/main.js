import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// style.scss
import './style/style.scss'

// vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faUser, faSignInAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

// vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// vue gtag
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(faInstagram, faShoppingCart, faUser, faSignInAlt, faPlus, faMinus, faFacebookSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

Vue.use(VueGtag, {
  config: { id: 'G-NXGJ8V0XNM' }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
