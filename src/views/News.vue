<template>
  <div class="about">
    <Heading title="最新消息" subtitle="News"></Heading>
    <h1>This is an News page</h1>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
export default {
  name: 'News',
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
