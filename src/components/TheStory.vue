<template>
<div>
    <b-row no-gutters>
      <b-col md="6">
        <img src="https://picsum.photos/400/400/?image=20">
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
    text: String
  }
}
</script>
