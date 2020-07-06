<template>
  <div class="Heading mt-5">
    <h4 class>{{title}}</h4>
    <h5>{{subtitle}}</h5>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
@media screen and (max-width: 991px) {
  h4 {
    font-size: 2.6em;
    letter-spacing: 2px;
    margin-left: 4px;
  }
}

h4 {
  font-size: 2.8em;
  letter-spacing: 4px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 8px;
}

@media screen and (max-width: 767px) {
  h5 {
    font-size: 1em;
    margin-top: 0.2em;
    margin-left: 2px;
    letter-spacing: 2px;
  }
}

h5 {
  font-size: 1em;
  margin-top: 0.4em;
  margin-bottom: 2em;
  margin-left: 4px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

h5::after {
  content: "";
  display: block;
  width: 4em;
  height: 2px;
  background: #555B6E;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
