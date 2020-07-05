<template>
  <div>
    <b-card
      overlay
      :img-src="imgsrc"
      img-alt="Image"
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
    text: String,
    imgsrc: String
  }
}
</script>
