(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{iHEO:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:"","enter-active-class":"animated flipInY","leave-active-class":"animated flipOutY"}},[a("q-page",{staticClass:"flex flex-center"},[a("q-card",{staticClass:"card-sign-in q-pa-md shadow-9",attrs:{inline:"",color:"white"}},[a("q-card-media",{staticClass:"q-pa-md"},[a("img",{attrs:{src:""}})]),a("q-card-title",{staticClass:"text-dark text-center"},[e._v("\n        Sign in to your account\n      ")]),a("form",{on:{submit:function(t){t.preventDefault(),e.register()}}},[a("q-card-main",[a("q-field",{staticClass:"q-mt-md",attrs:{icon:"email","icon-color":"light"}},[a("q-input",{attrs:{placeholder:"Email Address",type:"email",autocomplete:"username",error:e.$v.form.email.$error},on:{blur:e.$v.form.email.$touch},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"===typeof t?t.trim():t)},expression:"form.email"}})],1),a("q-field",{staticClass:"q-mt-lg",attrs:{icon:"lock","icon-color":"light"}},[a("q-input",{attrs:{placeholder:"Password",type:"password",autocomplete:"current-password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("q-field",{staticClass:"q-mt-lg",attrs:{icon:"lock","icon-color":"light"}},[a("q-input",{attrs:{placeholder:"Repeat Password",type:"password",autocomplete:"current-password"},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}})],1)],1),a("q-card-actions",{staticClass:"q-mt-lg",attrs:{align:"center"}},[a("q-btn",{attrs:{label:"Sign In",color:"primary",size:"large",type:"submit"}})],1)],1)],1)],1)],1)},s=[];r._withStripped=!0;a("pIFo");var o=a("ta7f"),i={name:"PageSignIn",data:function(){return{form:{email:"",password:"",repeatPassword:""}}},validations:{form:{email:{required:o["required"],email:o["email"]},password:{required:o["required"],minLength:Object(o["minLength"])(6)},repeatPassword:{sameAsPassword:Object(o["sameAs"])("password")}}},methods:{register:function(){var e=this,t={email:this.form.email,password:this.form.password};this.$store.dispatch("auth/register",t).then(function(t){e.$router.replace({name:"dashboard"})}).catch(function(t){e.$q.notify("Invalid Login!"),console.error("Not signed in: ".concat(t.message))})}}},n=i,l=a("KHd+"),c=Object(l["a"])(n,r,s,!1,null,null,null);t["default"]=c.exports}}]);