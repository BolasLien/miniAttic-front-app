import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    cart: {
      products: [],
      productCount: 0,
      totalPrice: 0,
      totalAmount: 0
    },
    user: ''
  },
  mutations: {
    addProduct (state, data) {
      const products = state.cart.products
      let productCount = state.cart.productCount
      let totalPrice = 0
      let totalAmount = 0

      const product = products.find(e => e.item === data.item)
      if (product) {
        // 如果購物車有這個商品，數量++
        product.amount += data.amount
      } else {
        // 如果購物車沒有這個商品，就放進商品清單，並且商品種類++
        products.push(data)
        productCount++
      }

      // 計算 商品金額 跟 商品數量
      for (const e of products) {
        totalPrice += e.amount * e.price
        totalAmount += e.amount
      }

      state.cart = {
        products,
        productCount,
        totalPrice,
        totalAmount
      }
    },
    removeProduct (state, data) {
      const products = state.cart.products
      let productCount = state.cart.productCount
      let totalPrice = 0
      let totalAmount = 0

      const product = products.find(e => e.item === data.item)
      if (product) {
        // 如果購物車有這個商品，就把它移除，並且商品種類等於現在的清單長度
        products.splice(products.indexOf(product), 1)
        productCount = products.length
      } else {
        // 如果購物車沒有這個商品，跳出錯誤
        this.$swal({
          title: '要移除的商品不存在',
          icon: 'error'
        })
        return
      }

      // 計算 商品金額 跟 商品數量
      for (const e of products) {
        totalPrice += e.amount * e.price
        totalAmount += e.amount
      }

      state.cart = {
        products,
        productCount,
        totalPrice,
        totalAmount
      }
    },
    updateProduct (state, data) {
      const products = state.cart.products
      let productCount = state.cart.productCount
      let totalPrice = 0
      let totalAmount = 0

      const product = products.find(e => e.item === data.item)
      if (product.amount > 0) {
        // 如果購物車的這個商品數量大於零，就把資料更新
        product.amount = data.amount
        productCount = products.length
      } else {
        // 如果購物車的這個商品數量不大於零，就把這個資料從購物車移除
        this.commit('removeProduct', data)
        return
      }

      // 計算 商品金額 跟 商品數量
      for (const e of products) {
        totalPrice += e.amount * e.price
        totalAmount += e.amount
      }

      state.cart = {
        products,
        productCount,
        totalPrice,
        totalAmount
      }
    },
    clearCart (state) {
      state.cart = {
        products: [],
        productCount: 0,
        totalPrice: 0,
        totalAmount: 0
      }
    },
    login (state, data) {
      state.user = data
    },
    logout (state) {
      state.user = ''
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    cart (state) {
      return state.cart
    },
    user (state) {
      return state.user
    }
  }
})
