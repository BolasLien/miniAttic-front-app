<template>
  <div id="footer">
    <b-container>
      <div class="border"></div>
    </b-container>
    <b-container>
      <div class="warp">
        <!-- 網站地圖 -->
        <div class="block">

        </div>
        <!-- 常見問題 -->
        <div class="block">

        </div>
        <!-- 關於我們 -->
        <div class="block">

        </div>
        <!-- logo -->
        <div class="block logo"></div>
      </div>
    </b-container>
    <div class="copyright">
      <h5>小閣樓私嚐手作 所有圖片皆來自於網路</h5>
      <h6>Copyright © 2020</h6>
      <!-- <h5>小閣樓私嚐手作版權所有</h5>
      <h6>Copyright © 2020 miniAttic All rights reserved</h6> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.copyright{
  color: #89B0AE;
}
.container:before, .container:after {
    content: " ";
    display: table;
}
hr, .border {
    border: 0;
    display: block;
    height: 1px;
    width: 100%;
    background-color: #BEE3DB;
    margin: 1em auto;
}
</style>
