<template>
  <div id="faq">
    <Heading title="購買流程" subtitle="How to buy?"></Heading>
    <div class="container">
      <h4>訂購需要做的事情</h4>

    </div>

    <div class="container">
      <h4>訂購注意事項</h4>
    </div>

    <div class="container">
      <h4>付款方式</h4>
        <h5>面交付現</h5>
        <h5>銀行轉帳/ATM(匯款完成後回報帳號末5碼，確認後安排出貨)</h5>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
export default {
  name: 'About',
  data () {
    return {
      user: ''
    }
  },
  components: {
    Heading
  }
}
</script>
