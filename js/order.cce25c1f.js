(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order"],{"13d5":function(t,r,e){"use strict";var o=e("23e7"),a=e("d58f").left,s=e("a640"),n=e("ae40"),d=s("reduce"),c=n("reduce",{1:0});o({target:"Array",proto:!0,forced:!d||!c},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},cf2a:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"order"}},[t.orders.length>0?e("b-container",[e("div",{staticClass:"mt-2"},[t._v(" "+t._s(t.user)+"您好，以下是您的訂單 ")]),e("b-row",{staticClass:"head hidden-md"},[e("b-col",{attrs:{md:"3"}},[t._v("訂單編號")]),e("b-col",{attrs:{md:"2"}},[t._v("訂購日期")]),e("b-col",{attrs:{md:"2"}},[t._v("付款方式")]),e("b-col",{attrs:{md:"2"}},[t._v("訂單金額")]),e("b-col",{attrs:{md:"2"}},[t._v("訂單進度")])],1),t._l(t.orders,(function(r){return e("b-row",{key:r.item,staticClass:"item"},[e("b-col",{attrs:{md:"3",cols:"6","order-md":"1",order:"1"}},[e("router-link",{attrs:{to:"/order/"+r.item}},[e("font-awesome-icon",{attrs:{icon:["fas","list-alt"],size:"lg"}}),t._v(" "+t._s(r.item)+" ")],1)],1),e("b-col",{staticClass:"hidden-md",attrs:{md:"2",cols:"6","order-md":"2",order:"2"}},[t._v(t._s(t.getDate(r.item)))]),e("b-col",{staticClass:"bv-d-xl-down-none",attrs:{md:"6",cols:"12","order-md":"5",order:"3"}},[e("hr",{staticClass:"border"}),e("router-link",{attrs:{to:"/order/"+r.item}},[e("b-row",{staticClass:"detail product"},[e("b-col",{attrs:{md:"4",cols:"6"}},[e("b-img",{attrs:{center:"",width:"100",src:r.products[0].src}})],1),e("b-col",{attrs:{md:"8",cols:"6"}},[e("span",{staticClass:"bv-d-xl-down-none"},[t._v("共 "+t._s(t.totalAmount(r))+" 項商品")])])],1)],1),e("hr",{staticClass:"border"})],1),e("b-col",{attrs:{md:"2",cols:"6","order-md":"5",order:"4"}},[t._v(t._s(r.payment.name))]),e("b-col",{attrs:{md:"2",cols:"6","order-md":"5",order:"4"}},[e("span",{staticClass:"bv-d-xl-down-none"},[t._v("訂單金額")]),e("small",[t._v("NT$ ")]),t._v(" "+t._s(t.totalPrice(r))+" ")]),e("b-col",{attrs:{md:"2",cols:"6","order-md":"5",order:"2"}},[t._v(t._s(t.status[r.status]))])],1)}))],2):e("b-container",[e("p",[t._v(" 你尚未有任何訂單喔 "),e("br")]),e("h1",[e("router-link",{attrs:{to:"/shop"}},[t._v("可以從這裡去看看喔！")])],1)])],1)},a=[],s=(e("d81d"),e("13d5"),e("b85c")),n={props:{webdata:Object},data:function(){return{orders:[],status:["尚未付款","待出貨","出貨中","已送達"]}},methods:{getDate:function(t){var r=new Date(parseInt(t));return r.toLocaleDateString()},totalPrice:function(t){var r,e=0,o=Object(s["a"])(t.products);try{for(o.s();!(r=o.n()).done;){var a=r.value;e+=a.price*a.amount}}catch(n){o.e(n)}finally{o.f()}return e+t.payment.price},totalAmount:function(t){return t.products.map((function(t){return t.amount})).reduce((function(t,r){return t+r}))}},computed:{user:function(){return this.$store.getters.user}},mounted:function(){var t=this;this.axios.get("https://miniattic.herokuapp.com/orders").then((function(r){r.data.datas.length>0&&(t.orders=r.data.datas)})).catch((function(t){console.log(t)}))}},d=n,c=e("2877"),i=Object(c["a"])(d,o,a,!1,null,null,null);r["default"]=i.exports},d58f:function(t,r,e){var o=e("1c0b"),a=e("7b0b"),s=e("44ad"),n=e("50c4"),d=function(t){return function(r,e,d,c){o(e);var i=a(r),l=s(i),u=n(i.length),m=t?u-1:0,f=t?-1:1;if(d<2)while(1){if(m in l){c=l[m],m+=f;break}if(m+=f,t?m<0:u<=m)throw TypeError("Reduce of empty array with no initial value")}for(;t?m>=0:u>m;m+=f)m in l&&(c=e(c,l[m],m,i));return c}};t.exports={left:d(!1),right:d(!0)}},d81d:function(t,r,e){"use strict";var o=e("23e7"),a=e("b727").map,s=e("1dde"),n=e("ae40"),d=s("map"),c=n("map");o({target:"Array",proto:!0,forced:!d||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=order.cce25c1f.js.map