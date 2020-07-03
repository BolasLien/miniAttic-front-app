<template>
  <div>
    <b-card
      overlay
      img-src="https://picsum.photos/800/600/?image=3"
      img-alt="Card Image"
      text-variant="white"
      :title="title"
      :sub-title="subTitle"
    >
      <b-card-text>{{ text }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'TheCard',
  props: {
    title: String,
    subTitle: String,
    text: String
  }
}
</script>
