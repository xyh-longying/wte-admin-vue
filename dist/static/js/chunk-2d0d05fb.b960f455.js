(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d05fb"],{6869:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-button",{staticStyle:{float:"right","margin-right":"50px"},attrs:{icon:"el-icon-caret-left"},on:{click:t.back}},[t._v("返回")])],1),a("el-col",{attrs:{span:16}},[a("iframe",{staticClass:"app-iframe",attrs:{src:t.url}})])],1)],1)},r=[],i=a("5f87"),o={data:function(){return{options:""}},created:function(){var t=Object(i["b"])(),e=Object(i["a"])("userName"),a=Object(i["a"])("userId");if("edit"===this.$route.params.opt){var s=this.$route.params.id;this.url="index2.html#/pages/goods/goods-edit?token="+t+"&userId="+a+"&userName="+e+"&id="+s}else this.url="index2.html#/pages/goods/goods-edit?token="+t+"&userName="+e},methods:{back:function(){this.$router.back(-1)}}},n=o,c=a("2877"),l=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=l.exports}}]);