<template>
  <div id="order">
    <b-container v-if="orders.length > 0">
      <b-row class="head">
        <b-col md="12">{{ user }}您好，以下是您的訂單</b-col>
      </b-row>

      <b-row class="item" v-for="data in orders" :key="data.item">
        <b-col md="2" cols="6" order-md="1" order="1">
          訂單編號
          <br />
          {{data.item}}
        </b-col>
        <b-col md="6" cols="12" order-md="5" order="3">
          <hr class="border">
                      <b-row class="detail product" v-for="data in data.products" :key="data.item">
              <b-col md="4" cols="6">
                <b-img center width="100" :src="data.src"></b-img>
              </b-col>
              <b-col md="8" cols="6">
                <b-row class="detail no-gutters">
                  <b-col md="4" cols="12">{{data.name}}</b-col>
                  <b-col md="3" cols="12">x{{data.amount}}</b-col>
                  <b-col md="4" cols="12">
                    <small>NT$&ensp;</small>
                    {{data.price * data.amount}}
                  </b-col>
                  <b-col md="1"></b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr class="border">
          <!-- <b-row class="product" v-for="product in data.products" :key="product.item">
            <b-col md="3">
              <b-img center width="60" :src="product.src"></b-img>
            </b-col>
            <b-col md="3">{{product.name}}</b-col>
            <b-col md="2">x{{product.amount}}</b-col>
            <b-col md="3">
              <small>NT$&ensp;</small>
              {{product.price * product.amount}}
            </b-col>
            <b-col md="1"></b-col>
          </b-row> -->
        </b-col>
        <b-col md="2" cols="6" order-md="5" order="4">{{data.remark}}</b-col>
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
  data () {
    return {
      orders: [],
      status: ['訂單成立，尚未付款', '訂單已付款，待出貨', '出貨中', '已送達']
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/orders')
      .then((response) => {
        if (response.data.datas.length > 0) {
          this.orders = response.data.datas
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
