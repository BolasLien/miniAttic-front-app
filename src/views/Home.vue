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
      v-for="(carousel,index) in carousels"
      :key="index"
      :img-src="carousel.src"
      >
      </b-carousel-slide>
    </b-carousel>

    <!-- 最新消息 -->
    <b-container>
      <heading title="小閣樓新鮮事" subtitle="NEWS"></heading>
      <b-row>
        <b-col v-for="(intro, index) in intros" :key="index" :md="12/intros.length" sm="12" class="mt-3 mb-3" >
          <BannerBox
            :to="intro.to"
            :src="intro.src"
            :text="intro.text"
            ></BannerBox>
        </b-col>
      </b-row>
    </b-container>

    <!-- 商品 -->
    <b-container class="mt-3 mb-3">
      <heading title="小閣樓布朗尼" subtitle="Brownie"></heading>
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
      <heading title="我們是誰" subtitle="Who am I"></heading>
      <b-row no-gutters>
        <b-col md="6" class="story-image">
          <img src="https://picsum.photos/400/400/?image=1060" />
        </b-col>
        <b-col md="6" class="story-description">
          品牌故事
          <br />
          {{storyText}}
        </b-col>
      </b-row>
      <!-- <TheStory title="品牌故事" :text="storyText" imgsrc="https://picsum.photos/400/400/?image=1060"></TheStory> -->
    </b-container>

    <!-- 中間Banner -->
    <TheBanner
      title="對小閣樓的布朗尼有興趣嗎?"
      subtitle="點擊申請試吃"
      buttontext="立即品嘗"
      to="/"
      src="https://picsum.photos/1920/1080/?image=395"
    ></TheBanner>

    <!-- 好評推薦 -->
    <b-container>
      <heading title="好評推薦" subtitle="recommend"></heading>
      <b-row>
        <b-col md="4" class="mt-3 mb-3">
          <BannerBox to="/" src="https://picsum.photos/800/600/?image=39" text="熱熱吃更好吃"></BannerBox>

          <!-- <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/400/300/?image=5"></TheCard> -->
        </b-col>

        <b-col md="4" class="mt-3 mb-3">
          <BannerBox
            to="/"
            src="https://picsum.photos/800/600/?image=42"
            text="第一次吃的時候驚為天人!後來就一直回購了!"
          ></BannerBox>
          <!-- <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/400/300/?image=6"></TheCard> -->
        </b-col>
        <b-col md="4" class="mt-3 mb-3">
          <BannerBox
            to="/"
            src="https://picsum.photos/800/600/?image=43"
            text="咬下去的瞬間，巧克力的味道在口中擴散"
          ></BannerBox>

          <!-- <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/400/300/?image=7"></TheCard> -->
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-5 mb-5">
      <h4>享在悠閒的午後陽光，享受自己的秘密時光</h4>
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
      carousels: [
        {
          src: process.env.VUE_APP_API + '/img/carousel-item-1',
          to: '/'
        },
        {
          src: process.env.VUE_APP_API + '/img/carousel-item-2',
          to: '/'
        },
        {
          src: process.env.VUE_APP_API + '/img/carousel-item-3',
          to: '/'
        },
        {
          src: process.env.VUE_APP_API + '/img/carousel-item-4',
          to: '/'
        }
      ],
      intros: [
        {
          to: '/',
          src: process.env.VUE_APP_API + '/img/intro-item-1',
          text: 'intro1'
        },
        {
          to: '/',
          src: process.env.VUE_APP_API + '/img/intro-item-2',
          text: 'intro2'
        },
        {
          to: '/',
          src: process.env.VUE_APP_API + '/img/intro-item-3',
          text: 'intro3'
        }
      ],
      storyText:
        'miniAttic是在「小閣樓」裡做甜點時誕生的品牌，透過手做的甜點傳達溫暖的祝福，希望每個品嘗過miniAttic甜點的人，能身處在一個悠閒的午後，窩在自己的秘密基地裡，一個人享受甜點的美好時光。'
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
