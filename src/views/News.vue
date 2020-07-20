<template>
  <div id="news">
        <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="News">最新消息</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>
    <b-container>
      <b-row>
        <b-col lg="6" sm="12">
          <BannerBox text="you know!" src="https://picsum.photos/800/600/?image=20" to="/"></BannerBox>
        </b-col>
        <b-col lg="6" sm="12" class="text-left">
          <h6>最新消息</h6>
          <h3>打造用戶上癮的遊戲化行銷策略！看星巴克如何遊戲化行銷，提升購物體驗</h3>
          <h4>在現在的時代下，不論是大人或小孩都喜歡玩遊戲，更可能會在遊戲中撒大錢買東西，似乎遊戲就有種令人上癮的吸引力。「遊戲化（Gamification）行銷」就是利用遊戲令人上癮的元素，套用在行銷手法上，讓用戶對你的商品行銷活動上鉤，甚至玩到欲罷不能！</h4>
          <hr>
          <h5>2020年7月8日</h5>
        </b-col>
      </b-row>
      <hr>
    </b-container>

  </div>
</template>

<script>
import BannerBox from '@/components/BannerBox.vue'
export default {
  props: {
    webdata: Object
  },
  name: 'News',
  data () {
    return {
    }
  },
  components: {
    BannerBox
  }
}
</script>
