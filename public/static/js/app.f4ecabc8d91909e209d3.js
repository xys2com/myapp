webpackJsonp([1],{"0ZA6":function(t,s){},"5sli":function(t,s){},"79XU":function(t,s){},"7Z2b":function(t,s){},"8cBF":function(t,s){},"9CPH":function(t,s){},KoGH:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i=e("zL8q"),o=(e("tvR6"),{props:{rgba:String,border:String,color:String}}),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header",style:{background:this.rgba}},[this._t("left-icon"),this._v(" "),this._t("center-tit"),this._v(" "),this._t("right-icon")],2)},staticRenderFns:[]};var r=e("VU/8")(o,a,!1,function(t){e("YSUW")},null,null).exports,c={name:"App",data:function(){return{books:[{id:0,name:"第一本书",nestchapter:472,creattime:"2019-1-1 08:00:00",lasttime:"2019-1-1 08:00:00"},{id:1,name:"第二本书",nestchapter:1034,creattime:"2019-1-1 08:00:00",lasttime:"2019-1-1 08:00:00"},{id:2,name:"第三本书",nestchapter:175,creattime:"2019-1-1 08:00:00",lasttime:"2019-1-1 08:00:00"},{id:3,name:"第四本书",nestchapter:34,creattime:"2019-1-1 08:00:00",lasttime:"2019-1-1 08:00:00"},{id:4,name:"第五本书",nestchapter:2463,creattime:"2019-1-1 08:00:00",lasttime:"2019-1-1 08:00:00"}]}},components:{Header:r}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view",{attrs:{books:this.books}})],1)},staticRenderFns:[]};var u=e("VU/8")(c,l,!1,function(t){e("5sli")},null,null).exports,v=e("/ocq"),f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login-main"},[e("div",{staticClass:"input-suffix"},[e("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入用户名"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}})],1),t._v(" "),e("div",{staticClass:"input-suffix"},[e("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),t._v(" "),e("el-link",{attrs:{type:"primary",underline:!1,href:"#/Customer/Register"}},[t._v("\n    没有帐号？去注册\n  ")]),t._v(" "),e("div",{staticClass:"input-suffix"},[e("el-button",{staticStyle:{width:"80%"},attrs:{type:"primary"},on:{click:function(s){return t.login()}}},[t._v("登录")])],1)],1)},staticRenderFns:[]};var d=e("VU/8")({data:function(){return{username:"",password:""}},methods:{login:function(){this.$router.push("/Application")}}},f,!1,function(t){e("7Z2b")},null,null).exports,m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"register-main"},[e("div",{staticClass:"input-suffix"},[e("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入用户名"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}})],1),t._v(" "),e("div",{staticClass:"input-suffix"},[e("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"input-suffix"},[e("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"再次输入密码"},model:{value:t.repassword,callback:function(s){t.repassword=s},expression:"repassword"}})],1),t._v(" "),e("el-link",{attrs:{type:"primary",underline:!1,href:"#/Customer/Login"}},[t._v("\n    已有帐号？去登录\n  ")]),t._v(" "),e("div",{staticClass:"input-suffix"},[e("el-button",{staticStyle:{width:"80%"},attrs:{type:"primary"},on:{click:function(s){return t.register()}}},[t._v("注册")])],1)],1)},staticRenderFns:[]};var p=e("VU/8")({data:function(){return{username:"",password:"",repassword:""}},methods:{register:function(){this.$router.push("/Customer/Login")}}},m,!1,function(t){e("0ZA6")},null,null).exports,_={data:function(){return{backimg:0}},components:{Login:d,Register:p},mounted:function(){var t=this;setInterval(function(){t.backimg=t.backimg+1>2?0:t.backimg+1},6e4)}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"customer"},[e("div",{staticClass:"backgound"},[0==t.backimg?e("img",{attrs:{src:"/static/images/background.jpg"}}):t._e(),t._v(" "),1==t.backimg?e("img",{attrs:{src:"/static/images/background1.jpg"}}):t._e(),t._v(" "),2==t.backimg?e("img",{attrs:{src:"/static/images/background2.jpg"}}):t._e()]),t._v(" "),t._m(0),t._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:"/static/images/logo.png"}})])}]};var C=e("VU/8")(_,h,!1,function(t){e("8cBF")},null,null).exports,g={data:function(){return{footer:[{color:""},{color:""},{color:""},{color:""}],act:0,show:!0}},mounted:function(){var t=this;this.highlight(),this.footerposition(),window.onresize=function(){t.footerposition()}},methods:{highlight:function(){var t=this.$route.path;t.indexOf("Application")>=0?this.act=0:t.indexOf("Menu")>=0?this.act=1:t.indexOf("Management")>=0?this.act=2:t.indexOf("Usercenter")>=0&&(this.act=3);for(var s=0;s<this.footer.length;s++)this.footer[s].color="#999";this.footer[this.act].color="rgb(64,158,255)"},footerposition:function(){var t=document.body.offsetWidth;this.$refs.footer.style.left=t>640?(t-640)/2+"px":0}},watch:{$route:function(){this.highlight()}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.show?e("div",{ref:"footer",staticClass:"footer"},[e("router-link",{attrs:{to:"/Application"}},[e("div",{staticClass:"item",style:{color:t.footer[0].color}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("p",{staticClass:"item-name"},[t._v("主页")])])]),t._v(" "),e("router-link",{attrs:{to:"/Menu"}},[e("div",{staticClass:"item",style:{color:t.footer[1].color}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("p",{staticClass:"item-name"},[t._v("添加")])])]),t._v(" "),e("router-link",{attrs:{to:"/Management"}},[e("div",{staticClass:"item",style:{color:t.footer[2].color}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("p",{staticClass:"item-name"},[t._v("管理")])])]),t._v(" "),e("router-link",{attrs:{to:"/Usercenter"}},[e("div",{staticClass:"item",style:{color:t.footer[3].color}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("p",{staticClass:"item-name"},[t._v("我的")])])])],1):t._e()},staticRenderFns:[]};var b=e("VU/8")(g,k,!1,function(t){e("dkNe")},null,null).exports,x={props:{books:Array},data:function(){return{opacity:0,act:0}},computed:{rgba:function(){return"rgba(64,158,255,"+this.opacity+")"}},mounted:function(){this.act=parseInt(this.$route.params.act)},components:{Footer:b,child:r},methods:{scl:function(){var t=this.$refs.main.scrollTop;this.opacity=(t>100?100:t)/100}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"main",staticClass:"lication-main",on:{scroll:function(s){return t.scl()}}},[e("child",{attrs:{rgba:t.rgba}},[e("span",{attrs:{slot:"center-tit"},slot:"center-tit"},[t._v("主页")]),t._v(" "),e("div",{staticClass:"link-right",attrs:{slot:"right-icon"},slot:"right-icon"},[e("router-link",{attrs:{to:"/Usercenter"}},[e("i",{staticClass:"iconfont",staticStyle:{color:"#fff"}},[t._v("")])])],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"bookrack"},[e("ul",{staticClass:"booklist"},t._l(t.books,function(s,n){return e("li",{key:n},[e("router-link",{attrs:{to:{name:"details",params:{bookid:s.id}},book:t.books[n]}},[e("div",{staticClass:"bookcover"},[e("img",{attrs:{src:"/static/images/defaultcover.png",alt:""}})]),t._v(" "),e("div",{staticClass:"bookinfos"},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"new-chapter"},[t._v("已更新到 "+t._s(s.nestchapter)+" 章")])])])],1)}),0)]),t._v(" "),e("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"/static/images/banner.png",alt:""}})])}]};var w=e("VU/8")(x,y,!1,function(t){e("79XU")},null,null).exports,U={data:function(){return{opacity:0,border:"unset",color:"rgba(255,255,255,1)"}},mounted:function(){this.act=parseInt(this.$route.params.act)},components:{child:r,Footer:b},methods:{scl:function(){var t=this.$refs.main.scrollTop;this.opacity=(t>100?100:t)/100,this.border=t>100?"1px solid #f6f6f6":"unset",this.color="rgba(255,255,255,"+(1-(t>100?100:t))+")"},back:function(){this.$router.go(-1)},logout:function(){this.$router.push("/Customer/Login")}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"main",staticClass:"usercenter",on:{scroll:function(s){return t.scl()}}},[e("Header"),t._v(" "),e("child",{attrs:{border:t.border,color:t.color}},[e("div",{staticClass:"link-left",attrs:{slot:"left-icon"},on:{click:function(s){return t.back()}},slot:"left-icon"},[e("i",{staticClass:"iconfont",style:{color:t.color}},[t._v("")])]),t._v(" "),e("span",{attrs:{slot:"center-tit"},slot:"center-tit"},[t._v("个人中心")])]),t._v(" "),e("div",{staticClass:"center-content"},[t._m(0),t._v(" "),e("div",{staticClass:"center-list"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/Usercenter"}},[e("i",{staticClass:"iconfont list-icon",staticStyle:{color:"#ffca28"}},[t._v("")]),t._v(" "),e("span",[t._v("书籍详情")]),t._v(" "),e("i",{staticClass:"iconfont list-arrows"},[t._v("")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/Menu"}},[e("i",{staticClass:"iconfont list-icon",staticStyle:{color:"#19b06a"}},[t._v("")]),t._v(" "),e("span",[t._v("添加")]),t._v(" "),e("i",{staticClass:"iconfont list-arrows"},[t._v("")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/Usercenter"}},[e("i",{staticClass:"iconfont list-icon",staticStyle:{color:"#ff2c2c"}},[t._v("")]),t._v(" "),e("span",[t._v("回收站")]),t._v(" "),e("i",{staticClass:"iconfont list-arrows"},[t._v("")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/Usercenter"}},[e("i",{staticClass:"iconfont list-icon",staticStyle:{color:"#4a90e2"}},[t._v("")]),t._v(" "),e("span",[t._v("关于")]),t._v(" "),e("i",{staticClass:"iconfont list-arrows"},[t._v("")])])],1)])]),t._v(" "),e("el-button",{on:{click:function(s){return t.logout()}}},[t._v("退出登录")])],1),t._v(" "),e("Footer")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"userinfos"},[e("div",{staticClass:"infos"},[e("div",{staticClass:"userhead"},[e("img",{attrs:{src:"/static/images/head.png"}})]),t._v(" "),e("div",{staticClass:"username"},[e("p",{staticClass:"name text-over"},[t._v("404_NotFound")]),t._v(" "),e("div",{staticClass:"sex text-over"},[e("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n            男\n          ")])]),t._v(" "),e("i",{staticClass:"iconfont infos-arrows"},[t._v("")])]),t._v(" "),e("div",{staticClass:"infos-alter"},[e("p",[t._v("编辑个人资料")]),t._v(" "),e("p",[t._v("阅读2052小时  读过12本 ")])])])}]};var R=e("VU/8")(U,$,!1,function(t){e("jwvc")},null,null).exports,F={components:{child:r,Footer:b},methods:{back:function(){this.$router.go(-1)}}},M={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menu"},[e("child",{staticStyle:{"box-shadow":"0 2px 5px #eee"},attrs:{rgba:"#fff"}},[e("div",{staticClass:"link-left",attrs:{slot:"left-icon"},on:{click:function(s){return t.back()}},slot:"left-icon"},[e("i",{staticClass:"iconfont",staticStyle:{color:"#333"}},[t._v("")])]),t._v(" "),e("span",{staticStyle:{color:"#333"},attrs:{slot:"center-tit"},slot:"center-tit"},[t._v("新内容")]),t._v(" "),e("div",{staticClass:"link-right",attrs:{slot:"right-icon"},slot:"right-icon"},[e("router-link",{attrs:{to:"/Usercenter"}},[e("i",{staticClass:"iconfont",staticStyle:{color:"#333","font-size":".48rem"}},[t._v("")])])],1)]),t._v(" "),e("div",{staticClass:"show-container"},[e("router-view")],1),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var S=e("VU/8")(F,M,!1,function(t){e("9CPH")},null,null).exports,E={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Charpter"})},staticRenderFns:[]};var V=e("VU/8")({},E,!1,function(t){e("O4yc")},null,null).exports,A={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Novel"})},staticRenderFns:[]};var H=e("VU/8")({},A,!1,function(t){e("RdRQ")},null,null).exports,L={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Role"})},staticRenderFns:[]};var j=e("VU/8")({},L,!1,function(t){e("Zvv7")},null,null).exports,N={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"volume"})},staticRenderFns:[]};var O=e("VU/8")({},N,!1,function(t){e("jSTl")},null,null).exports,I={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menu-list"},[e("ul",[e("li",{staticClass:"book"},[e("router-link",{attrs:{to:""}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n          新书籍\n        ")])])],1),t._v(" "),e("li",{staticClass:"volume"},[e("router-link",{attrs:{to:""}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n          新卷\n        ")])])],1),t._v(" "),e("li",{staticClass:"chapter"},[e("router-link",{attrs:{to:""}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n          新章节\n        ")])])],1),t._v(" "),e("li",{staticClass:"role"},[e("router-link",{attrs:{to:""}},[e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n          新角色\n        ")])])],1)])])},staticRenderFns:[]};var W=e("VU/8")({},I,!1,function(t){e("kLCY")},null,null).exports,Z={props:{books:Array},components:{child:r,Footer:b},methods:{back:function(){this.$router.go(-1)}}},B={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"management"},[e("child",{staticStyle:{"box-shadow":"0 2px 5px #eee"},attrs:{rgba:"#fff"}},[e("div",{staticClass:"link-left",attrs:{slot:"left-icon"},on:{click:function(s){return t.back()}},slot:"left-icon"},[e("i",{staticClass:"iconfont",staticStyle:{color:"#333"}},[t._v("")])]),t._v(" "),e("span",{staticStyle:{color:"#333"},attrs:{slot:"center-tit"},slot:"center-tit"},[t._v("书籍管理")]),t._v(" "),e("div",{staticClass:"link-right",attrs:{slot:"right-icon"},slot:"right-icon"},[e("router-link",{attrs:{to:"/Usercenter"}},[e("i",{staticClass:"iconfont",staticStyle:{color:"#333"}},[t._v("")])])],1)]),t._v(" "),e("div",{staticClass:"mng-window"},[e("router-view",{attrs:{books:t.books}})],1),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var T=e("VU/8")(Z,B,!1,function(t){e("uI9H")},null,null).exports,q={props:{books:Array}},K={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"book-list"},[e("ul",t._l(t.books,function(s,n){return e("li",{key:n},[e("router-link",{attrs:{to:{name:"details",params:{bookid:s.id}}}},[e("div",{staticClass:"bookcover"},[e("img",{attrs:{src:"/static/images/defaultcover.png",alt:""}})]),t._v(" "),e("div",{staticClass:"bookinfos"},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"creat-time"},[t._v("创建时间："+t._s(s.creattime)+" ")]),t._v(" "),e("div",{staticClass:"last-time"},[t._v("更新时间："+t._s(s.lasttime)+" ")])])])],1)}),0)])},staticRenderFns:[]};var Y=e("VU/8")(q,K,!1,function(t){e("WKiD")},null,null).exports,z={props:{books:Array},mounted:function(){console.log(this.books)}},D={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"book-detaile"})},staticRenderFns:[]};var P=e("VU/8")(z,D,!1,function(t){e("KoGH")},null,null).exports,G=e("VU/8")(null,null,!1,null,null,null).exports,Q=e("VU/8")(null,null,!1,null,null,null).exports,X=e("VU/8")(null,null,!1,null,null,null).exports;n.default.use(v.a);var J=new v.a({routes:[{path:"/Customer",name:"Customer",component:C,children:[{path:"/Customer/Login",name:"login",component:d},{path:"/Customer/Register",name:"register",component:p}]},{path:"/Application",name:"app",component:w},{path:"/Menu",name:"menu",component:S,children:[{path:"/Menu/Chapter",name:"chapter",component:V},{path:"/Menu/Novel",name:"novel",component:H},{path:"/Menu/Role",name:"role",component:j},{path:"/Menu/Volume",name:"volume",component:O},{path:"/Menu/Menulist/",name:"menulist",component:W},{path:"/Menu",redirect:"/Menu/Menulist"}]},{path:"/Management",name:"management",component:T,children:[{path:"/Management/Bookslist",name:"bookslist",component:Y},{path:"/Management/Details/:bookid",name:"details",component:P},{path:"/Management/Equipmng",name:"equipmng",component:G},{path:"/Management/Rolemng",name:"rolemng",component:Q},{path:"/Management/Skillmng",name:"skillmng",component:X},{path:"/Management",redirect:"/Management/Bookslist"}]},{path:"/Usercenter",name:"usercenter",component:R},{path:"/",redirect:"/Customer/Login"}]});n.default.config.productionTip=!1,n.default.use(i.Button),n.default.use(i.Input),n.default.use(i.Link),new n.default({el:"#app",router:J,components:{App:u},template:"<App/>",render:function(t){return t(u)}})},O4yc:function(t,s){},RdRQ:function(t,s){},WKiD:function(t,s){},YSUW:function(t,s){},Zvv7:function(t,s){},dkNe:function(t,s){},jSTl:function(t,s){},jwvc:function(t,s){},kLCY:function(t,s){},tvR6:function(t,s){},uI9H:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.f4ecabc8d91909e209d3.js.map