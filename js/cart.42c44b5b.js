(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{"13d5":function(t,e,r){"use strict";var s=r("23e7"),a=r("d58f").left,n=r("a640"),o=r("ae40"),i=n("reduce"),c=o("reduce",{1:0});s({target:"Array",proto:!0,forced:!i||!c},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},1542:function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var s=r("1d80"),a=r("5899"),n="["+a+"]",o=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),c=function(t){return function(e){var r=String(s(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,r){var s=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var n,o;return a&&"function"==typeof(n=e.constructor)&&n!==r&&s(o=n.prototype)&&o!==r.prototype&&a(t,o),t}},"74fc":function(t,e,r){"use strict";var s=r("1542"),a=r.n(s);a.a},7527:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quantity"},[r("button",{staticClass:"btn",on:{click:function(e){return t.add(-1)}}},[t._v("-")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"text",name:"quantity"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),r("button",{staticClass:"btn",on:{click:function(e){return t.add(1)}}},[t._v("+")])])},a=[],n=(r("a9e3"),{model:{prop:"value",event:"update"},props:{value:Number},data:function(){return{quantity:this.value}},methods:{add:function(t){this.quantity+=t,this.quantity<=0&&(this.quantity=0),this.$emit("update",this.quantity)}}}),o=n,i=(r("74fc"),r("2877")),c=Object(i["a"])(o,s,a,!1,null,"053e6053",null);e["a"]=c.exports},a9e3:function(t,e,r){"use strict";var s=r("83ab"),a=r("da84"),n=r("94ca"),o=r("6eeb"),i=r("5135"),c=r("c6b6"),l=r("7156"),u=r("c04e"),m=r("d039"),d=r("7c73"),p=r("241c").f,f=r("06cf").f,b=r("9bf2").f,v=r("58a8").trim,h="Number",_=a[h],y=_.prototype,g=c(d(y))==h,w=function(t){var e,r,s,a,n,o,i,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(n=l.slice(2),o=n.length,i=0;i<o;i++)if(c=n.charCodeAt(i),c<48||c>a)return NaN;return parseInt(n,s)}return+l};if(n(h,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var C,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(g?m((function(){y.valueOf.call(r)})):c(r)!=h)?l(new _(w(e)),r,k):w(e)},x=s?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)i(_,C=x[N])&&!i(k,C)&&b(k,C,f(_,C));k.prototype=y,y.constructor=k,o(a,h,k)}},b789:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"cart"}},[t.shoppigList.length>0?s("b-container",{staticClass:"shopping-step mt-4 mb-5"},[s("form-wizard",{staticClass:"p-n5",attrs:{title:"",subtitle:"",color:"#555b6e"},on:{"on-complete":t.submit},scopedSlots:t._u([{key:"footer",fn:function(e){return[s("div",{staticClass:"wizard-footer-left"},[e.activeTabIndex>0?s("wizard-button",{style:e.fillButtonStyle,nativeOn:{click:function(t){return e.prevTab()}}},[t._v("返回")]):t._e()],1),s("div",{staticClass:"wizard-footer-right"},[e.isLastStep?s("wizard-button",{staticClass:"wizard-footer-right finish-button",style:e.fillButtonStyle,nativeOn:{click:function(e){return t.submit(e)}}},[t._v(t._s(e.isLastStep?"送出":"下一步"))]):s("wizard-button",{staticClass:"wizard-footer-right",style:e.fillButtonStyle,nativeOn:{click:function(t){return e.nextTab()}}},[t._v("下一步")])],1)]}}],null,!1,515627058)},[s("tab-content",{attrs:{title:t.steps[0]}},[s("b-container",{staticClass:"cart"},[s("b-row",{staticClass:"head"},[s("b-col",{attrs:{md:"12"}},[t._v("以下是您選購的商品")])],1),t._l(t.shoppigList,(function(e){return s("b-row",{key:e.item,staticClass:"item"},[s("b-col",{attrs:{md:"4",cols:"5"}},[s("b-img",{attrs:{center:"",width:"120",src:e.src}})],1),s("b-col",{attrs:{md:"8",cols:"7"}},[s("b-row",{staticClass:"detail no-gutters"},[s("b-col",{staticClass:"text-left",attrs:{md:"4",cols:"11","order-md":"2",order:"1"}},[t._v(t._s(e.name))]),s("b-col",{attrs:{md:"3",cols:"12","order-md":"3",order:"4"}},[s("quantity",{on:{update:function(r){return t.update(e)}},model:{value:e.amount,callback:function(r){t.$set(e,"amount",r)},expression:"data.amount"}})],1),s("b-col",{staticClass:"pt-2 pb-2",attrs:{md:"4",cols:"12","order-md":"4",order:"3"}},[s("small",[t._v("NT$ ")]),t._v(" "+t._s(e.price*e.amount)+" ")]),s("b-col",{attrs:{md:"1",cols:"1","order-md":"5",order:"2"}},[s("button",{staticClass:"btn btn-remove",on:{click:function(r){return t.remove(e)}}},[t._v("X")])])],1)],1)],1)}))],2)],1),s("tab-content",{attrs:{title:t.steps[1]}},[s("b-container",{staticClass:"payment"},[s("b-row",{staticClass:"head"},[s("b-col",{attrs:{md:"12"}},[t._v("請選擇您的付款方式")])],1),t._l(t.payments,(function(e){return s("b-row",{key:e.item,staticClass:"item"},[s("b-col",{attrs:{md:"3",cols:"5"}},[s("label",{attrs:{for:e.item}},[s("b-img",{attrs:{src:r("cf05"),center:"",width:"120"}})],1),s("input",{attrs:{type:"radio",name:"payment",id:e.item},domProps:{checked:e.selected},on:{input:function(r){return t.paymentSelect(e)}}})]),s("b-col",{attrs:{md:"9",cols:"7"}},[s("label",{attrs:{for:e.item}},[s("b-row",{staticClass:"detail"},[s("b-col",{attrs:{md:"4"}},[t._v(t._s(e.name))]),s("b-col",{attrs:{md:"4"}},[t._v(t._s(e.description))]),s("b-col",{attrs:{md:"3"}},[s("small",[t._v("+NT$ ")]),t._v(" "+t._s(e.price)+" ")])],1)],1)])],1)}))],2)],1),s("tab-content",{attrs:{title:t.steps[2]}},[s("b-container",{staticClass:"order"},[s("b-row",{staticClass:"head"},[s("b-col",{attrs:{md:"12"}},[t._v("請確認您的訂單")])],1),t._l(t.shoppigList,(function(e){return s("b-row",{key:e.item,staticClass:"item"},[s("b-col",{attrs:{md:"4",cols:"5"}},[s("b-img",{attrs:{center:"",width:"80",src:e.src}})],1),s("b-col",{attrs:{md:"8",cols:"7"}},[s("b-row",{staticClass:"detail no-gutters"},[s("b-col",{attrs:{md:"4",cols:"12"}},[t._v(t._s(e.name))]),s("b-col",{attrs:{md:"3",cols:"12"}},[t._v("x"+t._s(e.amount))]),s("b-col",{attrs:{md:"4",cols:"12"}},[s("small",[t._v("NT$ ")]),t._v(" "+t._s(e.price*e.amount)+" ")]),s("b-col",{attrs:{md:"1"}})],1)],1)],1)})),s("b-row",{staticClass:"item"},[s("b-col",{attrs:{md:"4",cols:"5"}},[s("b-img",{attrs:{center:"",width:"80",src:r("cf05")}})],1),s("b-col",{attrs:{md:"8",cols:"7"}},[s("b-row",{staticClass:"detail no-gutters"},[s("b-col",{attrs:{md:"4",cols:"12"}},[t._v(t._s(t.payment.name))]),s("b-col",{attrs:{md:"3",cols:"12"}},[t._v(t._s(t.payment.description))]),s("b-col",{attrs:{md:"4",cols:"12"}},[s("small",[t._v("NT$ ")]),t._v(" "+t._s(t.payment.price)+" ")]),s("b-col",{attrs:{md:"1"}})],1)],1)],1),s("b-row",{staticClass:"item"},[s("b-col",{attrs:{md:"5"}},[t._v("有甚麼想告訴我們的嗎?")]),s("b-col",{attrs:{md:"7"}},[s("b-form-textarea",{attrs:{id:"textarea",placeholder:"可以在這裡告訴我們...",rows:"3","max-rows":"6"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],2)],1),s("b-container",[s("b-row",{staticClass:"justify-content-end mt-4 cart-footer"},[s("b-col",{staticClass:"text-center mb-4",attrs:{md:"2",cols:"12"}},[t._v("共 "+t._s(t.totalAmount)+" 件商品")]),s("b-col",{staticClass:"text-right",attrs:{md:"2",cols:"6"}},[t._v("商品金額")]),s("b-col",{staticClass:"text-left",attrs:{md:"2",cols:"6"}},[s("small",[t._v("NT$ ")]),t._v(" "+t._s(t.totalPrice)+" ")])],1),s("b-row",{staticClass:"justify-content-end mt-4 cart-footer"},[s("b-col",{staticClass:"text-right",attrs:{md:"2",cols:"6"}},[t._v("運費")]),s("b-col",{staticClass:"text-left",attrs:{md:"2",cols:"6"}},[s("small",[t._v("NT$ ")]),t._v(" "+t._s(t.payment.price)+" ")])],1),s("b-row",{staticClass:"justify-content-end mt-4 mb-4 cart-footer"},[s("b-col",{staticClass:"text-right payable",attrs:{md:"2",cols:"6"}},[t._v("應付金額")]),s("b-col",{staticClass:"text-left payable",attrs:{md:"2",cols:"6"}},[t._v("NT$ "+t._s(t.totalPrice+t.payment.price))])],1)],1)],1)],1):s("b-container",[s("p",[t._v(" 你的購物車沒有商品喔 "),s("br")]),s("h1",[s("router-link",{attrs:{to:"/shop"}},[t._v("可以從這裡去看看喔！")])],1)])],1)},a=[],n=(r("d81d"),r("13d5"),r("b0c0"),r("b85c")),o=r("7527"),i={props:{webdata:Object},components:{quantity:o["a"]},data:function(){return{steps:["確認商品","選擇付款與運送方式","送出訂單"],payment:{item:1,name:"面交付款",price:0},paymentPrice:0,remark:""}},methods:{update:function(t){this.$store.commit("updateProduct",t)},remove:function(t){this.$store.commit("removeProduct",t)},submit:function(){var t=this;0!==this.user.length&&void 0!==this.user?this.$axios.postOrders(this.order.products,this.order.payment,this.order.remark):this.$alert.warning("尚未登入喔").then((function(){t.$router.push("/login")}))},paymentSelect:function(t){this.payment=t}},computed:{payments:function(){return this.webdata.payments},user:function(){return this.$store.getters.user},token:function(){return this.$store.getters.token},shoppigList:function(){return this.$store.getters.cart.products},totalAmount:function(){return this.shoppigList.map((function(t){return t.amount})).reduce((function(t,e){return t+e}))},totalPrice:function(){var t,e=0,r=Object(n["a"])(this.shoppigList);try{for(r.s();!(t=r.n()).done;){var s=t.value;e+=s.price*s.amount}}catch(a){r.e(a)}finally{r.f()}return e+this.paymentPrice},order:function(){var t,e=[],r=Object(n["a"])(this.shoppigList);try{for(r.s();!(t=r.n()).done;){var s=t.value;e.push({item:s.item,name:s.name,amount:s.amount})}}catch(a){r.e(a)}finally{r.f()}return{products:e,payment:this.payment,remark:this.remark}}}},c=i,l=r("2877"),u=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=u.exports},d58f:function(t,e,r){var s=r("1c0b"),a=r("7b0b"),n=r("44ad"),o=r("50c4"),i=function(t){return function(e,r,i,c){s(r);var l=a(e),u=n(l),m=o(l.length),d=t?m-1:0,p=t?-1:1;if(i<2)while(1){if(d in u){c=u[d],d+=p;break}if(d+=p,t?d<0:m<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:m>d;d+=p)d in u&&(c=r(c,u[d],d,l));return c}};t.exports={left:i(!1),right:i(!0)}}}]);
//# sourceMappingURL=cart.42c44b5b.js.map