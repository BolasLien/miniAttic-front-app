<template>
  <div id="cart">
    <b-container class="shopping-step mt-4 mb-4">
      <b-row>
        <b-col sm="4">
          第1步
          <br />購物車確認
        </b-col>
        <b-col sm="4">
          第2步
          <br />付款與運送方式
        </b-col>
        <b-col sm="4">
          第3步
          <br />完成訂購
        </b-col>
      </b-row>
    </b-container>

    <b-container class="shopping-cart-container">
      <b-table-simple>
        <b-tr v-for="data in datas" :key="data.item">
          <b-td style=" width:25%"  class="align-middle">
            <b-img thumbnail width="120" :src="data.src"></b-img>
          </b-td>
          <b-td style=" width:25%" class="align-middle">{{data.name}}</b-td>
          <b-td style=" width:25%" class="align-middle">{{data.count}}</b-td>
          <b-td style=" width:25%" class="align-middle">
            <b-button>X</b-button>
            <br>
            {{data.price * data.count}}
            </b-td>
        </b-tr>

                  <!-- <b-tr>
            <b-td>
              <b-row class="align-items-center">
                <b-col sm="3">
                  <b-img thumbnail rounded="0" src="https://picsum.photos/800/600/?image=20"></b-img>
                </b-col>
                <b-col sm="5">商品名稱</b-col>
                <b-col sm="2">商品數量</b-col>
                <b-col sm="2">
                  <b-button>X</b-button>
                  <br />商品價格
                </b-col>
              </b-row>
            </b-td>
          </b-tr> -->
        <b-tfoot>
          <tr>
            <b-td colspan="2"></b-td>
            <b-td colspan="2">總計:1231321</b-td>
            </tr>

        </b-tfoot>
      </b-table-simple>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: [
        {
          item: 1,
          name: '好吃1',
          src: 'https://picsum.photos/800/800/?image=20',
          count: 3,
          price: 480
        },
        {
          item: 3,
          name: '好吃3',
          src: 'https://picsum.photos/800/800/?image=21',
          count: 2,
          price: 480
        },
        {
          item: 2,
          name: '好吃2',
          src: 'https://picsum.photos/800/800/?image=22',
          count: 3,
          price: 480
        }
      ]
    }
  }
}
</script>
