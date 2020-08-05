<template>
  <div id="faq">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item>
          <router-link to="/"><b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon></router-link>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="Faq">購買流程</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <!-- 訂購流程 -->
      <div class="mt-4">
        <b-row class="step-item" v-for="(item, index) in steps" :key="index">
          <b-col md="3" sm="12">
            <font-awesome-icon :icon="item.icon" size="5x"></font-awesome-icon>
          </b-col>
          <b-col md="3" sm="12">
            <h6>step{{item.step}}</h6>
            <h5>{{item.text}}</h5>
          </b-col>
        </b-row>
      </div>

      <!-- 注意事項 -->
      <!-- <div class="mt-4 text-left">
        <h4>注意事項</h4>
        <ul>
          <li>下單後會有專人跟您確認面交時間</li>
          <li>確認訂單後開始製作</li>
          <li>請留意商品保存方式。常溫：3天。冷藏：7天</li>
        </ul>
      </div> -->
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    webdata: Object
  },
  name: 'About',
  data () {
    return {
      steps: [
        {
          step: 1,
          icon: ['fas', 'thumbs-up'],
          text: '挑選喜歡的商品'
        },
        {
          step: 2,
          icon: ['fas', 'shopping-cart'],
          text: '將商品加入購物車'
        },
        {
          step: 3,
          icon: ['fas', 'truck'],
          text: '選擇付款與運送方式'
        },
        {
          step: 4,
          icon: ['fas', 'receipt'],
          text: '送出訂單'
        },
        {
          step: 5,
          icon: ['fas', 'check'],
          text: '訂購完成'
        }
      ]
    }
  }
}
</script>
