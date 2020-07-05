<template>
<div>
    <b-row no-gutters>
      <b-col md="6">
        <img :src="imgsrc">
      </b-col>
      <b-col md="6">
        {{title}}
        <br>
        {{text}}
      </b-col>
    </b-row>

</div>
</template>

<script>
export default {
  name: 'TheStory',
  props: {
    title: String,
    text: String,
    imgsrc: String
  }
}
</script>
