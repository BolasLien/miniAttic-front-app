<template>
  <div id="home">
    <!-- 輪播圖 -->
    <TheCarousel></TheCarousel>
    <!-- 最新消息 -->
    <b-container class="mt-3 mb-3">
      <heading title="最新消息" subtitle="NEWS"></heading>
      <b-row>
        <b-col md="4">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/800/600/?image=23"></TheCard>
        </b-col>
        <b-col md="4">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/800/600/?image=24"></TheCard>
        </b-col>
        <b-col md="4">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/800/600/?image=25"></TheCard>
        </b-col>
      </b-row>
    </b-container>

    <!-- 品牌故事 -->
    <b-container class="mt-3 mb-3">
      <heading title="品牌故事" subtitle="STORY"></heading>
      <TheStory title="品牌故事" :text="storyText" imgsrc="https://picsum.photos/400/400/?image=1060"></TheStory>
    </b-container>

        <!-- 中間Banner -->
    <TheBanner
      title="對小閣樓的布朗尼有興趣嗎?"
      subtitle="點擊申請試吃"
      buttontext="立即品嘗"
      url="#"
      bgurl="https://picsum.photos/1920/1080/?image=395"
    ></TheBanner>

    <!-- 好評推薦 -->
    <b-container class="mt-3 mb-3">
      <heading title="好評推薦" subtitle="recommend"></heading>
      <b-row>
        <b-col md="4" class="mb-2">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/400/300/?image=5"></TheCard>
        </b-col>
        <b-col md="4" class="mb-2">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/400/300/?image=6"></TheCard>
        </b-col>
        <b-col md="4" class="mb-2">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle" imgsrc="https://picsum.photos/400/300/?image=7"></TheCard>
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
import TheCarousel from '@/components/TheCarousel.vue'
import TheCard from '@/components/TheCard.vue'
import TheStory from '@/components/TheStory.vue'
import TheBanner from '@/components/TheBanner.vue'
import Heading from '@/components/Heading.vue'

export default {
  name: 'Home',
  components: {
    TheCarousel,
    TheCard,
    TheStory,
    TheBanner,
    Heading
  },
  data () {
    return {
      storyText: '就說要換行 \n 還不換行'
    }
  }
}
</script>
