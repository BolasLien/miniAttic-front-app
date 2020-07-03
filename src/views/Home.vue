<template>
  <div id="home">
    <!-- 輪播圖 -->
    <TheCarousel></TheCarousel>
    <!-- 最新消息 -->
    <b-container class="mt-3 mb-3">
      <b-row>
        <b-col md="4">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle"></TheCard>
        </b-col>
        <b-col md="4">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle"></TheCard>
        </b-col>
        <b-col md="4">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle"></TheCard>
        </b-col>
      </b-row>
    </b-container>
    <!-- 品牌故事 -->
    <b-container class="mt-3 mb-3">
      <TheStory title="品牌故事" :text="storyText"></TheStory>
    </b-container>
    <!-- 中間Banner -->
    <TheBanner
    title="對小閣樓的布朗尼有興趣嗎?"
    subtitle="點擊申請試吃"
    buttontext="立即品嘗"
    url="#"
    bgurl="https://picsum.photos/800/600/?random=1"
    ></TheBanner>

    <!-- 好評推薦 -->
    <b-container class="mt-3 mb-3">
      <b-row>
        <b-col md="4" class="mb-2">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle"></TheCard>
        </b-col>
        <b-col md="4" class="mb-2">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle"></TheCard>
        </b-col>
        <b-col md="4" class="mb-2">
          <TheCard text="Card Content in Here" title="Title" subTitle="subTitle"></TheCard>
        </b-col>

      </b-row>
    </b-container>
    <!-- 常見問題 -->

  </div>
</template>

<script>
// @ is an alias to /src
import TheCarousel from '@/components/TheCarousel.vue'
import TheCard from '@/components/TheCard.vue'
import TheStory from '@/components/TheStory.vue'
import TheBanner from '@/components/TheBanner.vue'

export default {
  name: 'Home',
  components: {
    TheCarousel,
    TheCard,
    TheStory,
    TheBanner
  },
  data () {
    return {
      storyText: '就說要換行 \n 還不換行'
    }
  }
}
</script>
