<template>
  <div class="shop">
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

    <b-container>
      <b-row>
        <b-col sm="3" md="2">
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
            <b-col lg="4" md="4" xs="6">
              <LinkItem
                linkTo="/products/brownie"
                href="#"
                bgurl="http://220.128.133.15/s1090109/1594090276038.jpg"
                text="布朗尼 | 草莓"
              ></LinkItem>
              <div class="price">
                <small>NT$</small>
                480
                </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LinkItem from '@/components/LinkItem.vue'
export default {
  name: 'Shop',
  data () {
    return {}
  },
  components: {
    LinkItem
  }
}
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
}

li {
  padding-left: 0.5rem;
  text-align: left;
  text-indent: -1rem;
}

a {
  font-size: 14px;
}

.head {
  text-align: right;
  font-size: 1.2rem;
  background: #faf9f9;
  margin-bottom: 2rem;
  margin-top: -0.6rem;
  padding-bottom: .2rem;
}

.price{
  line-height: 1;
  font-weight: bold;
    text-decoration: none;
    color: #aa1c20;
    font-size: 1.2em;
    margin-bottom: 1.2rem;
    margin-top: .2rem;
}
</style>
