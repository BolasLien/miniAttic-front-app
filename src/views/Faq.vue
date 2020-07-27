<template>
  <div id="faq">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="Faq">購買流程</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <!-- 訂購流程 -->
      <div class="mt-4">
        <h4>購買流程</h4>
        <img src="https://picsum.photos/1080/300/?random=1" />
      </div>

      <!-- 付款方式 -->
      <div class="mt-4">
        <h4>付款方式</h4>
        <ul>
          <li>面交付現</li>
          <li>銀行轉帳/ATM(匯款完成後請告知我們您的帳號末5碼)</li>
        </ul>
      </div>

      <!-- 注意事項 -->
      <div class="mt-4">
        <h4>注意事項</h4>
        <ul>
          <li>下單後會有專人跟您確認面交時間</li>
          <li>確認訂單後開始製作</li>
          <li>請留意商品保存方式。常溫：3天。冷藏：7天</li>
        </ul>
      </div>
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
      user: ''
    }
  }
}
</script>
