(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bec449fa"],{"0058":function(t,e,a){"use strict";var o=a("5acc"),n=a.n(o);n.a},"12de":function(t,e,a){"use strict";var o=a("9efd"),n="/api/admin/themes",s={listAll:function(){return Object(o["a"])({url:"".concat(n),method:"get"})},listFiles:function(){return Object(o["a"])({url:"".concat(n,"/files"),method:"get"})},customTpls:function(){return Object(o["a"])({url:"".concat(n,"/files/custom"),method:"get"})},active:function(t){return Object(o["a"])({url:"".concat(n,"/").concat(t,"/activation"),method:"post"})},getActivatedTheme:function(){return Object(o["a"])({url:"".concat(n,"/activation"),method:"get"})},delete:function(t){return Object(o["a"])({url:"".concat(n,"/").concat(t),method:"delete"})},fetchConfiguration:function(t){return Object(o["a"])({url:"".concat(n,"/").concat(t,"/configurations"),method:"get"})},fetchSettings:function(t){return Object(o["a"])({url:"".concat(n,"/").concat(t,"/settings"),method:"get"})},saveSettings:function(t,e){return Object(o["a"])({url:"".concat(n,"/").concat(t,"/settings"),data:e,method:"post"})},getProperty:function(t){return Object(o["a"])({url:"".concat(n,"/").concat(t),method:"get"})},upload:function(t,e,a){return Object(o["a"])({url:"".concat(n,"/upload"),timeout:864e4,data:t,onUploadProgress:e,cancelToken:a,method:"post"})},fetching:function(t){return Object(o["a"])({url:"".concat(n,"/fetching"),params:{uri:t},method:"post"})},getContent:function(t){return Object(o["a"])({url:"".concat(n,"/files/content"),params:{path:t},method:"get"})},saveContent:function(t,e){return Object(o["a"])({url:"".concat(n,"/files/content"),params:{path:t,content:e},method:"put"})},reload:function(){return Object(o["a"])({url:"".concat(n,"/reload"),method:"post"})}};e["a"]=s},"5acc":function(t,e,a){},ed66:function(t,e,a){"use strict";var o=a("9efd"),n="/api/admin/sheets",s={list:function(){return Object(o["a"])({url:n,method:"get"})},get:function(t){return Object(o["a"])({url:"".concat(n,"/").concat(t),method:"get"})},create:function(t){return Object(o["a"])({url:n,method:"post",data:t})},update:function(t,e){return Object(o["a"])({url:"".concat(n,"/").concat(t),method:"put",data:e})},updateStatus:function(t,e){return Object(o["a"])({url:"".concat(n,"/").concat(t,"/").concat(e),method:"put"})},delete:function(t){return Object(o["a"])({url:"".concat(n,"/").concat(t),method:"delete"})},sheetStatus:{PUBLISHED:{color:"green",status:"success",text:"已发布"},DRAFT:{color:"yellow",status:"warning",text:"草稿"},RECYCLE:{color:"red",status:"error",text:"回收站"}}};e["a"]=s},f585:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header-index-wide"},[a("a-row",{attrs:{gutter:12}},[a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{"margin-bottom":"16px"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入页面标题"}]}],expression:"['title', { rules: [{ required: true, message: '请输入页面标题' }] }]"}],attrs:{size:"large",placeholder:"请输入页面标题"},model:{value:t.sheetToStage.title,callback:function(e){t.$set(t.sheetToStage,"title",e)},expression:"sheetToStage.title"}})],1),a("div",{attrs:{id:"editor"}},[a("mavon-editor",{attrs:{boxShadow:!1,toolbars:t.toolbars,ishljs:!0,autofocus:!1},model:{value:t.sheetToStage.originalContent,callback:function(e){t.$set(t.sheetToStage,"originalContent",e)},expression:"sheetToStage.originalContent"}})],1)]),a("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[a("a-drawer",{attrs:{title:"页面设置",width:t.isMobile()?"100%":"460",closable:!0,visible:t.visible},on:{close:t.onClose}},[a("div",{staticClass:"post-setting-drawer-content"},[a("div",{style:{marginBottom:"16px"}},[a("h3",{staticClass:"post-setting-drawer-title"},[t._v("基本设置")]),a("div",{staticClass:"post-setting-drawer-item"},[a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{label:"页面路径：",help:"https://localhost:8090/s/"+(t.sheetToStage.url?t.sheetToStage.url:"{auto_generate}")}},[a("a-input",{model:{value:t.sheetToStage.url,callback:function(e){t.$set(t.sheetToStage,"url",e)},expression:"sheetToStage.url"}})],1),a("a-form-item",{attrs:{label:"开启评论："}},[a("a-radio-group",{attrs:{defaultValue:!1},model:{value:t.sheetToStage.disallowComment,callback:function(e){t.$set(t.sheetToStage,"disallowComment",e)},expression:"sheetToStage.disallowComment"}},[a("a-radio",{attrs:{value:!1}},[t._v("开启")]),a("a-radio",{attrs:{value:!0}},[t._v("关闭")])],1)],1),a("a-form-item",{attrs:{label:"自定义模板："}},[a("a-select",{model:{value:t.sheetToStage.template,callback:function(e){t.$set(t.sheetToStage,"template",e)},expression:"sheetToStage.template"}},[a("a-select-option",{key:"",attrs:{value:""}},[t._v("无")]),t._l(t.customTpls,function(e){return a("a-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})],2)],1)],1)],1)]),a("a-divider"),a("div",{style:{marginBottom:"16px"}},[a("h3",{staticClass:"post-setting-drawer-title"},[t._v("缩略图")]),a("div",{staticClass:"post-setting-drawer-item"},[a("div",{staticClass:"sheet-thum"},[a("img",{staticClass:"img",attrs:{src:t.sheetToStage.thumbnail||"//i.loli.net/2019/05/05/5ccf007c0a01d.png"},on:{click:t.handleShowThumbDrawer}}),a("a-button",{staticClass:"sheet-thum-remove",attrs:{type:"dashed"},on:{click:t.handlerRemoveThumb}},[t._v("移除")])],1)])]),a("a-divider",{staticClass:"divider-transparent"})],1),a("AttachmentSelectDrawer",{attrs:{drawerWidth:460},on:{listenToSelect:t.handleSelectSheetThumb},model:{value:t.thumDrawerVisible,callback:function(e){t.thumDrawerVisible=e},expression:"thumDrawerVisible"}}),a("div",{staticClass:"bottom-control"},[a("a-button",{staticStyle:{marginRight:"8px"},on:{click:t.handleDraftClick}},[t._v("保存草稿")]),a("a-button",{attrs:{type:"primary"},on:{click:t.handlePublishClick}},[t._v("发布")])],1)],1)],1)],1),a("AttachmentDrawer",{model:{value:t.attachmentDrawerVisible,callback:function(e){t.attachmentDrawerVisible=e},expression:"attachmentDrawerVisible"}}),a("footer-tool-bar",{style:{width:t.isSideMenu()&&t.isDesktop()?"calc(100% - "+(t.sidebarOpened?256:80)+"px)":"100%"}},[a("a-button",{attrs:{type:"primary"},on:{click:t.handleShowDrawer}},[t._v("发布")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:t.handleShowAttachDrawer}},[t._v("附件库")])],1)],1)},n=[],s=a("b2d8"),r=a("ed4e"),i=a("3993"),c=a("5a70"),l=a("ac0d"),u=a("2749"),h=(a("64e1"),a("ed66")),d=a("12de"),m={components:{mavonEditor:s["mavonEditor"],FooterToolBar:c["a"],AttachmentDrawer:r["a"],AttachmentSelectDrawer:i["a"]},mixins:[l["a"],l["b"]],data:function(){return{toolbars:u["a"],wrapperCol:{xl:{span:24},sm:{span:24},xs:{span:24}},attachmentDrawerVisible:!1,thumDrawerVisible:!1,visible:!1,customTpls:[],sheetToStage:{},timer:null}},created:function(){this.loadCustomTpls(),clearInterval(this.timer),this.timer=null,this.autoSaveTimer()},destroyed:function(){clearInterval(this.timer),this.timer=null},beforeRouteEnter:function(t,e,a){var o=t.query.sheetId;a(function(t){o&&h["a"].get(o).then(function(e){var a=e.data.data;t.sheetToStage=a})})},methods:{loadCustomTpls:function(){var t=this;d["a"].customTpls().then(function(e){t.customTpls=e.data.data})},handleShowAttachDrawer:function(){this.attachmentDrawerVisible=!0},handleShowThumbDrawer:function(){this.thumDrawerVisible=!0},handleShowDrawer:function(){this.visible=!0},handlePublishClick:function(){this.sheetToStage.status="PUBLISHED",this.createOrUpdateSheet()},handleDraftClick:function(){this.sheetToStage.status="DRAFT",this.createOrUpdateSheet()},handlerRemoveThumb:function(){this.sheetToStage.thumbnail=null},createOrUpdateSheet:function(){var t=this;this.sheetToStage.id?h["a"].update(this.sheetToStage.id,this.sheetToStage).then(function(e){t.$log.debug("Updated sheet",e.data.data),t.$message.success("页面更新成功")}):h["a"].create(this.sheetToStage).then(function(e){t.$log.debug("Created sheet",e.data.data),t.$message.success("页面创建成功"),t.sheetToStage=e.data.data})},onClose:function(){this.visible=!1},handleSelectSheetThumb:function(t){this.sheetToStage.thumbnail=t.path,this.thumDrawerVisible=!1},autoSaveTimer:function(){var t=this;null==this.timer&&(this.timer=setInterval(function(){null!=t.sheetToStage.title&&null!=t.sheetToStage.originalContent&&(t.sheetToStage.categoryIds=t.selectedCategoryIds,t.sheetToStage.tagIds=t.selectedTagIds,t.sheetToStage.id?h["a"].update(t.sheetToStage.id,t.sheetToStage).then(function(e){t.$log.debug("Auto updated sheet",e.data.data)}):h["a"].create(t.sheetToStage).then(function(e){t.$log.debug("Auto saved sheet",e.data.data),t.sheetToStage=e.data.data}))},15e3))}}},g=m,p=(a("0058"),a("2877")),f=Object(p["a"])(g,o,n,!1,null,"af5a5c54",null);e["default"]=f.exports}}]);