<template>
  <div>
    <b-container>
      <b-row v-for="data in orders" :key="data.item">
        <b-col>{{data.item}}</b-col>
        <b-col>{{data.remark}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: []
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/orders')
      .then(response => {
        this.orders = response.data.datas
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>
