<template>
  <div id="products">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item>
          <router-link to="/"><b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon></router-link>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="/Shop">各式甜點</router-link>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link :to="$route.params.id">{{ data.name }}</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <!-- 商品預覽 -->
    <b-container>
      <b-row>
        <b-col md="6" sm="7" class="item-image">
          <img :src="data.src" />
        </b-col>
        <b-col md="6" sm="5" class="item-description">
          <h3 class="mt-3">{{data.name}}</h3>
          <h4>{{data.subheading}}</h4>
          <p>{{data.intro}}</p>
          <div class="price">
            <small>NT$&ensp;</small>{{data.price}}
          </div>
          <!-- 這裡要放數量的控制元件 -->
          <Quantity v-model="quantity"></Quantity>
          <button class="btn btn-buy" @click="addProduct(data)">加到購物車</button>
        </b-col>
      </b-row>
    </b-container>

    <!-- 商品詳細區塊 -->
    <b-container class="mt-5 mb-5">
      <b-tabs content-class="mt-3" justified>
        <b-tab title="商品介紹" active>
          {{data.description}}
          <!-- <img src="https://picsum.photos/1280/450/?random=1" />
          <p>這裡是內容介紹區塊，要找透過後臺可以編輯標籤的工具</p>
          <h4>【精緻-草莓優格巧克力布朗尼】</h4>
          <p>
            使用特製-加重濃布朗尼為基底
            淋上酸甜滋味的草莓巧克力與優格巧克力
            藝術般的交融形式，中間再放置草莓乾點綴精緻感
          </p>
          <h5>成分：草莓巧克力、優格巧克力、比利時巧克力、可可粉、蛋、奶油、糖、麵粉</h5> -->
        </b-tab>

        <b-tab title="付款及運送方式">
          <p>付 款 方 式｜超商代碼繳費、信用卡付款、貨到付款</p>
          <hr>
          <p>運 送 方 式｜超商（7-11、全家）／宅配（黑貓）</p>
          <hr>
          <p>免 運 說 明｜台灣本島地區滿1000元免運費</p>
          <hr>
          <p>出 貨 說 明｜商品將於完成付款後三個工作日內出貨</p>
        </b-tab>

        <b-tab title="注意事項">
          <p>付 款 方 式｜超商代碼繳費、信用卡付款、貨到付款</p>
          <hr>
          <p>運 送 方 式｜超商（7-11、全家）／宅配（黑貓）</p>
          <hr>
          <p>免 運 說 明｜台灣本島地區滿1000元免運費</p>
          <hr>
          <p>出 貨 說 明｜商品將於完成付款後三個工作日內出貨</p>
        </b-tab>
      </b-tabs>
      <hr>
    </b-container>

    <!-- 你可能也會喜歡 -->
    <b-container class="mb-5">
      <Heading title="你可能也會喜歡" subtitle="YOU MAY ALSO LIKE"></Heading>
      <b-row>
        <b-col md="3" sm="6" v-for="data in products" :key="data.item">
          <LinkItem
            :to="'/products/' + data.item"
            :src="data.src"
            :text="data.name"
          ></LinkItem>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import LinkItem from '@/components/LinkItem.vue'
import Quantity from '@/components/Quantity.vue'
export default {
  props: {
    webdata: Object
  },
  name: 'Products',
  data () {
    return {
      quantity: 1
    }
  },
  components: {
    Heading,
    LinkItem,
    Quantity
  },
  methods: {
    addProduct (data) {
      const product = {
        item: data.item,
        name: data.name,
        src: data.src,
        price: data.price,
        amount: this.quantity
      }

      this.$alert.totasTopEnd(data.name + ' x ' + this.quantity, '已加入購物車', data.src)
      this.$store.commit('addProduct', product)
    }
  },
  computed: {
    products () {
      const temp = []
      for (let i = 0; i < 4; i++) {
        const r = Math.floor(Math.random() * this.webdata.products.length)
        if (temp.indexOf(this.webdata.products[r]) !== -1) {
          i--
        } else {
          temp.push(this.webdata.products[r])
        }
      }

      return temp
    },
    data () {
      return this.webdata.products.find(e => e.item === this.$route.params.id)
    }
  },
  mounted () {
    if (this.data === undefined) {
      this.$router.push('/NotFound')
    }
  }
}
</script>
