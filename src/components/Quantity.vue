<template>
  <div class="quantity">
    <button class="btn" @click="add(-1)">-</button>
    <input type="text" name="quantity" v-model="quantity" />
    <button class="btn" @click="add(1)">+</button>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: Number
  },
  data () {
    return {
      quantity: this.value
    }
  },
  methods: {
    add (num) {
      this.quantity += num
      if (this.quantity <= 0) {
        this.quantity = 0
      }
      this.$emit('update', this.quantity)
    }
  }
}
</script>

<style lang="scss" scoped>
.quantity {
  display: flex;
  align-items: center;

  button {
    border: 1px solid #555b6e;
    border-radius: 0;
    text-align: center;
    height: 2.6rem;
    box-sizing: border-box;

    &:focus {
      box-shadow: none;
    }

    &:hover {
      background-color: #555b6e;
      color: #faf9f9;
    }
  }

  input {
    height: 2.6rem;
    width: 30%;
    text-align: center;
    border-top: 1px solid #555b6e;
    border-bottom: 1px solid #555b6e;
    border-left: 0px;
    border-right: 0px;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }
}
</style>
