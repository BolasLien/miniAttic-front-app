<template>
  <div id="cart">
    <!-- 如果購物車有商品 -->
    <b-container class="shopping-step mt-4 mb-5" v-if="shoppigList.length>0">
      <form-wizard title subtitle @on-complete="submit" color="#555b6e" class="p-n5">
        <tab-content :title="steps[0]">
          <b-container class="cart">
            <b-row class="head">
              <b-col md="12">以下是您選購的商品</b-col>
            </b-row>
            <b-row class="item" v-for="data in shoppigList" :key="data.item">
              <b-col md="4" cols="5">
                <b-img center width="120" :src="data.src"></b-img>
              </b-col>
              <b-col md="8" cols="7">
                <b-row class="detail no-gutters">
                  <b-col md="4" cols="11" order-md="2" order="1" class="text-left">{{data.name}}</b-col>
                  <b-col md="3" cols="12" order-md="3" order="4">
                    <quantity v-model="data.amount" @update="update(data)"></quantity>
                  </b-col>
                  <b-col class="pt-2 pb-2" md="4" cols="12" order-md="4" order="3">
                    <small>NT$&ensp;</small>
                    {{data.price * data.amount}}
                  </b-col>
                  <b-col md="1" cols="1" order-md="5" order="2">
                    <button class="btn btn-remove" @click="remove(data)">X</button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </tab-content>
        <tab-content :title="steps[1]">
          <b-container class="payment">
            <b-row class="head">
              <b-col md="12">請選擇您的付款方式</b-col>
            </b-row>

            <b-row class="item" v-for="data in payments" :key="data.item">
              <b-col md="3" cols="5">
                <label :for="data.item"><b-img :src="require('../assets/logo.png')" center width="120"></b-img></label>
                <input
                  type="radio"
                  name="payment"
                  @input="paymentSelect(data)"
                  :checked="data.selected"
                  :id="data.item"
                />
              </b-col>
              <b-col md="9" cols="7">
                <label :for="data.item">
                  <b-row class="detail">
                    <b-col md="4">{{data.name}}</b-col>
                    <b-col md="4">{{data.description}}</b-col>
                    <b-col md="3">
                      <small>+NT$&ensp;</small>
                      {{data.price}}
                    </b-col>
                  </b-row>
                </label>
              </b-col>
            </b-row>
          </b-container>
        </tab-content>
        <tab-content :title="steps[2]">
          <b-container class="order">
            <b-row class="head">
              <b-col md="12">請確認您的訂單</b-col>
            </b-row>
            <b-row class="item" v-for="data in shoppigList" :key="data.item">
              <b-col md="4" cols="5">
                <b-img center width="80" :src="data.src"></b-img>
              </b-col>
              <b-col md="8" cols="7">
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
              <b-col md="4" cols="5">
                <b-img center width="80" :src="require('../assets/logo.png')"></b-img>
              </b-col>
              <b-col md="8" cols="7">
                <b-row class="detail no-gutters">
                  <b-col md="4" cols="12">{{payment.name}}</b-col>
                  <b-col md="3" cols="12">{{payment.description}}</b-col>
                  <b-col md="4" cols="12">
                    <small>NT$&ensp;</small>
                    {{payment.price}}
                  </b-col>
                  <b-col md="1"></b-col>
                </b-row>
              </b-col>
            </b-row>
            <!-- 輸入備註 -->
            <b-row class="item">
              <b-col md="5">有甚麼想告訴我們的嗎?</b-col>
              <b-col md="7">
                <b-form-textarea
                  id="textarea"
                  v-model="remark"
                  placeholder="可以在這裡告訴我們..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-col>
            </b-row>
          </b-container>
        </tab-content>
        <b-container>
          <b-row class="justify-content-end mt-4 cart-footer">
            <b-col md="2" cols="12" class="text-center mb-4">共&ensp;{{ totalAmount}}&ensp;件商品</b-col>
            <b-col md="2" cols="6" class="text-right">商品金額</b-col>
            <b-col md="2" cols="6" class="text-left">
              <small>NT$&ensp;</small>
              {{ totalPrice }}
            </b-col>
          </b-row>
          <b-row class="justify-content-end mt-4 cart-footer">
            <b-col md="2" cols="6" class="text-right">運費</b-col>
            <b-col md="2" cols="6" class="text-left">
              <small>NT$&ensp;</small>
              {{ payment.price }}
            </b-col>
          </b-row>
          <b-row class="justify-content-end mt-4 mb-4 cart-footer">
            <b-col md="2" cols="6" class="text-right payable">應付金額</b-col>
            <b-col
              md="2"
              cols="6"
              class="text-left payable"
            >NT$&ensp; {{ totalPrice+payment.price }}</b-col>
          </b-row>
        </b-container>

        <template slot="footer" slot-scope="props">
          <div class="wizard-footer-left">
            <wizard-button
              v-if="props.activeTabIndex > 0"
              @click.native="props.prevTab()"
              :style="props.fillButtonStyle"
            >返回</wizard-button>
          </div>
          <div class="wizard-footer-right">
            <wizard-button
              v-if="!props.isLastStep"
              @click.native="props.nextTab()"
              class="wizard-footer-right"
              :style="props.fillButtonStyle"
            >下一步</wizard-button>

            <wizard-button
              v-else
              @click.native="submit"
              class="wizard-footer-right finish-button"
              :style="props.fillButtonStyle"
            >{{props.isLastStep ? '送出' : '下一步'}}</wizard-button>
          </div>
        </template>
      </form-wizard>
    </b-container>
    <!-- 如果購物車沒有商品 -->
    <b-container v-else>
      <p>
        你的購物車沒有商品喔
        <br />
      </p>
      <h1>
        <router-link to="/shop">可以從這裡去看看喔！</router-link>
      </h1>
    </b-container>
  </div>
</template>

<script>
import Quantity from '../components/Quantity'
export default {
  props: {
    webdata: Object
  },
  components: {
    quantity: Quantity
  },
  data () {
    return {
      steps: ['確認商品', '選擇付款與運送方式', '送出訂單'],
      payment: {
        item: 1,
        name: '面交付款',
        price: 0
      },
      paymentPrice: 0,
      remark: ''
    }
  },
  methods: {
    update (data) {
      this.$store.commit('updateProduct', data)
    },
    remove (data) {
      this.$store.commit('removeProduct', data)
    },
    submit () {
      if (this.user.length === 0 || this.user === undefined) {
        this.$alert.warning('尚未登入喔').then(() => {
          this.$router.push('/login')
        })
        return
      }

      this.$axios.postOrders(this.order.products, this.order.payment, this.order.remark)
    },
    paymentSelect (data) {
      this.payment = data
    }
  },
  computed: {
    payments () {
      return this.webdata.payments
    },
    user () {
      return this.$store.getters.user
    },
    token () {
      return this.$store.getters.token
    },
    shoppigList () {
      return this.$store.getters.cart.products
    },
    totalAmount () {
      return this.shoppigList
        .map((e) => e.amount)
        .reduce(function (prev, e) {
          return prev + e
        })
    },
    totalPrice () {
      let count = 0
      for (const data of this.shoppigList) {
        count += data.price * data.amount
      }
      return count + this.paymentPrice
    },
    order () {
      const products = []
      for (const e of this.shoppigList) {
        products.push({
          item: e.item,
          name: e.name,
          amount: e.amount
        })
      }

      return { products: products, payment: this.payment, remark: this.remark }
    }
  }
}
</script>
