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
import { faShoppingCart, faUser, faSignInAlt, faPlus, faMinus, faSignOutAlt, faListAlt, faTruck, faReceipt, faThumbsUp, faCheck } from '@fortawesome/free-solid-svg-icons'

// vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// vue gtag
import VueGtag from 'vue-gtag'

// vue form wizard
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

// vue SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(faInstagram, faShoppingCart, faUser, faSignInAlt, faPlus, faMinus, faFacebookSquare, faSignOutAlt, faListAlt, faTruck, faReceipt, faThumbsUp, faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

if (Vue.config.productionTip) {
  Vue.use(VueGtag, {
    config: { id: 'G-NXGJ8V0XNM' }
  })
}
Vue.use(VueFormWizard)

const options = {
  confirmButtonColor: '#555b6e'
}
Vue.use(VueSweetalert2, options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
