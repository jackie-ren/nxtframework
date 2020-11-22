(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c7119d8"],{"1aa6":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-card",{staticStyle:{"margin-top":"10px"}},[r("el-form",{attrs:{"label-position":"top","label-width":"80px",model:t.formLabelAlign}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:t.NxtStructProduct.productName,callback:function(e){t.$set(t.NxtStructProduct,"productName",e)},expression:"NxtStructProduct.productName"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"促销语"}},[r("el-input",{model:{value:t.NxtStructProduct.productSubtitle,callback:function(e){t.$set(t.NxtStructProduct,"productSubtitle",e)},expression:"NxtStructProduct.productSubtitle"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"产品类别"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.NxtStructProduct.categoryId,callback:function(e){t.$set(t.NxtStructProduct,"categoryId",e)},expression:"NxtStructProduct.categoryId"}},t._l(t.category_list,(function(t){return r("el-option",{key:t.category_id,attrs:{label:t.category_name_display,value:t.category_id}})})),1),t._v(" "),r("router-link",{attrs:{to:"/product/kind"}},[r("el-button",[t._v("类别管理")])],1)],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"货号"}},[r("el-input",{staticClass:"input_small",model:{value:t.NxtStructProduct.itemNo,callback:function(e){t.$set(t.NxtStructProduct,"itemNo",e)},expression:"NxtStructProduct.itemNo"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"品牌"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.NxtStructProduct.brandId,callback:function(e){t.$set(t.NxtStructProduct,"brandId",e)},expression:"NxtStructProduct.brandId"}},t._l(t.brand_list,(function(t){return r("el-option",{key:t.id,attrs:{label:t.brandName,value:t.id}})})),1),t._v(" "),r("router-link",{attrs:{to:"/product/kind"}},[r("el-button",[t._v("品牌管理")])],1)],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"最低起购"}},[r("el-input",{staticClass:"input_small",model:{value:t.NxtStructProduct.dealQuantityMin,callback:function(e){t.$set(t.NxtStructProduct,"dealQuantityMin",e)},expression:"NxtStructProduct.dealQuantityMin"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"单次最多购买"}},[r("el-input",{staticClass:"input_small",model:{value:t.NxtStructProduct.dealQuantityMax,callback:function(e){t.$set(t.NxtStructProduct,"dealQuantityMax",e)},expression:"NxtStructProduct.dealQuantityMax"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"运费模版"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.NxtStructProduct.deliveryConfigId,callback:function(e){t.$set(t.NxtStructProduct,"deliveryConfigId",e)},expression:"NxtStructProduct.deliveryConfigId"}},t._l(t.delivery_config_list,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),r("router-link",{attrs:{to:"/product/kind"}},[r("el-button",[t._v("模版管理")])],1)],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"产品规格"}},[r("el-radio-group",{model:{value:t.NxtStructProduct.withSku,callback:function(e){t.$set(t.NxtStructProduct,"withSku",e)},expression:"NxtStructProduct.withSku"}},[r("el-radio",{staticClass:"radio",attrs:{label:!1}},[t._v("单一规格")]),t._v(" "),r("el-radio",{staticClass:"radio",attrs:{label:!0}},[t._v("多规格")])],1)],1)],1)],1),t._v(" "),0==t.NxtStructProduct.withSku?r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"价格"}},[r("el-input",{staticClass:"input_small",model:{value:t.NxtStructProduct.price,callback:function(e){t.$set(t.NxtStructProduct,"price",e)},expression:"NxtStructProduct.price"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"折扣"}},[r("el-input",{staticClass:"input_small",model:{value:t.NxtStructProduct.priceDiscount,callback:function(e){t.$set(t.NxtStructProduct,"priceDiscount",e)},expression:"NxtStructProduct.priceDiscount"}})],1)],1)],1):t._e(),t._v(" "),0==t.NxtStructProduct.withSku?r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"总库存"}},[r("el-input",{staticClass:"input_small",model:{value:t.NxtStructProduct.inventoryQuantity,callback:function(e){t.$set(t.NxtStructProduct,"inventoryQuantity",e)},expression:"NxtStructProduct.inventoryQuantity"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}})],1):t._e(),t._v(" "),1==t.NxtStructProduct.withSku?r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"产品规格"}},[r("el-card",{attrs:{shadow:"never"}},[r("el-card",{attrs:{shadow:"never"}},[r("el-form-item",{attrs:{label:"规格名称"}},[t._l(t.attributeNameTags,(function(e,i){return r("el-tag",{key:i,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return t.handleAttributeNameClose(e)}}},[t._v("\n                "+t._s(e.valueName)+"\n              ")])})),t._v(" "),r("el-input",{ref:"saveAttributeNameTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.AttributeNameinputValue,callback:function(e){t.AttributeNameinputValue=e},expression:"AttributeNameinputValue"}}),t._v(" "),r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showAttributeNameInput}},[t._v("添加规格")]),t._v(" "),r("span",{staticClass:"tips"},[t._v("   请填写规格名，如：颜色、容量、尺码等………（最多可以添加2种）")])],2)],1),t._v(" "),r("el-row",[t._v(" ")]),t._v(" "),r("el-card",{attrs:{shadow:"never"}},t._l(t.NxtStructProduct.skuList,(function(e,i){return r("el-form-item",{key:i,attrs:{label:e.skuKeyName}},[t._l(e.skuValueList,(function(i,a){return r("el-tag",{key:a,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return t.handleColorClose(e.skuKeyName,i)}}},[t._v("\n              "+t._s(i.skuValueName)+"\n            ")])})),t._v(" "),r("el-input",{ref:"saveColorTagInput",refInFor:!0,staticClass:"input-new-tag",attrs:{size:"small"},model:{value:e.skuValueNameNew,callback:function(r){t.$set(e,"skuValueNameNew",r)},expression:"item.skuValueNameNew"}}),t._v(" "),r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(r){return t.handleConfirm(e.skuKeyName,e)}}},[t._v("增加")])],2)})),1)],1)],1)],1)],1):t._e(),t._v(" "),1==t.NxtStructProduct.withSku?r("el-form-item",[r("el-card",{attrs:{shadow:"never"}},[r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.NxtStructProduct.skuValuePriceEtcList,"tooltip-effect":"dark"}},[r("el-table-column",{attrs:{label:"规格名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.skuValueName1)+","+t._s(e.row.skuValueName2))]}}],null,!1,3135057279)}),t._v(" "),r("el-table-column",{attrs:{label:"库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{model:{value:e.row.skuValueInventoryQuantity,callback:function(r){t.$set(e.row,"skuValueInventoryQuantity",r)},expression:"scope.row.skuValueInventoryQuantity"}})]}}],null,!1,433292510)}),t._v(" "),r("el-table-column",{attrs:{label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{model:{value:e.row.skuValuePrice,callback:function(r){t.$set(e.row,"skuValuePrice",r)},expression:"scope.row.skuValuePrice"}})]}}],null,!1,1337169890)}),t._v(" "),r("el-table-column",{attrs:{label:"折扣"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-input",{model:{value:e.row.skuValuePriceDiscount,callback:function(r){t.$set(e.row,"skuValuePriceDiscount",r)},expression:"scope.row.skuValuePriceDiscount"}})]}}],null,!1,3777165055)}),t._v(" "),r("el-table-column",[r("span",{staticClass:"tips"},[t._v("  1表示不打折，0.95是95折，以此类推。")])]),t._v(" "),r("el-table-column")],1)],1)],1):t._e(),t._v(" "),r("el-form-item",{attrs:{label:"产品图片"}},[r("div",{staticClass:"box"},[r("draggable",t._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(e){t.productForm.drag=!0},end:function(e){t.productForm.drag=!1}},model:{value:t.productForm.productPicList,callback:function(e){t.$set(t.productForm,"productPicList",e)},expression:"productForm.productPicList"}},"draggable",t.dragOptions,!1),t._l(t.productForm.productPicList,(function(e,i){return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.productForm.loadingapp,expression:"productForm.loadingapp"}],key:i,staticClass:"img-wrapper divBox",on:{mouseenter:function(e){return t.showDelBtn(i)},mouseleave:t.hiddenDelBtn}},[e?r("img",{staticClass:"imgSty",attrs:{src:e,width:"148",height:"148"}}):t._e(),t._v(" "),r("div",{class:{mask:i===t.productForm.currentDelBtn}}),t._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:i===t.productForm.currentDelBtn,expression:"index===productForm.currentDelBtn"}],staticClass:"el-icon-delete delIcon",on:{click:function(r){return t.deleImg(e,i)}}})])})),0),t._v(" "),r("el-upload",{attrs:{"show-file-list":!1,action:"","list-type":"picture-card","http-request":t.handleUploadHttpRequest,"on-success":t.handlePictureSuccess}},[r("i",{staticClass:"el-icon-plus"})])],1)]),t._v(" "),r("el-form-item",{staticStyle:{"margin-bottom":"30px"}},[r("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.NxtStructProduct.productDescription,callback:function(e){t.$set(t.NxtStructProduct,"productDescription",e)},expression:"NxtStructProduct.productDescription"}})],1),t._v(" "),r("el-form-item",[r("el-upload",{staticClass:"pic upload-demo",attrs:{action:"/api/admin/upload/public_pic",headers:t.headers,"show-file-list":!1,"on-success":t.UploadOnSuccess,"before-upload":t.beforeAvatarUpload}},[r("el-button",[t._v("上传插入图片")])],1)],1),t._v(" "),r("el-form-item",[t._v("\n        \n        推荐\n        "),r("el-switch",{model:{value:t.NxtStructProduct.isRecommend,callback:function(e){t.$set(t.NxtStructProduct,"isRecommend",e)},expression:"NxtStructProduct.isRecommend"}}),t._v("\n        热卖\n        "),r("el-switch",{model:{value:t.NxtStructProduct.isHot,callback:function(e){t.$set(t.NxtStructProduct,"isHot",e)},expression:"NxtStructProduct.isHot"}}),t._v("\n        新品\n        "),r("el-switch",{model:{value:t.NxtStructProduct.isNew,callback:function(e){t.$set(t.NxtStructProduct,"isNew",e)},expression:"NxtStructProduct.isNew"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("发布")]),t._v("\n            \n        立即上架\n        "),r("el-switch",{model:{value:t.NxtStructProduct.isSelling,callback:function(e){t.$set(t.NxtStructProduct,"isSelling",e)},expression:"NxtStructProduct.isSelling"}})],1)],1)],1)],1)},a=[],n=(r("96cf"),r("3b8d")),u=(r("a481"),r("ac6a"),r("db72")),c=r("8256"),s=r("c4c8"),l=r("2f62"),o=r("5f87"),d=r("1980"),p=r.n(d),m={components:{Tinymce:c["a"],draggable:p.a},data:function(){return{NxtStructProduct:{id:null,categoryId:null,brandId:null,productName:"",productSubtitle:"",dealQuantityMin:1,dealQuantityMax:10,freeShipping:!1,deliveryConfigId:null,itemNo:"",withSku:!1,price:0,priceDiscount:1,inventoryQuantity:100,productDescription:"",isRecommend:!1,isHot:!1,isNew:!0,isSelling:!0,isTrash:!1,skuList:[],skuValuePriceEtcList:[],pictureList:[]},NxtStructProductSku:{skuId:null,skuKeyName:null,skuValueList:[]},NxtStructProductSkuValue:{id:null,skuId:null,skuValueName:null},NxtStructProductSkuValuePriceEtc:{skuValueName1:null,skuValueName2:null,skuValueInventoryQuantity:100,skuValuePrice:0,skuValuePriceDiscount:1},NxtStructProductPicture:{id:null,url:null},checked:!1,formLabelAlign:{product_name:"",product_description:"",category_id:"",is_recommend:!1,product_picture_list:[],product_subtitle:"",price:"",product_sku:[]},headers:{token:Object(o["a"])(),user_id:Object(o["b"])()},imageUrl:"",dialogVisible:!1,productForm:{productPicList:[],currentDelBtn:-1,loadingapp:!1,drag:!1,productObj:[]},colorTags:[],attributeNameTags:[],ColorinputVisible:!1,AttributeNameinputVisible:!1,ColorinputValue:"",AttributeNameinputValue:"",inputValue:""}},computed:Object(u["a"])(Object(u["a"])({},Object(l["c"])({category_list:function(t){return t.product.CategoryListData},delivery_config_list:function(t){return t.delivery.deliveryConfigList},brand_list:function(t){return t.brand.brandList}})),{},{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}}),created:function(){this.$store.dispatch("product/getCategory"),this.$store.dispatch("brand/getBrandList"),this.$store.dispatch("delivery/getDeliveryConfigList")},methods:{handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type,r=t.size/1024/1024<20;return e||this.$message.error("上传图片只能是 JPG、PNG、GIF 格式之一!"),r||this.$message.error("上传图片大小不能超过 20MB!"),e&&r},handleColorClose:function(t,e){for(var r=this,i=this,a=i.NxtStructProduct.skuValuePriceEtcList.length-1;a>=0;a--){var n=i.NxtStructProduct.skuValuePriceEtcList[a];n.skuValueName1!=e.skuValueName&&n.skuValueName2!=e.skuValueName||i.NxtStructProduct.skuValuePriceEtcList.splice(a,1)}this.NxtStructProduct.skuList.forEach((function(i){if(i.skuKeyName===t)return i.skuValueList.splice(i.skuValueList.indexOf(e),1),void(0==i.skuValueList.length&&r.NxtStructProduct.skuList.splice(r.NxtStructProduct.skuList.indexOf(i),1))}))},handleAttributeNameClose:function(t){this.attributeNameTags.splice(this.attributeNameTags.indexOf(t),1)},showAttributeNameInput:function(){var t=this;this.AttributeNameinputVisible=!0,this.$nextTick((function(e){t.$refs.saveAttributeNameTagInput.$refs.input.focus()}))},handleConfirm:function(t,e){var r=this;if(e.skuValueNameNew){var i=0;r.NxtStructProduct.skuList.forEach((function(a){if(i++,a.skuKeyName!==t){a.skuValueList.forEach((function(t){var a=e.skuValueNameNew,n=t.skuValueName;if(1==i){var u=[n,a];a=u[0],n=u[1]}var c=JSON.parse(JSON.stringify(r.NxtStructProductSkuValuePriceEtc));c.skuValueName1=a,c.skuValueName2=n,r.NxtStructProduct.skuValuePriceEtcList.push(c)}));for(var n=r.NxtStructProduct.skuValuePriceEtcList.length-1;n>=0;n--){var u=r.NxtStructProduct.skuValuePriceEtcList[n];null!=u.skuValueName1&&null!=u.skuValueName2||r.NxtStructProduct.skuValuePriceEtcList.splice(n,1)}}else{if(a.skuValueList.push({skuValueName:e.skuValueNameNew}),1==r.NxtStructProduct.skuList.length){var c=JSON.parse(JSON.stringify(r.NxtStructProductSkuValuePriceEtc));c.skuValueName1=e.skuValueNameNew,r.NxtStructProduct.skuValuePriceEtcList.push(c)}a.skuValueName=null}}))}},handleInputConfirm:function(){var t=this.AttributeNameinputValue;if(!(this.NxtStructProduct.skuList.length>=2)){if(t){var e=JSON.parse(JSON.stringify(this.NxtStructProductSku));e.skuKeyName=t,this.NxtStructProduct.skuList.push(e)}this.AttributeNameinputVisible=!1,this.AttributeNameinputValue=""}},handleCreate:function(){var t=this;this.$store.dispatch("product/createProduct",this.NxtStructProduct).then((function(e){t.$message({message:"创建成功！",type:"success"}),t.$router.replace({path:"/product/product"})}))},handleUploadHttpRequest:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,i,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.file,i=new FormData,i.append("file",r),t.next=5,Object(s["p"])(i);case 5:a=t.sent,0===a.status?(this.$notify({title:"提示信息",message:"图片上传成功",type:"success",duration:2e3}),n=JSON.parse(JSON.stringify(this.NxtStructProductPicture)),n.id=a.id,n.url=a.url,this.NxtStructProduct.pictureList.push(n),this.productForm.productPicList.push(a.url),this.productForm.productObj.push(n)):this.$notify({title:"提示信息",message:a.message,type:"error",duration:2e3});case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),UploadOnSuccess:function(t,e,r){this.$refs.editor.imageSuccessCBK([{url:t.url}]),this.$forceUpdate()},showDelBtn:function(t){this.productForm.currentDelBtn=t},hiddenDelBtn:function(){this.productForm.currentDelBtn=-1},deleImg:function(t,e){this.productForm.productPicList.splice(e,1),this.productForm.productObj.splice(e,1),this.NxtStructProduct.pictureList.splice(e,1)},handlePictureSuccess:function(t,e,r){var i="image/jpeg"===e.raw.type,a="image/jpg"===e.raw.type,n="image/png"===e.raw.type,u="image/gif"===e.raw.type;if(i||a||n||u){var c=this;new Promise((function(t,r){var i=window.URL||window.webkitURL,a=new Image;a.src=i.createObjectURL(e.raw)})).then((function(){return c.productForm.productPicList.push(e.response.data),e.raw}))}else this.$message.warning("只支持jpg或png或gif格式图片")}}},f=m,h=(r("6a03"),r("2877")),v=Object(h["a"])(f,i,a,!1,null,"290252a8",null);e["default"]=v.exports},"6a03":function(t,e,r){"use strict";r("c97c")},8256:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[r("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),r("div",{staticClass:"editor-custom-btn-container"})])},a=[],n=(r("ac6a"),r("c5f6"),["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"]),u=n,c=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],s=c,l=r("2d63"),o=[];function d(){return window.tinymce}var p=function(t,e){var r=document.getElementById(t),i=e||function(){};if(!r){var a=document.createElement("script");a.src=t,a.id=t,document.body.appendChild(a),o.push(i);var n="onload"in a?u:c;n(a)}function u(e){e.onload=function(){this.onerror=this.onload=null;var t,r=Object(l["a"])(o);try{for(r.s();!(t=r.n()).done;){var i=t.value;i(null,e)}}catch(a){r.e(a)}finally{r.f()}o=null},e.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+t),e)}}function c(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,r=Object(l["a"])(o);try{for(r.s();!(e=r.n()).done;){var i=e.value;i(null,t)}}catch(a){r.e(a)}finally{r.f()}o=null}}}r&&i&&(d()?i(null,r):o.push(i))},m=p,f="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",h={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;m(f,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:s,menubar:this.menubar,plugins:u,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(r){e.value&&r.setContent(e.value),e.hasInit=!0,r.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",r.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))},convert_urls:!1})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},v=h,b=(r("b19f"),r("2877")),g=Object(b["a"])(v,i,a,!1,null,"3a4cd6c3",null);e["a"]=g.exports},b19f:function(t,e,r){"use strict";r("f218")},c97c:function(t,e,r){},f218:function(t,e,r){}}]);