(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f01ead3c"],{"1c18":function(e,t,a){},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var n=o(),i=e-n,s=20,d=0;t="undefined"===typeof t?500:t;var c=function e(){d+=s;var o=Math.easeInOutQuad(d,n,i,t);l(o),d<t?r(e):a&&"function"===typeof a&&a()};c()}var d={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=d,u=(a("e498"),a("2877")),p=Object(u["a"])(c,n,i,!1,null,"6af373ef",null);t["a"]=p.exports},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function i(e,t){function a(a){var n=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var l=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",r.appendChild(o)),i.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var r={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},l=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(l)),r.install=l;t["a"]=r},"8d41":function(e,t,a){},9261:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:"请输入活动名称"},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"活动状态",clearable:""},model:{value:e.listQuery.state,callback:function(t){e.$set(e.listQuery,"state",t)},expression:"listQuery.state"}},e._l(e.stateOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" 查询 ")]),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" 添加 ")])],1),a("SimpleTable",{attrs:{"list-loading":e.listLoading,data:e.list,columns:e.columns}},[a("el-table-column",{attrs:{label:"操作",align:"center",width:"160px","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v(" 编辑 ")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.handleDelete(n)}}},[e._v(" 删除 ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1)},i=[],r=a("6724"),l=a("bb3e"),o=a("333d"),s=a("b775"),d=a("5f87");function c(e){var t={url:"pintuan",action:"query",check:!0,uniIdToken:Object(d["b"])(),data:e};return Object(s["a"])({url:"",method:"post",data:t})}function u(e){var t={url:"pintuan",action:"del",check:!0,uniIdToken:Object(d["b"])(),data:e};return Object(s["a"])({url:"",method:"post",data:t})}var p={name:"PintuanList",components:{SimpleTable:l["a"],Pagination:o["a"]},directives:{waves:r["a"]},data:function(){return{list:[],total:0,listLoading:!0,listQuery:{page:1,limit:10,state:"",name:""},stateOptions:[{key:"0",display_name:"全部"},{key:"1",display_name:"未开始"},{key:"2",display_name:"进行中"},{key:"3",display_name:"已结束"}],columns:[{header:"序号",type:"index",width:"100px",dataIndex:""},{header:"活动名称",type:"data",width:"",dataIndex:"name"},{header:"开始时间",type:"data",width:"",dataIndex:"startDate"},{header:"结束时间",type:"data",width:"",dataIndex:"endDate"},{header:"成团订单数",type:"data",width:"",dataIndex:"allOrder"},{header:"成团人数",type:"data",width:"",dataIndex:"allPeople"},{header:"销售金额(元)",type:"data",width:"",dataIndex:"allMoney"},{header:"更新时间",type:"datetime",width:"",dataIndex:"updatetime"}]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,c(this.listQuery).then((function(t){e.list=t.data.records,e.total=t.data.total,e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleCreate:function(){this.$router.push({name:"PintuanEdit",params:{opt:"add"}})},handleUpdate:function(e){this.$router.push({name:"PintuanEdit",params:{opt:"edit",id:e._id}})},handleDelete:function(e){var t=this;this.$confirm("是否删除该拼团？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={id:e._id};u(a).then((function(e){200===e.code?(t.$message({message:"删除成功",type:"success"}),t.handleFilter()):t.$message({message:e.msg,type:"warning"})}))}))}}},f=p,h=a("2877"),g=Object(h["a"])(f,n,i,!1,null,null,null);t["default"]=g.exports},a9e3:function(e,t,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),l=a("6eeb"),o=a("5135"),s=a("c6b6"),d=a("7156"),c=a("c04e"),u=a("d039"),p=a("7c73"),f=a("241c").f,h=a("06cf").f,g=a("9bf2").f,m=a("58a8").trim,y="Number",w=i[y],v=w.prototype,b=s(p(v))==y,x=function(e){var t,a,n,i,r,l,o,s,d=c(e,!1);if("string"==typeof d&&d.length>2)if(d=m(d),t=d.charCodeAt(0),43===t||45===t){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+d}for(r=d.slice(2),l=r.length,o=0;o<l;o++)if(s=r.charCodeAt(o),s<48||s>i)return NaN;return parseInt(r,n)}return+d};if(r(y,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var k,_=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof _&&(b?u((function(){v.valueOf.call(a)})):s(a)!=y)?d(new w(x(t)),a,_):x(t)},S=n?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)o(w,k=S[I])&&!o(_,k)&&g(_,k,h(w,k));_.prototype=v,v.constructor=_,l(i,y,_)}},bb3e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"simpleTable",staticStyle:{width:"100%"},attrs:{data:e.data,border:"",fit:"","highlight-current-row":"","row-class-name":e.rowClassName},on:{"selection-change":e.selectChange,"row-dblclick":e.rowdbclick}},[a("column",{attrs:{columns:e.columns}},[e._t("default")],2)],1)],1)},i=[],r=(a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._t("default"),e._l(e.columns,(function(t,n){return["data"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,type:t.type,prop:t.dataIndex,align:"center"}}):"avatar"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,prop:t.dataIndex,align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-avatar",{attrs:{size:50,src:void 0===t.userInfo?"":t.userInfo.avatarUrl}})]}}],null,!0)}):"goodsImage"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,prop:t.dataIndex,align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.proData.imageList[0],fit:"cover","preview-src-list":t.proData.imageList}})]}}],null,!0)}):"templateImage"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,prop:t.dataIndex,align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.imgUrl,fit:"cover","preview-src-list":[t.imgUrl]}})]}}],null,!0)}):"goodsTag"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,prop:t.dataIndex,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tag",{attrs:{type:e._f("statusFilter")(n.proData.showState)}},[e._v(" "+e._s(n.proData.showState)+" ")])]}}],null,!0)}):"orderGoods"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,prop:t.dataIndex,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[0==e.showAllOrderGoods?a("div",[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:n.goodsData[0].image,fit:"cover","preview-src-list":[n.goodsData[0].image]}})],1),a("el-col",{attrs:{span:16}},[a("div",{staticStyle:{"text-align":"left"}},[e._v(e._s(n.goodsData[0].title)+" "),a("div",{staticStyle:{color:"#999999"}},[e._v("x "+e._s(n.goodsData[0].number))])])])],1)],1):e._e(),1==e.showAllOrderGoods?a("div",e._l(n.goodsData,(function(t,n){return a("el-row",{key:n},[a("el-col",{attrs:{span:8}},[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.image,fit:"cover","preview-src-list":[t.image]}})],1),a("el-col",{attrs:{span:16}},[a("div",{staticStyle:{"text-align":"left"}},[e._v(e._s(t.title)+" "),a("div",{staticStyle:{color:"#999999"}},[e._v("x "+e._s(t.number))])])])],1)})),1):e._e(),n.goodsData.length>1&&0==e.showAllOrderGoods?a("div",{staticStyle:{color:"#409eff","font-size":"13px"},on:{click:function(t){return e.handleShowGoodsOrder(!0)}}},[e._v("查看更多")]):e._e(),n.goodsData.length>1&&1==e.showAllOrderGoods?a("div",{staticStyle:{color:"#409eff","font-size":"13px"},on:{click:function(t){return e.handleShowGoodsOrder(!1)}}},[e._v("收起")]):e._e()]}}],null,!0)}):"selection"===t.type?a("el-table-column",{key:n,attrs:{type:"selection",label:t.header,width:t.width,prop:t.dataIndex,align:"center"}}):"date"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,type:t.type,prop:t.dataIndex,formatter:e.getDateFormat,align:"center"}}):"datetime"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,type:t.type,prop:t.dataIndex,formatter:e.getDatetimeFormat,align:"center"}}):"boolean"===t.type?a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,type:t.type,prop:t.dataIndex,formatter:e.getBoolean,align:"center"}}):a("el-table-column",{key:n,attrs:{label:t.header,width:t.width,type:t.type,align:"center"}})]}))],2)}),l=[],o=a("cf45"),s={name:"Column",filters:{statusFilter:function(e){var t={"上架":"success","下架":"info"};return t[e]}},props:{columns:{type:Array,required:!0}},data:function(){return{showAllOrderGoods:!1}},methods:{getDateFormat:function(e,t,a,n){return Object(o["a"])(a)},getDatetimeFormat:function(e,t,a,n){return Object(o["b"])(a)},getBoolean:function(e,t,a,n){return a?"是":"否"},getActive:function(e,t,a,n){return a?"挂起":"激活"},handleShowGoodsOrder:function(e){this.showAllOrderGoods=e}}},d=s,c=a("2877"),u=Object(c["a"])(d,r,l,!1,null,null,null),p=u.exports,f={name:"SimpleTable",components:{column:p},props:{tableKey:{required:!1,type:Number,default:0},listLoading:{required:!0,type:Boolean},data:{required:!0,type:Array},columns:{required:!0,type:Array},selectChange:{required:!1,type:Function,default:function(e){}},rowdbclick:{required:!1,type:Function,default:function(e){}},rowClassName:{required:!1,type:Function,default:function(e){}}}},h=f,g=Object(c["a"])(h,n,i,!1,null,null,null);t["a"]=g.exports},cf45:function(e,t,a){"use strict";function n(e){if(!e)return"";var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,i=t.getDate()<10?"0"+t.getDate():t.getDate();return a+"-"+n+"-"+i}function i(e){if(!e)return"";var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,i=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getHours()<10?"0"+t.getHours():t.getHours(),l=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+"-"+n+"-"+i+" "+r+":"+l+":"+o}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}))},e498:function(e,t,a){"use strict";var n=a("1c18"),i=a.n(n);i.a}}]);