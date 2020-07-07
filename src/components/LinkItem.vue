<template>
  <div class="link-item">
    <router-link :to="linkTo">
      <a href="#" class="link-item-cover">
        <div class="bg" :style="bg"></div>
      </a>
    </router-link>

    <router-link :to="linkTo">
      <a href="#" class="link-item-text">{{ text }}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkItem',
  data () {
    return {
      bg: 'background-image:url(' + this.bgurl + ')'
    }
  },
  props: {
    linkTo: String,
    href: String,
    bgurl: String,
    text: String
  }
}
</script>

<style scoped>
.link-item-cover {
  padding-bottom: 80%;
  display: block;
  position: relative;
}
.bg {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s linear;
}

.bg:hover {
  opacity: 0.8;
  transform: scale(1.02);
}

.link-item-text {
  padding-top: 1rem;
  display: block;
  color: #555b6e;
  text-decoration: none;
}

.link-item-text:hover {
  color: #89b0ae;
  text-decoration: none;
}
</style>
