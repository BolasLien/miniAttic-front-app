<template>
  <div id="home">
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
      <Heading :title="introTitle.title" :subtitle="introTitle.subtitle"></Heading>
      <b-row>
        <b-col v-for="(item, index) in intros" :key="index" :md="12/intros.length" sm="12" class="mt-3 mb-3" >
          <BannerBox
            :to="item.link"
            :src="item.src"
            :text="item.description"
            ></BannerBox>
        </b-col>
      </b-row>
    </b-container>

    <!-- 商品 -->
    <b-container class="mt-3 mb-3">
      <heading :title="miniproductsTitle.title" :subtitle="miniproductsTitle.subtitle"></heading>
      <b-row>
        <b-col md="3" sm="6">
          <LinkItem
            to="/products/strobarry"
            src="http://220.128.133.15/s1090109/1594090276038.jpg"
            text="布朗尼 | 草莓"
          ></LinkItem>
          <!-- <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/800/600/?image=23"></TheCard> -->
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
      <Heading :title="miniaboutTitle.title" :subtitle="miniaboutTitle.subtitle"></Heading>
      <b-row no-gutters v-for="(item,index) in miniabouts" :key="index">
        <b-col md="6" class="story-image">
          <img :src="item.src" />
        </b-col>
        <b-col md="6" class="story-description">
          <p class="mr-3 ml-3">{{item.description}}</p>
        </b-col>
      </b-row>
    </b-container>

    <!-- 中間Banner -->
    <TheBanner
      :title="callToAction.title"
      :subtitle="callToAction.subtitle"
      :buttontext="callToAction.description"
      :to="callToAction.link"
      :src="callToAction.src"
    ></TheBanner>

    <!-- 好評推薦 -->
    <b-container>
      <Heading :title="minirecommendTitle.title" :subtitle="minirecommendTitle.subtitle"></Heading>
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
      <h4>{{minifooter.description}}</h4>
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
    datas: Array
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
      carousels: this.datas.filter(e => e.area === 'carousel' && e.show && e.item !== 'title'),
      introTitle: this.datas.filter(e => e.area === 'intro' && e.show && e.item === 'title')[0],
      intros: this.datas.filter(e => e.area === 'intro' && e.show && e.item !== 'title'),
      miniproductsTitle: this.datas.filter(e => e.area === 'miniproducts' && e.show && e.item === 'title')[0],
      miniaboutTitle: this.datas.filter(e => e.area === 'miniabout' && e.show && e.item === 'title')[0],
      miniabouts: this.datas.filter(e => e.area === 'miniabout' && e.show && e.item !== 'title'),
      callToAction: this.datas.filter(e => e.area === 'calltoaction' && e.show && e.item !== 'title')[0],
      minirecommendTitle: this.datas.filter(e => e.area === 'minirecommend' && e.show && e.item === 'title')[0],
      minirecommends: this.datas.filter(e => e.area === 'minirecommend' && e.show && e.item !== 'title')[0],
      minifooter: this.datas.filter(e => e.area === 'minifooter' && e.show && e.item !== 'title')[0]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
