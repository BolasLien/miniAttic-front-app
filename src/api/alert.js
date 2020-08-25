import Vue from 'vue'
// vue SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

const options = {
  confirmButtonColor: '#555b6e'
}
Vue.use(VueSweetalert2, options)

const error = (msg) => {
  return Vue.swal({
    title: '訊息',
    text: msg,
    icon: 'error',
    timer: 2000,
    timerProgressBar: true
  })
}

const warning = (msg) => {
  return Vue.swal({
    title: '訊息',
    text: msg,
    icon: 'warning',
    timer: 2000,
    timerProgressBar: true
  })
}

const success = (msg) => {
  return Vue.swal({
    title: '訊息',
    text: msg,
    icon: 'success',
    timer: 2000,
    timerProgressBar: true
  })
}

const TotasTopEnd = (title, text, img) => {
  return Vue.swal({
    toast: true,
    position: 'top-end',
    title: title,
    text: text,
    imageUrl: img,
    imageWidth: 100,
    timer: 1500,
    showConfirmButton: false
  })
}

export default {

  error: (msg) => error(msg),
  warning: (msg) => warning(msg),
  success: (msg) => success(msg),
  totasTopEnd: (title, text, img) => TotasTopEnd(title, text, img),
  install (Vue, options) {
    Vue.prototype.$alert = {
      error: (msg) => error(msg),
      warning: (msg) => warning(msg),
      success: (msg) => success(msg),
      totasTopEnd: (title, text, img) => TotasTopEnd(title, text, img)
    }
  }
}
