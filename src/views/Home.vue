<template>
  <div id="home" v-if="isLoading">
    <!-- 輪播圖 -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="400"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
      v-for="(item,index) in carousels"
      :key="index"
      :img-src="item.src"
      >
      </b-carousel-slide>
    </b-carousel>

    <!-- 最新消息 -->
    <b-container>
      <Heading :title="introTitle.description1" :subtitle="introTitle.description2"></Heading>
      <b-row>
        <b-col v-for="(item, index) in intros" :key="index" :md="12/intros.length" sm="12" class="mt-3 mb-3" >
          <BannerBox
            :to="item.link"
            :src="item.src"
            :text="item.description1"
            ></BannerBox>
        </b-col>
      </b-row>
    </b-container>

    <!-- 商品 -->
    <b-container class="mt-3 mb-3">
      <heading :title="miniproductsTitle.description1" :subtitle="miniproductsTitle.description2"></heading>
      <b-row>
        <b-col md="3" sm="6">
          <LinkItem
            to="/products/strobarry"
            src="http://220.128.133.15/s1090109/1594090276038.jpg"
            text="布朗尼 | 草莓"
          ></LinkItem>
        </b-col>
        <b-col md="3" sm="6">
          <LinkItem
            to="/products/milk"
            src="http://220.128.133.15/s1090109/1594090298826.jpg"
            text="布朗尼 | 牛奶"
          ></LinkItem>
        </b-col>
        <b-col md="3" sm="6">
          <LinkItem
            to="/products/wasabe"
            src="http://220.128.133.15/s1090109/1594090305154.jpg"
            text="布朗尼 | 芥末"
          ></LinkItem>
        </b-col>
        <b-col md="3" sm="6">
          <LinkItem
            to="/products/milkshake"
            src="http://220.128.133.15/s1090109/1594090312145.jpg"
            text="布朗尼 | 奶昔"
          ></LinkItem>
        </b-col>
      </b-row>
    </b-container>

    <!-- 品牌故事 -->
    <b-container class="mt-3 mb-3 story">
      <Heading :title="miniaboutTitle.description1" :subtitle="miniaboutTitle.description2"></Heading>
      <b-row no-gutters v-for="(item,index) in miniabouts" :key="index">
        <b-col md="6" class="story-image">
          <img :src="item.src" />
        </b-col>
        <b-col md="6" class="story-description">
          <p class="mr-3 ml-3">{{item.description1}}</p>
        </b-col>
      </b-row>
    </b-container>

    <!-- 中間Banner -->
    <TheBanner
      :title="callToAction.description1"
      :subtitle="callToAction.description2"
      :buttontext="callToAction.description3"
      :to="callToAction.link"
      :src="callToAction.src"
    ></TheBanner>

    <!-- 好評推薦 -->
    <b-container>
      <Heading :title="minirecommendTitle.description1" :subtitle="minirecommendTitle.description2"></Heading>
      <b-row>
        <b-col md="4" class="mt-3 mb-3">
          <BannerBox to="/" src="https://picsum.photos/800/600/?image=39" text="熱熱吃更好吃"></BannerBox>
        </b-col>
        <b-col md="4" class="mt-3 mb-3">
          <BannerBox
            to="/"
            src="https://picsum.photos/800/600/?image=42"
            text="第一次吃的時候驚為天人!後來就一直回購了!"
          ></BannerBox>
        </b-col>
        <b-col md="4" class="mt-3 mb-3">
          <BannerBox
            to="/"
            src="https://picsum.photos/800/600/?image=43"
            text="咬下去的瞬間，巧克力的味道在口中擴散"
          ></BannerBox>

        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-5 mb-5">
      <h4>{{minifooter.description1}}</h4>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TheBanner from '@/components/TheBanner.vue'
import Heading from '@/components/Heading.vue'
import BannerBox from '@/components/BannerBox.vue'
import LinkItem from '@/components/LinkItem.vue'
export default {
  props: {
    webdata: Object
  },
  name: 'Home',
  components: {
    TheBanner,
    Heading,
    BannerBox,
    LinkItem
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      datas: [],
      isLoading: false
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  computed: {
    carousels () {
      return this.datas.filter(e => e.item.includes('carousel-item'))
    },
    introTitle () {
      return this.datas.filter(e => e.item.includes('intro-title'))[0]
    },
    intros () {
      return this.datas.filter(e => e.item.includes('intro-item'))
    },
    miniproductsTitle () {
      return this.datas.filter(e => e.item.includes('miniproducts-title'))[0]
    },
    miniaboutTitle () {
      return this.datas.filter(e => e.item.includes('miniabout-title'))[0]
    },
    miniabouts () {
      return this.datas.filter(e => e.item.includes('miniabout-item'))
    },
    callToAction () {
      return this.datas.filter(e => e.item.includes('calltoaction-item'))[0]
    },
    minirecommendTitle () {
      return this.datas.filter(e => e.item.includes('minirecommend-title'))[0]
    },
    minirecommends () {
      return this.datas.filter(e => e.item.includes('minirecommend-item'))
    },
    minifooter () {
      return this.datas.filter(e => e.item.includes('minifooter-item'))[0]
    }
  },
  mounted () {
    if (this.webdata.pages.length > 0) {
      this.datas = this.webdata.pages
      this.isLoading = true
    }
  }
}
</script>
