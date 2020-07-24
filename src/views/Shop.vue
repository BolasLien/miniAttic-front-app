<template>
  <div id="shop" v-if="isLoading">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="Shop">各式甜點</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <div class="shop-box">
      <b-container>
        <b-row>
          <b-col sm="3" md="2" class="hidden-md">
            <ul>
              <li v-for="data in categorys" :key="data.item">
                <a href="#" @click="onTagClick(data)">{{data.name}}</a>
              </li>
            </ul>
          </b-col>
          <b-col sm="9" md="10">
            <h1 class="head">{{head}}</h1>
            <b-row class="ml-n1 mr-n1">
              <b-col lg="3" sm="6" v-for="data in showProducts" :key="data.item">
                <LinkItem
                  :to="'/products/' + data.item"
                  :src="data.src"
                  :text="data.name"
                ></LinkItem>
                <div class="price">
                  <small>NT$&ensp;</small>
                  {{data.price}}
                </div>
              </b-col>

            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import LinkItem from '@/components/LinkItem.vue'
export default {
  name: 'Shop',
  props: {
    webdata: Object
  },
  data () {
    return {
      head: '全部 ALL',
      showProducts: [],
      products: [],
      categorys: [],
      isLoading: false
    }
  },
  components: {
    LinkItem
  },
  methods: {
    onTagClick (data) {
      event.preventDefault()
      this.showProducts = []
      this.showProducts = data.item === '0' ? this.products : this.products.filter(item => item.class === data.item)
      this.head = data.name
    }
  },
  mounted () {
    if (this.webdata.products.length > 0) {
      this.products = this.webdata.products
      this.showProducts = this.webdata.products
      this.categorys = this.webdata.categorys
      this.isLoading = true
    }
  }
}
</script>
