webpackJsonp([1],{"DpE+":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".txtCenter[data-v-85312ea0]{text-align:center;border:0;border-radius:20px;padding:0 0 32px;padding:0 0 2rem}.buttonSpace[data-v-85312ea0]{margin-right:8px;margin-right:.5rem;border-radius:10px;padding:1px 10px;background-color:#474747}.imageStyle[data-v-85312ea0]{background:#474747;padding:8px;padding:.5rem;border-top-right-radius:20px;border-top-left-radius:20px;width:100%}h2[data-v-85312ea0]{padding:16px 0;padding:1rem 0}",""])},EYqJ:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"h1[data-v-1a710fe6]{padding:48px 0 0 48px;padding:3rem 0 0 3rem;color:#464d89;font-size:48px;font-size:3rem;margin-left:-40px;margin-left:-2.5rem}",""])},GQJE:function(t,a,e){"use strict";var r=e("rSHU");a.a={components:{ProjectPreview:r.a}}},KpwB:function(t,a,e){"use strict";var r=e("sY31");a.a={components:{ProjectList:r.a}}},Luit:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("KpwB"),s=e("wj5f"),i=e("VU/8")(r.a,s.a,!1,null,null,null);i.options.__file="pages/projects/index.vue",a.default=i.exports},Puuc:function(t,a,e){"use strict";a.a={name:"ProjectPreview",props:{title:{type:String,required:!0},thumbnail:{type:String,required:!0},hashtags1:{type:String,required:!0},hashtags2:{type:String,required:!0},hashtags3:{type:String,required:!0},uriHeroku:{type:String,required:!0},uriGH:{type:String,required:!0}}}},SIlr:function(t,a,e){var r=e("DpE+");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("5171b117",r,!1,{sourceMap:!1})},VgTF:function(t,a,e){var r=e("EYqJ");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("a6cb908a",r,!1,{sourceMap:!1})},pvsQ:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{staticClass:"txtCenter"},[e("div",{staticStyle:{"box-shadow":"20px 20px 50px grey","border-radius":"20px"}},[e("b-img",{staticClass:"imageStyle",attrs:{center:"",src:""+t.thumbnail}}),e("div",{staticStyle:{background:"white","border-radius":"20px"}},[e("h2",[t._v(t._s(t.title))]),e("ul",{staticClass:"list-inline"},[e("li",{staticClass:"list-inline-item",attrs:{"data-aos":"fade-left","data-aos-delay":"300"}},[e("a",{attrs:{href:""+t.uriHeroku}},[e("b-img",{attrs:{src:"/www.png"}})],1)]),e("li",{staticClass:"list-inline-item",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("a",{attrs:{href:"https://github.com/Jethzabell/"+t.uriGH}},[e("b-img",{attrs:{src:"/github.png"}})],1)]),e("li",{staticClass:"list-inline-item",attrs:{"data-aos":"fade-right","data-aos-delay":"300"}},[e("a",{attrs:{href:"https://github.com/Jethzabell/"+t.uriGH+"/blob/master/package.json"}},[e("b-img",{attrs:{src:"/npm.png"}})],1)])]),e("b-card-body",[e("b-button",{staticClass:"buttonSpace",attrs:{size:"sm"}},[t._v(t._s(t.hashtags1))]),e("b-button",{staticClass:"buttonSpace",attrs:{size:"sm"}},[t._v(t._s(t.hashtags2))]),e("b-button",{staticClass:"buttonSpace",attrs:{size:"sm"}},[t._v(t._s(t.hashtags3))])],1)],1)],1)])};r._withStripped=!0;var s={render:r,staticRenderFns:[]};a.a=s},rSHU:function(t,a,e){"use strict";var r=e("Puuc"),s=e("pvsQ"),i=!1;var n=function(t){i||e("SIlr")},o=e("VU/8")(r.a,s.a,!1,n,"data-v-85312ea0",null);o.options.__file="components/ProjectsCards/ProjectPreview.vue",a.a=o.exports},sPa1:function(t,a,e){"use strict";var r=function(){var t=this.$createElement,a=this._self._c||t;return a("b-container",[a("h1",[this._v("Projects")]),a("b-row",[a("b-card-group",{attrs:{deck:""}},[a("ProjectPreview",{attrs:{title:"Pizza Planet",thumbnail:"/pizzaPlanet.png",hashtags1:"#vue/vuex",hashtags2:"#firebase",hashtags3:"#auth",uriHeroku:"https://github.com/Jethzabell",uriGH:"Pizza-DashBoard"}}),a("ProjectPreview",{attrs:{title:"Computer Graphics",thumbnail:"/webGl.png",hashtags1:"#WebGL",hashtags2:"#linearAlgebra",hashtags3:"#2014",uriHeroku:"https://jethzabell.github.io/computergraphics/",uriGH:"computergraphics"}}),a("ProjectPreview",{attrs:{title:"Developer Profiles",thumbnail:"/devProfiles.png",hashtags1:"#bcryptjs",hashtags2:"#mongodb ",hashtags3:"#react",uriHeroku:"https://blooming-mountain-77808.herokuapp.com/",uriGH:"profiles"}})],1)],1),a("b-row",[a("b-card-group",{attrs:{deck:""}},[a("ProjectPreview",{attrs:{title:"Chat App",thumbnail:"/chatApp.png",hashtags1:"#node",hashtags2:"#googleapi",hashtags3:"#socket.io",uriHeroku:"https://jnodechatapp.herokuapp.com/",uriGH:"node-chat-app"}}),a("ProjectPreview",{attrs:{title:"Munchkin",thumbnail:"/munchkin.png",hashtags1:"#firebase",hashtags2:"#auth ",hashtags3:"#2014",uriHeroku:"https://jethzabell.github.io/MunchkinV2/",uriGH:"https://github.com/Jethzabell/MunchkinV2"}}),a("ProjectPreview",{attrs:{title:"Kitty",thumbnail:"kittyBrowser.png",hashtags1:"#react",hashtags2:"#node",hashtags3:"#smartContracts",uriHeroku:"https://kitty-browser.herokuapp.com/",uriGH:"kittyBrowser"}})],1)],1)],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};a.a=s},sY31:function(t,a,e){"use strict";var r=e("GQJE"),s=e("sPa1"),i=!1;var n=function(t){i||e("VgTF")},o=e("VU/8")(r.a,s.a,!1,n,"data-v-1a710fe6",null);o.options.__file="components/ProjectsCards/ProjectList.vue",a.a=o.exports},wj5f:function(t,a,e){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("ProjectList")};r._withStripped=!0;var s={render:r,staticRenderFns:[]};a.a=s}});