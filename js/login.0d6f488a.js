(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"login"}},[e("b-container",[e("b-breadcrumb",[e("b-breadcrumb-item",[e("router-link",{attrs:{to:"/"}},[e("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25"}})],1)],1),e("b-breadcrumb-item",[e("router-link",{attrs:{to:"/login"}},[t._v("會員登入")])],1)],1)],1),e("b-container",[e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{staticClass:"form",attrs:{sm:"12",lg:"6",md:"8"}},[e("p",{staticClass:"h4 text-center mb-4 mt-4"},[t._v("會員登入")]),e("b-form",{on:{submit:t.submit}},[e("b-form-group",{staticClass:"text-left"},[e("b-form-input",{attrs:{id:"input-account",type:"email",placeholder:"請輸入信箱"},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}})],1),e("b-form-group",{staticClass:"text-left"},[e("b-form-input",{attrs:{id:"input-password",type:"password",placeholder:"請輸入密碼"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),e("b-button",{attrs:{type:"submit"}},[t._v("會員登入")])],1)],1)],1)],1)],1)},o=[],a=(e("b0c0"),{data:function(){return{account:"",password:""}},methods:{submit:function(t){var s=this;t.preventDefault(),0!==this.account.length?0!==this.password.length?this.axios.post("https://miniattic.herokuapp.com/login",{account:this.account,password:this.password}).then((function(t){var e=t.data;e.success?s.$swal({title:"訊息",text:"登入成功",icon:"success",timer:2e3,timerProgressBar:!0}).then((function(){s.$store.commit("login",e.name),s.$router.push("/")})):s.$swal({title:"訊息",text:e.message,icon:"error",timer:2e3,timerProgressBar:!0})})).catch((function(t){t.response.data?s.$swal({title:"訊息",text:t.response.data.message,icon:"error",timer:2e3,timerProgressBar:!0}):console.log(t)})):this.$swal({title:"訊息",text:"請輸入密碼",icon:"warning",timer:2e3,timerProgressBar:!0}):this.$swal({title:"訊息",text:"請輸入帳號",icon:"warning",timer:2e3,timerProgressBar:!0})}}}),i=a,n=e("2877"),c=Object(n["a"])(i,r,o,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=login.0d6f488a.js.map