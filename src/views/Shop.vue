<template>
  <div id="shop" v-if="isLoading">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item>
          <router-link to="/"><b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon></router-link>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="Shop">各式甜點</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <div class="shop-box">
      <b-container>
        <b-row>
          <b-col md="2" class="hidden-md">
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
      nowTag: '0',
      isLoading: false
    }
  },
  components: {
    LinkItem
  },
  methods: {
    onTagClick (tag) {
      event.preventDefault()

      this.nowTag = tag.item
      this.head = tag.name
    }
  },
  computed: {
    products () {
      return this.webdata.products
    },
    categorys () {
      return this.webdata.categorys
    },
    showProducts () {
      return this.nowTag === '0' ? this.products : this.products.filter(item => item.class === this.nowTag)
    }
  },
  mounted () {
    if (this.webdata.products.length > 0) {
      this.isLoading = true
    }
  }
}
</script>
