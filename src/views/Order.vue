<template>
  <div id="order">
    <b-container v-if="orders.length > 0">
      <div class="mt-2">
                {{ user }}您好，以下是您的訂單
      </div>
      <b-row class="head hidden-md">
        <b-col md="3">訂單編號</b-col>
        <b-col md="2">訂購日期</b-col>
        <b-col md="2">付款方式</b-col>
        <b-col md="2">訂單金額</b-col>
        <b-col md="2">訂單進度</b-col>
      </b-row>

      <b-row class="item" v-for="data in orders" :key="data.item">
        <b-col md="3" cols="6" order-md="1" order="1">
          <router-link :to="'/order/' + data.item">
          <font-awesome-icon :icon="['fas','list-alt']" size="lg"></font-awesome-icon>
          {{data.item}}
          </router-link>
        </b-col>
        <b-col md="2" cols="6" class="hidden-md" order-md="2" order="2">{{getDate(data.item)}}</b-col>
        <b-col md="6" cols="12" order-md="5" order="3" class="bv-d-xl-down-none">
          <hr class="border" />
          <router-link :to="'/order/' + data.item">
            <b-row class="detail product">
              <b-col md="4" cols="6">
                <b-img center width="100" :src="data.products[0].src"></b-img>
              </b-col>
              <b-col md="8" cols="6">
                <span class="bv-d-xl-down-none">共 {{totalAmount(data)}} 項商品</span>
              </b-col>
            </b-row>
          </router-link>
          <hr class="border" />
        </b-col>
        <b-col md="2" cols="6" order-md="5" order="4">{{data.payment.name}}</b-col>
        <b-col md="2" cols="6" order-md="5" order="4">
          <span class="bv-d-xl-down-none">訂單金額</span>
          <small>NT$&ensp;</small>
          {{totalPrice(data)}}
        </b-col>
        <b-col md="2" cols="6" order-md="5" order="2">{{status[data.status]}}</b-col>
      </b-row>
    </b-container>
    <b-container v-else>
      <p>
        你尚未有任何訂單喔
        <br />
      </p>
      <h1>
        <router-link to="/shop">可以從這裡去看看喔！</router-link>
      </h1>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    webdata: Object
  },
  data () {
    return {
      orders: [],
      status: ['尚未付款', '待出貨', '出貨中', '已送達']
    }
  },
  methods: {
    getDate (dt) {
      const date = new Date(parseInt(dt))
      return date.toLocaleDateString()
    },
    totalPrice (d) {
      let count = 0
      for (const data of d.products) {
        count += data.price * data.amount
      }
      return count + d.payment.price
    },
    totalAmount (d) {
      return d.products
        .map((e) => e.amount)
        .reduce(function (prev, e) {
          return prev + e
        })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    token () {
      return this.$store.getters.token
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/orders',
        { headers: { Authorization: `Bearer ${this.token}` } })
      .then((response) => {
        if (response.data.datas.length > 0) {
          this.orders = response.data.datas
          for (const order of this.orders) {
            for (const product of order.products) {
              product.src = process.env.VUE_APP_API + '/image/' + product.src
            }
          }
        }
      })
      .catch((error) => {
        if (error.response.data.message.includes('登入過期') || error.response.data.message.includes('Token異常')) {
          this.$swal({
            title: '訊息',
            text: '請重新登入',
            icon: 'error'
          }).then(() => {
            // 前端登出
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登出後的首頁
            this.$router.push('/login')
          })
        } else {
          console.log(error)
        }
      })
  }
}
</script>
