<template>
  <div id="about">
        <!-- 麵包屑 -->

    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="About">關於我們</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <img src="https://picsum.photos/1280/450/?random=1" />
      <h4 class="mt-3">小閣樓的開始</h4>
      <p>miniAttic是在「小閣樓」裡做甜點時誕生的品牌，透過手做的甜點傳達溫暖的祝福，希望每個品嘗過miniAttic甜點的人，能身處在一個悠閒的午後，窩在自己的秘密基地裡，一個人享受甜點的美好時光。</p>
    </b-container>

    <b-container>
      <img src="https://picsum.photos/1280/450/?random=2" />
      <h4 class="mt-3">小閣樓的堅持</h4>
      <p>小閣樓重複嘗試過各式各樣的材料，以最單純的原料，最平衡的味道，才能誕生的每一份祝福。</p>
    </b-container>

    <b-container>
      <img src="https://picsum.photos/1280/450/?random=3" />
      <h4 class="mt-3">小閣樓的成長</h4>
      <p>每個支持過「小閣樓」的人們，感謝你們對小閣樓的信任，小閣樓才能越來越茁壯。</p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
}

</style>
