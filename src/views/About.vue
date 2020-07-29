<template>
  <div id="about">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="About">關於我們</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <!-- <b-container v-html="about"> -->
    <b-container>
      <b-row class="about-item" v-for="(post,index) in posts" :key="index">
        <b-col md="5" sm="12" :order-md="index %2 === 0 ? 2:1" order-sm="1">
          <img :src="post.img" />
        </b-col>
        <b-col md="5" sm="12" :order-md="index %2 === 0 ? 1:2" order-sm="2">
          <h4 class="mt-3">{{post.title}}</h4>
          <p>{{post.article}}</p>
        </b-col>
      </b-row>
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
      posts: [
        {
          img: 'http://220.128.133.15/s1090109/miniattic/assets/img/about/1.jpg',
          title: '小閣樓的開始',
          article: 'miniAttic是在「小閣樓」裡做甜點時誕生的品牌，透過手做的甜點傳達溫暖的祝福，希望每個品嘗過miniAttic甜點的人，能身處在一個悠閒的午後，窩在自己的秘密基地裡，一個人享受甜點的美好時光。'
        },
        {
          img: 'http://220.128.133.15/s1090109/miniattic/assets/img/about/2.jpg',
          title: '小閣樓的堅持',
          article: '小閣樓重複嘗試過各式各樣的材料，以最單純的原料，最平衡的味道，才能誕生的每一份祝福。'
        },
        {
          img: 'http://220.128.133.15/s1090109/miniattic/assets/img/about/3.jpg',
          title: '小閣樓的成長',
          article: '感謝每個支持過「小閣樓」的人們，因為有你們對小閣樓的信任，小閣樓才能越來越茁壯。'
        }
      ]
    }
  },
  methods: {
    // order(index){
    //   return
    // }
  }
}
</script>
