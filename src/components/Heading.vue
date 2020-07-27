<template>
  <div class="heading mt-5">
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
