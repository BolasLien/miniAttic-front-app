<template>
  <div>
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="/Shop">各式甜點</router-link>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link :to="$route.params.id">{{ $route.params.id}}</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <b-row>
        <b-col md="6" sm="7">
          <img src="http://220.128.133.15/s1090109/1594090276038.jpg" />
        </b-col>
        <b-col md="6" sm="5">
          <h1 class="mt-3">{{$route.params.id}}這裡是商品名稱</h1>
          <h4>{{$route.params.id}} 這裡是副標</h4>
          <p>miniAttic是在「小閣樓」裡做甜點時誕生的品牌，透過手做的甜點傳達溫暖的祝福，希望每個品嘗過miniAttic甜點的人，能身處在一個悠閒的午後，窩在自己的秘密基地裡，一個人享受甜點的美好時光。</p>
          <div class="price"><small>NT$</small>480</div>
          <div>這裡要放數量的控制元件</div>
          <b-button>買買買</b-button>
        </b-col>
      </b-row>
    </b-container>
    <h1>{{ $route.params.id}}</h1>
  </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  name: 'About',
  data () {
    return {}
  },
  components: {
    // Breadcrumb
  }
}
</script>
