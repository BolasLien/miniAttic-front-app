(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"0fa5":function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.isLoading?a("div",{attrs:{id:"shop"}},[a("b-container",[a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{href:"/"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25"}})],1),a("b-breadcrumb-item",[a("router-link",{attrs:{to:"Shop"}},[t._v("各式甜點")])],1)],1)],1),a("div",{staticClass:"shop-box"},[a("b-container",[a("b-row",[a("b-col",{staticClass:"hidden-xs",attrs:{sm:"3",md:"2"}},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("布朗尼 BROWNIE")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("餅乾 COOKIE")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("蛋糕 CAKE")])])])]),a("b-col",{attrs:{sm:"9",md:"10"}},[a("h1",{staticClass:"head"},[t._v("各式甜點")]),a("b-row",{staticClass:"ml-n1 mr-n1"},t._l(t.products,(function(s,r){return a("b-col",{key:r,attrs:{lg:"3",sm:"6"}},[a("LinkItem",{attrs:{to:"/products/"+s.item,src:s.src,text:s.name}}),a("div",{staticClass:"price"},[a("small",[t._v("NT$ ")]),t._v(" "+t._s(s.price)+" ")])],1)})),1)],1)],1)],1)],1)],1):t._e()},e=[],i=a("b6e1"),n={name:"Shop",props:{webdata:Object},data:function(){return{products:[],isLoading:!1}},components:{LinkItem:i["a"]},mounted:function(){this.webdata.products.length>0&&(this.products=this.webdata.products,this.isLoading=!0)}},o=n,c=a("2877"),l=Object(c["a"])(o,r,e,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=shop.57f61758.js.map