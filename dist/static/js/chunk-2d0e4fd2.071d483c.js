(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4fd2"],{9324:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-button",{staticStyle:{float:"right","margin-right":"50px"},attrs:{icon:"el-icon-caret-left"},on:{click:t.back}},[t._v("返回")])],1),a("el-col",{attrs:{span:16}},[a("iframe",{staticClass:"app-iframe",attrs:{src:t.url}})])],1)],1)},s=[],i=a("5f87"),n={data:function(){return{options:""}},created:function(){var t=Object(i["b"])(),e=Object(i["a"])("userName"),a=Object(i["a"])("userId");if("edit"===this.$route.params.opt){var r=this.$route.params.id;this.url="index2.html#/pages/template/template-edit?token="+t+"&userId="+a+"&userName="+e+"&id="+r}else this.url="index2.html#/pages/template/template-edit?token="+t+"&userId="+a+"&userName="+e},methods:{back:function(){this.$router.back(-1)}}},l=n,c=a("2877"),o=Object(c["a"])(l,r,s,!1,null,null,null);e["default"]=o.exports}}]);