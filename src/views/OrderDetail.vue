<template>
  <div id="order-detail" v-if="isLoading">
    <b-container>
      <p class="mt-4 mb-n2">您的訂單編號為：{{data.item}}</p>

      <b-row class="head">
        <b-col md="12">購物明細</b-col>
      </b-row>

      <b-row class="item" v-for="data in data.products" :key="data.item">
        <b-col md="4" cols="6">
          <b-img center width="80" :src="data.src"></b-img>
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

      <b-row class="item">
        <b-col md="4" cols="6">
          <b-img center width="80" :src="require('../assets/logo.png')"></b-img>
        </b-col>
        <b-col md="8" cols="6">
          <b-row class="detail no-gutters">
            <b-col md="4" cols="12">{{data.payment.name}}</b-col>
            <b-col md="3" cols="12">{{data.payment.description}}</b-col>
            <b-col md="4" cols="12">
              <small>NT$&ensp;</small>
              {{data.payment.price}}
            </b-col>
            <b-col md="1"></b-col>
          </b-row>
        </b-col>
      </b-row>

            <b-row class="item">
        <b-col md="4" cols="6">訂單備註</b-col>
        <b-col md="8" cols="6">
          {{data.remark}}
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="justify-content-end mt-2 cart-footer">
        <b-col md="2" cols="12" class="text-center mb-4">共&ensp;{{ totalAmount }}&ensp;件商品</b-col>
        <b-col md="2" cols="6" class="text-right">商品金額</b-col>
        <b-col md="2" cols="6" class="text-left">
          <small>NT$&ensp;</small>
          {{ totalPrice }}
        </b-col>
      </b-row>
      <b-row class="justify-content-end mt-1 cart-footer">
        <b-col md="2" cols="6" class="text-right">運費</b-col>
        <b-col md="2" cols="6" class="text-left">
          <small>NT$&ensp;</small>
          {{ data.payment.price }}
        </b-col>
      </b-row>
      <b-row class="justify-content-end mt-4 mb-4 cart-footer">
        <b-col md="2" cols="6" class="text-right payable">應付金額</b-col>
        <b-col
          md="2"
          cols="6"
          class="text-left payable"
        >NT$&ensp; {{ totalPrice+data.payment.price }}</b-col>
      </b-row>

          <button class="btn" @click="$router.go(-1)">返回上一頁</button>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {},
      isLoading: false
    }
  },
  computed: {
    totalPrice () {
      let count = 0
      for (const data of this.data.products) {
        count += data.price * data.amount
      }
      return count
    },
    totalAmount () {
      return this.data.products
        .map((e) => e.amount)
        .reduce(function (prev, e) {
          return prev + e
        })
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/orderDetail/' + this.$route.params.id)
      .then((response) => {
        if (response.data.datas.length > 0) {
          this.data = response.data.datas[0]
          this.data.products.map(e => { e.src = process.env.VUE_APP_API + '/image/' + e.src })
          this.isLoading = true
        }
      })
      .catch((error) => {
        console.log(error)
      })
    if (this.data === undefined) {
      this.$router.push('/NotFound')
    }
  }
}
</script>
