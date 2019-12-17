webpackJsonp([1],{MNpD:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),s={name:"Navbar",data:()=>({})},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"navbar"},[t("nav",{staticClass:"nav-extended indigo darken-2"},[t("div",{staticClass:"nav-content"},[t("router-link",{attrs:{to:{name:"Index"}}},[t("span",{staticClass:"nav-title"},[this._v("Add-Smoothies")])]),this._v(" "),t("a",{staticClass:"btn-floating btn-large halfway-fab pink",attrs:{href:""}},[t("router-link",{attrs:{to:{name:"AddSmoothie"}}},[t("i",{staticClass:"material-icons"},[this._v("add")])])],1)],1)])])},staticRenderFns:[]};var o={name:"App",components:{Navbar:i("VU/8")(s,a,!1,function(e){i("QW4T")},null,null).exports}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(o,r,!1,function(e){i("W93B")},null,null).exports,d=i("/ocq"),c=i("kxiW"),h=i.n(c);i("881v");const m=h.a.initializeApp({apiKey:"AIzaSyDNqiZNZoPMJ0ar-zAqu3SlTPHtoILYkyg",authDomain:"add-smoothies.firebaseapp.com",databaseURL:"https://add-smoothies.firebaseio.com",projectId:"add-smoothies",storageBucket:"add-smoothies.appspot.com",messagingSenderId:"624891806595",appId:"1:624891806595:web:ab365cfa2e247da604ecb6",measurementId:"G-P7EVV3XQJN"});m.firestore().settings({timestampsInSnapshots:!0});var u=m.firestore(),v={name:"Index",data:()=>({smoothies:[]}),methods:{deleteSmoothie(e){u.collection("smoothies").doc(e).delete().then(()=>{this.smoothies=this.smoothies.filter(t=>t.id!=e)})}},created(){u.collection("smoothies").get().then(e=>{e.forEach(e=>{let t=e.data();t.id=e.id,this.smoothies.push(t)})})}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"index container"},e._l(e.smoothies,function(t){return i("div",{key:t.id,staticClass:"card"},[i("div",{staticClass:"card-content"},[i("i",{staticClass:"material-icons delete",on:{click:function(i){return e.deleteSmoothie(t.id)}}},[e._v("delete")]),e._v(" "),i("h2",{staticClass:"indigo-text"},[e._v("\n        "+e._s(t.title)+"\n      ")]),e._v(" "),i("ul",{staticClass:"ingredients"},e._l(t.ingredients,function(t,n){return i("li",{key:n},[i("span",{staticClass:"chip"},[e._v(e._s(t))])])}),0)]),e._v(" "),i("span",{staticClass:"btn-floating btn-large halfway-fab pink"},[i("router-link",{attrs:{to:{name:"EditSmoothie",params:{smoothie_slug:t.slug}}}},[i("i",{staticClass:"material-icons edit"},[e._v("edit")])])],1)])}),0)},staticRenderFns:[]};var g=i("VU/8")(v,p,!1,function(e){i("RSfx")},null,null).exports,f=i("wffv"),_=i.n(f),b={name:"AddSmoothie",data:()=>({title:null,another:null,ingredients:[],feedback:null,slug:null}),methods:{AddSmoothie(){this.title?(this.feedback=null,this.slug=_()(this.title,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0}),u.collection("smoothies").add({title:this.title,ingredients:this.ingredients,slug:this.slug}).then(()=>{this.$router.push({name:"Index"})}).catch(e=>{console.log(e)})):this.feedback="You must enter a smoothie title"},addIng(){this.another?(this.ingredients.push(this.another),this.another=null,this.feedback=null):this.feedback="You must enter a value to add an ingredient"},deleteIng(e){this.ingredients=this.ingredients.filter(t=>t!=e)}}},k={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"add-smoothie container"},[i("h2",{staticClass:"center-align indigo-text"},[e._v("Add New Smoothie Recipe")]),e._v(" "),i("form",{on:{submit:function(t){return t.preventDefault(),e.AddSmoothie(t)}}},[i("div",{staticClass:"field title"},[i("label",{attrs:{for:"title"}},[e._v("Smoothie Title:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" "),e._l(e.ingredients,function(t,n){return i("div",{key:n,staticClass:"field"},[i("label",{attrs:{for:"ingredient"}},[e._v("Ingredient:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredients[n],expression:"ingredients[index]"}],attrs:{type:"text",name:"ingredient"},domProps:{value:e.ingredients[n]},on:{input:function(t){t.target.composing||e.$set(e.ingredients,n,t.target.value)}}}),e._v(" "),i("i",{staticClass:"material-icons delete",on:{click:function(i){return e.deleteIng(t)}}},[e._v("delete")])])}),e._v(" "),i("div",{staticClass:"field add-ingredient"},[i("label",{attrs:{for:"add-ingredient"}},[e._v("Add an ingredient")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.another,expression:"another"}],attrs:{type:"text",name:"add-ingredient"},domProps:{value:e.another},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addIng(t))},input:function(t){t.target.composing||(e.another=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"field center-align"},[e.feedback?i("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e(),e._v(" "),i("button",{staticClass:"btn pink"},[e._v("Add Smoothie")])])],2)])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(e){i("RHeo")},null,null).exports,C={name:"EditSmoothie",data:()=>({smoothie:null,another:null,feedback:null}),methods:{EditSmoothie(){this.smoothie.title?(this.feedback=null,this.smoothie.slug=_()(this.smoothie.title,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0}),u.collection("smoothies").doc(this.smoothie.id).update({title:this.smoothie.title,ingredients:this.smoothie.ingredients,slug:this.smoothie.slug}).then(()=>{this.$router.push({name:"Index"})}).catch(e=>{console.log(e)})):this.feedback="You must enter a smoothie title"},addIng(){this.another?(this.smoothie.ingredients.push(this.another),this.another=null,this.feedback=null):this.feedback="You must enter a value to add an ingredient"},deleteIng(e){this.smoothie.ingredients=this.smoothie.ingredients.filter(t=>t!=e)}},created(){u.collection("smoothies").where("slug","==",this.$route.params.smoothie_slug).get().then(e=>{e.forEach(e=>{this.smoothie=e.data(),this.smoothie.id=e.id})})}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.smoothie?i("div",{staticClass:"edit-smoothie container"},[i("h2",[e._v("Edit "+e._s(e.smoothie.title)+" Smoothie")]),e._v(" "),i("form",{on:{submit:function(t){return t.preventDefault(),e.EditSmoothie(t)}}},[i("div",{staticClass:"field title"},[i("label",{attrs:{for:"title"}},[e._v("Smoothie Title:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.smoothie.title,expression:"smoothie.title"}],attrs:{type:"text",name:"title"},domProps:{value:e.smoothie.title},on:{input:function(t){t.target.composing||e.$set(e.smoothie,"title",t.target.value)}}})]),e._v(" "),e._l(e.smoothie.ingredients,function(t,n){return i("div",{key:n,staticClass:"field"},[i("label",{attrs:{for:"ingredient"}},[e._v("Ingredient:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.smoothie.ingredients[n],expression:"smoothie.ingredients[index]"}],attrs:{type:"text",name:"ingredient"},domProps:{value:e.smoothie.ingredients[n]},on:{input:function(t){t.target.composing||e.$set(e.smoothie.ingredients,n,t.target.value)}}}),e._v(" "),i("i",{staticClass:"material-icons delete",on:{click:function(i){return e.deleteIng(t)}}},[e._v("delete")])])}),e._v(" "),i("div",{staticClass:"field add-ingredient"},[i("label",{attrs:{for:"add-ingredient"}},[e._v("Add an ingredient")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.another,expression:"another"}],attrs:{type:"text",name:"add-ingredient"},domProps:{value:e.another},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addIng(t))},input:function(t){t.target.composing||(e.another=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"field center-align"},[e.feedback?i("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e(),e._v(" "),i("button",{staticClass:"btn pink"},[e._v("Update Smoothie")])])],2)]):e._e()},staticRenderFns:[]};var S=i("VU/8")(C,y,!1,function(e){i("MNpD")},null,null).exports;n.a.use(d.a);var I=new d.a({routes:[{path:"/",name:"Index",component:g},{path:"/add-smoothie",name:"AddSmoothie",component:x},{path:"/edit-smoothie/:smoothie_slug",name:"EditSmoothie",component:S}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:I,components:{App:l},template:"<App/>"})},QW4T:function(e,t){},RHeo:function(e,t){},RSfx:function(e,t){},W93B:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.16a30770d9d5da6e6ff7.js.map