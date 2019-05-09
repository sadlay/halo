(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70d656f6"],{"0381":function(t,a,s){},"306f":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("a-row",{staticClass:"height-100",attrs:{type:"flex",justify:"center",align:"middle"}},[s("a-col",{attrs:{xl:8,md:12,sm:20,xs:24}},[s("div",{staticClass:"card-container"},[s("a-card",{staticClass:"install-card",attrs:{bordered:!1,title:"Halo 安装向导"}},[s("a-steps",{attrs:{current:t.stepCurrent}},[s("a-step",{attrs:{title:"博主信息"}}),s("a-step",{attrs:{title:"博客信息"}}),s("a-step",{attrs:{title:"数据迁移"}})],1),s("a-divider",{attrs:{dashed:""}}),s("a-form",{directives:[{name:"show",rawName:"v-show",value:0==t.stepCurrent,expression:"stepCurrent == 0"}],attrs:{layout:"horizontal"}},[s("a-form-item",{staticClass:"animated fadeInUp"},[s("a-input",{attrs:{placeholder:"用户名"},model:{value:t.installation.username,callback:function(a){t.$set(t.installation,"username",a)},expression:"installation.username"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),s("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.1s"}},[s("a-input",{attrs:{placeholder:"用户昵称"},model:{value:t.installation.nickname,callback:function(a){t.$set(t.installation,"nickname",a)},expression:"installation.nickname"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"smile"},slot:"prefix"})],1)],1),s("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.2s"}},[s("a-input",{attrs:{placeholder:"用户邮箱"},model:{value:t.installation.email,callback:function(a){t.$set(t.installation,"email",a)},expression:"installation.email"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),s("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.3s"}},[s("a-input",{attrs:{type:"password",placeholder:"用户密码"},model:{value:t.installation.password,callback:function(a){t.$set(t.installation,"password",a)},expression:"installation.password"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),s("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.4s"}},[s("a-input",{attrs:{type:"password",placeholder:"确定密码"},model:{value:t.installation.confirmPassword,callback:function(a){t.$set(t.installation,"confirmPassword",a)},expression:"installation.confirmPassword"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),s("a-form",{directives:[{name:"show",rawName:"v-show",value:1==t.stepCurrent,expression:"stepCurrent == 1"}],attrs:{layout:"horizontal"}},[s("a-form-item",{staticClass:"animated fadeInUp"},[s("a-input",{attrs:{placeholder:"博客地址"},model:{value:t.installation.url,callback:function(a){t.$set(t.installation,"url",a)},expression:"installation.url"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"link"},slot:"prefix"})],1)],1),s("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.2s"}},[s("a-input",{attrs:{placeholder:"博客标题"},model:{value:t.installation.title,callback:function(a){t.$set(t.installation,"title",a)},expression:"installation.title"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"book"},slot:"prefix"})],1)],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:2==t.stepCurrent,expression:"stepCurrent == 2"}]},[s("a-alert",{staticClass:"animated fadeInUp",staticStyle:{"margin-bottom":"1rem"},attrs:{message:"如果有迁移需求，请点击并选择'迁移文件'",type:"info"}}),s("Upload",{staticClass:"animated fadeIn",style:{"animation-delay":"0.2s"},attrs:{name:t.migrationUploadName,accept:"application/json",uploadHandler:t.handleMigrationUpload},on:{remove:t.handleMigrationFileRemove}},[s("p",{staticClass:"ant-upload-drag-icon"},[s("a-icon",{attrs:{type:"inbox"}})],1),s("p",{staticClass:"ant-upload-text"},[t._v("点击选择文件或将文件拖拽到此处")]),s("p",{staticClass:"ant-upload-hint"},[t._v("仅支持单个文件上传")])])],1),s("a-row",{staticClass:"install-action",attrs:{type:"flex",justify:"space-between"}},[s("div",[0!=t.stepCurrent?s("a-button",{staticClass:"previus-button",on:{click:function(a){t.stepCurrent--}}},[t._v("上一步")]):t._e(),2!=t.stepCurrent?s("a-button",{attrs:{type:"primary"},on:{click:function(a){t.stepCurrent++}}},[t._v("下一步")]):t._e()],1),2==t.stepCurrent?s("a-button",{attrs:{type:"danger",icon:"upload"},on:{click:t.handleInstall}},[t._v("安装")]):t._e()],1)],1)],1)])],1)],1)},e=[],n=s("795b"),l=s.n(n),o=s("50fc"),r=s("9efd"),c="/api/admin/recoveries",p={migrate:function(t){return Object(r["a"])({url:"".concat(c,"/migrations/v0_4_3"),data:t,method:"post"})}},d=p,u={data:function(){return{formItemLayout:{labelCol:{xs:{span:24},sm:{span:5},lg:{span:4},xl:{span:4},xxl:{span:3}},wrapperCol:{xs:{span:24},sm:{span:19},lg:{span:20},xl:{span:20},xxl:{span:21}}},installation:{},migrationUploadName:"file",migrationData:null,stepCurrent:0}},created:function(){this.installation.url=window.location.protocol+"//"+window.location.host},methods:{handleMigrationUpload:function(t){var a=this;return this.$log.debug("Selected data",t),this.migrationData=t,new l.a(function(t,s){a.$log.debug("Handle uploading"),t()})},handleMigrationFileRemove:function(t){this.$log.debug("Removed file",t),this.$log.debug("Migration file from data",this.migrationData.get(this.migrationUploadName)),this.migrationData.get(this.migrationUploadName).uid===t.uid&&(this.migrationData=null,this.migrationFile=null)},install:function(){var t=this;o["a"].install(this.installation).then(function(a){t.$log.debug("Installation response",a),t.$message.success("安装成功"),setTimeout(function(){t.$router.push({name:"Dashboard"})},300)})},handleInstall:function(){var t=this,a=this.installation.password,s=this.installation.confirmPassword;this.$log.debug("Password",a),this.$log.debug("Confirm password",s),a===s?this.migrationData?d.migrate(this.migrationData).then(function(a){t.$log.debug("Migrated successfullly"),t.$message.success("数据迁移成功"),t.install()}):this.install():this.$message.error("确认密码和密码不匹配")}}},m=u,f=(s("8219"),s("2877")),g=Object(f["a"])(m,i,e,!1,null,"7e6c753c",null);a["default"]=g.exports},8219:function(t,a,s){"use strict";var i=s("0381"),e=s.n(i);e.a}}]);