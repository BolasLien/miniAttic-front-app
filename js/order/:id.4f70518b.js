(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order/:id"],{"13d5":function(t,a,s){"use strict";var r=s("23e7"),o=s("d58f").left,c=s("a640"),e=s("ae40"),i=c("reduce"),n=e("reduce",{1:0});r({target:"Array",proto:!0,forced:!i||!n},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},d3bb:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.isLoading?r("div",{attrs:{id:"order-detail"}},[r("b-container",[r("p",{staticClass:"mt-4 mb-n2"},[t._v("您的訂單編號為："+t._s(t.data.item))]),r("b-row",{staticClass:"head"},[r("b-col",{attrs:{md:"12"}},[t._v("購物明細")])],1),t._l(t.data.products,(function(a){return r("b-row",{key:a.item,staticClass:"item"},[r("b-col",{attrs:{md:"4",cols:"6"}},[r("b-img",{attrs:{center:"",width:"80",src:a.src}})],1),r("b-col",{attrs:{md:"8",cols:"6"}},[r("b-row",{staticClass:"detail no-gutters"},[r("b-col",{attrs:{md:"4",cols:"12"}},[t._v(t._s(a.name))]),r("b-col",{attrs:{md:"3",cols:"12"}},[t._v("x"+t._s(a.amount))]),r("b-col",{attrs:{md:"4",cols:"12"}},[r("small",[t._v("NT$ ")]),t._v(" "+t._s(a.price*a.amount)+" ")]),r("b-col",{attrs:{md:"1"}})],1)],1)],1)})),r("b-row",{staticClass:"item"},[r("b-col",{attrs:{md:"4",cols:"6"}},[r("b-img",{attrs:{center:"",width:"80",src:s("cf05")}})],1),r("b-col",{attrs:{md:"8",cols:"6"}},[r("b-row",{staticClass:"detail no-gutters"},[r("b-col",{attrs:{md:"4",cols:"12"}},[t._v(t._s(t.data.payment.name))]),r("b-col",{attrs:{md:"3",cols:"12"}},[t._v(t._s(t.data.payment.description))]),r("b-col",{attrs:{md:"4",cols:"12"}},[r("small",[t._v("NT$ ")]),t._v(" "+t._s(t.data.payment.price)+" ")]),r("b-col",{attrs:{md:"1"}})],1)],1)],1),r("b-row",{staticClass:"item"},[r("b-col",{attrs:{md:"4",cols:"6"}},[t._v("訂單備註")]),r("b-col",{attrs:{md:"8",cols:"6"}},[t._v(" "+t._s(t.data.remark)+" ")])],1)],2),r("b-container",[r("b-row",{staticClass:"justify-content-end mt-2 cart-footer"},[r("b-col",{staticClass:"text-center mb-4",attrs:{md:"2",cols:"12"}},[t._v("共 "+t._s(t.totalAmount)+" 件商品")]),r("b-col",{staticClass:"text-right",attrs:{md:"2",cols:"6"}},[t._v("商品金額")]),r("b-col",{staticClass:"text-left",attrs:{md:"2",cols:"6"}},[r("small",[t._v("NT$ ")]),t._v(" "+t._s(t.totalPrice)+" ")])],1),r("b-row",{staticClass:"justify-content-end mt-1 cart-footer"},[r("b-col",{staticClass:"text-right",attrs:{md:"2",cols:"6"}},[t._v("運費")]),r("b-col",{staticClass:"text-left",attrs:{md:"2",cols:"6"}},[r("small",[t._v("NT$ ")]),t._v(" "+t._s(t.data.payment.price)+" ")])],1),r("b-row",{staticClass:"justify-content-end mt-4 mb-4 cart-footer"},[r("b-col",{staticClass:"text-right payable",attrs:{md:"2",cols:"6"}},[t._v("應付金額")]),r("b-col",{staticClass:"text-left payable",attrs:{md:"2",cols:"6"}},[t._v("NT$ "+t._s(t.totalPrice+t.data.payment.price))])],1),r("button",{staticClass:"btn",on:{click:function(a){return t.$router.go(-1)}}},[t._v("返回上一頁")])],1)],1):t._e()},o=[],c=(s("d81d"),s("13d5"),s("b85c")),e={data:function(){return{data:{},isLoading:!1}},computed:{totalPrice:function(){var t,a=0,s=Object(c["a"])(this.data.products);try{for(s.s();!(t=s.n()).done;){var r=t.value;a+=r.price*r.amount}}catch(o){s.e(o)}finally{s.f()}return a},totalAmount:function(){return this.data.products.map((function(t){return t.amount})).reduce((function(t,a){return t+a}))}},mounted:function(){var t=this;this.axios.get("https://miniattic.herokuapp.com/orderDetail/"+this.$route.params.id).then((function(a){a.data.datas.length>0&&(t.data=a.data.datas[0],t.data.products.map((function(t){t.src="https://miniattic.herokuapp.com/image/"+t.src})),t.isLoading=!0)})).catch((function(t){console.log(t)})),void 0===this.data&&this.$router.push("/NotFound")}},i=e,n=s("2877"),l=Object(n["a"])(i,r,o,!1,null,null,null);a["default"]=l.exports},d58f:function(t,a,s){var r=s("1c0b"),o=s("7b0b"),c=s("44ad"),e=s("50c4"),i=function(t){return function(a,s,i,n){r(s);var l=o(a),d=c(l),u=e(l.length),m=t?u-1:0,b=t?-1:1;if(i<2)while(1){if(m in d){n=d[m],m+=b;break}if(m+=b,t?m<0:u<=m)throw TypeError("Reduce of empty array with no initial value")}for(;t?m>=0:u>m;m+=b)m in d&&(n=s(n,d[m],m,l));return n}};t.exports={left:i(!1),right:i(!0)}}}]);
//# sourceMappingURL=:id.4f70518b.js.map