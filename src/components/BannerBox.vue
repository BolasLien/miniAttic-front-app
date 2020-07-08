<template>
  <div class="banner-box">
    <router-link class="cover" :to="to">
      <div class="bg" :style="bg"></div>
      <h5>{{ text }}</h5>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BannerBox',
  data () {
    return {
      bg: 'background-image:url(' + this.src + ')'
    }
  },
  props: {
    to: String,
    src: String,
    text: String
  }
}
</script>

<style scoped>

.cover {
  padding-bottom: 57.4468%;
  position: relative;
  display: block;
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
  transition: 0.3s linear color, 0.3s linear opacity;
  background-color: transparent;
}

.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s linear;
}

.bg:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

h5{
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

</style>
