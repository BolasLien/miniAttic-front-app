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
      <b-row v-for="post in posts" :key="post.item" class="post-item">
        <b-col lg="4" sm="12">
          <img :src="post.img" />
        </b-col>
        <b-col lg="6" sm="12" class="text-left mt-3">
          <h6>#{{post.tag}}</h6>
          <hr>
          <h3>{{post.title}}</h3>
          <p v-html="post.article"></p>
          <hr>
          <h5>{{post.date}}</h5>
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
  name: 'News',
  data () {
    return {
      posts: [
        {
          item: 1,
          img: 'http://220.128.133.15/s1090109/miniattic/assets/img/post/1.jpg',
          title: '布朗尼「們」出發了👏👏👏',
          article: '明天是一個特別的日子，我們趕在今天內把新鮮現做的布朗尼送到樓主們的手中，讓各位嚐嚐我們的厲害😏。<br>祝全天下的媽媽母親節快樂👩🎁🎉',
          date: '2020年5月9日',
          tag: '小閣樓點滴'
        },
        {
          item: 2,
          img: 'http://220.128.133.15/s1090109/miniattic/assets/img/post/2.jpg',
          title: '小閣樓三個月快樂🥳🎉',
          article: '默默的也成立了三個月了，這個過程中，很感謝有很多親友的支持，我們才可以走到今天。<br>當然如果只是現階段就滿足了，小閣樓的成長可能就停滯了。所以，我們每個禮拜都在出爐新甜點、試吃新甜點。<br>體重會證明我們真的很努力😭',
          date: '2020年5月3日',
          tag: '小閣樓點滴'
        },
        {
          item: 3,
          img: 'http://220.128.133.15/s1090109/miniattic/assets/img/post/3.jpg',
          title: '每一次出爐都是一種祝福',
          article: '烤箱打開的那一剎那，總會想著這一次的布朗尼又會去哪裡旅行呢⋯⋯',
          date: '2020年4月19日',
          tag: '小閣樓點滴'
        }
      ]
    }
  }
}
</script>
