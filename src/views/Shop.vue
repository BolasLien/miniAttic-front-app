<template>
  <div id="shop">
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
          <b-col sm="3" md="2" class="hidden-xs">
            <ul>
              <li>
                <a href="#">布朗尼 BROWNIE</a>
              </li>
              <li>
                <a href="#">餅乾 COOKIE</a>
              </li>
              <li>
                <a href="#">蛋糕 CAKE</a>
              </li>
            </ul>
          </b-col>
          <b-col sm="9" md="10">
            <h1 class="head">各式甜點</h1>
            <b-row class="ml-n1 mr-n1">
              <b-col lg="3" sm="6" v-for="(data,index) in products" :key="index">
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
    products: Array
  },
  components: {
    LinkItem
  }
}
</script>
