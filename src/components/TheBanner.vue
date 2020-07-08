<template>
  <div class="fixed-banner-wrap mt-5 mb-3">
    <div class="container-fluid">
      <div class="row">
        <div class="wrap w-100">
          <hgroup class="title-box">
            <h4 class>{{title}}</h4>
            <h5>{{subtitle}}</h5>
            <router-link :to="to">{{buttontext}}</router-link>
            <!-- <a :href="url" title="CLASSIC"></a> -->
          </hgroup>
          <div
            class="bg-item"
            :style="bg"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBanner',
  props: {
    title: String,
    subtitle: String,
    buttontext: String,
    to: String,
    bgurl: String
  },
  data () {
    return {
      bg: `background-image:url(${this.bgurl});`
    }
  }
}
</script>

<style>
.fixed-banner-wrap .wrap .bg-item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
  filter: blur(1px);
}

.fixed-banner-wrap .wrap .bg-item::after{
  content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: .06;
    z-index: 0;
}

.fixed-banner-wrap .wrap{
  padding: 4em 2em;
    position: relative;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 1em rgba(0,0,0,.16);
    overflow: hidden;
}

.fixed-banner-wrap hgroup.title-box a{
      display: inline-block;
    padding: .6em 3em;
    line-height: 1;
    background-color: rgba(2555,255,255,.2);
    box-shadow: 0 0 1.6em rgba(0,0,0,.16);
    border: 1px solid #fff;
    color: inherit;
    transition: .3s linear all;
}
</style>
