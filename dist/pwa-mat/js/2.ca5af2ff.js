(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"kmF/":function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("q-page",{attrs:{padding:""}},[o("q-list",{staticClass:"shadow-24",attrs:{separator:""}},t._l(t.requests,function(n){return o("q-collapsible",{key:n.protocolo,attrs:{label:t.getLabel(n),sublabel:t.getSubLabel(n),avatar:t.getAvatar(n)}},[o("q-card",{staticClass:"shadow-4"},[o("q-card-title",{staticClass:"text-center"},[t._v("\n          Solicitado em "+t._s(t.dateTime(n.protocolo))+"\n          "),o("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[o("q-btn-group",{staticClass:"full-width q-mt-md shadow-6",attrs:{push:""}},[o("q-btn",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.onCopyAction(n),expression:"onCopyAction(request)"}],staticClass:"full-width",attrs:{push:"",color:"primary",icon:"file_copy",label:"Copiar"},on:{success:t.handleSuccess}}),o("q-btn",{staticClass:"full-width",attrs:{push:"",color:"positive",disable:n.finish,icon:"check",label:"Finalizar"},on:{click:function(o){t.finish(n)}}}),o("q-btn",{staticClass:"full-width",attrs:{push:"",color:"negative",disable:!0,icon:"fa fa-cog",label:"Runrun.it"},on:{click:function(o){t.runrunit(n)}}})],1)],1)]),o("q-list",{attrs:{separator:""}},[t._l(n.question,function(n){return o("q-collapsible",{key:n.index,staticClass:"ellipsis",attrs:{label:n.question}},[o("div",[t._v("\n              "+t._s(n.answer)+"\n            ")])])}),n.note?o("q-collapsible",{attrs:{label:"Observação"}},[o("div",{domProps:{innerHTML:t._s(n.note)}})]):t._e()],2)],1)],1)})),o("runrunit",{attrs:{show:t.modal,run:t.runrunData},on:{close:function(n){t.modal=n}}})],1)},a=[];e._withStripped=!0;var s=o("MVZn"),i=o.n(s),c=o("4IOb"),r=o("L2JU"),l=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[o("q-modal-layout",[o("q-toolbar",{staticClass:"shadow-6",attrs:{slot:"header",color:"green-6"},slot:"header"},[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"reply"},on:{click:t.close}}),o("q-toolbar-title",[t._v("\n        "+t._s(t.run.info.fullName)+" - "+t._s(t.run.info.polo)+"\n      ")])],1),o("q-card",{staticClass:"q-ma-sm",attrs:{inline:""}},[o("q-card-title",[t._v("\n            Title\n            "),o("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Subtitle")])]),o("q-card-main",[t._v("\n           asdasd\n        ")])],1)],1)],1)},u=[];l._withStripped=!0;var p={name:"runrunit",props:["show","run"],methods:{close:function(){this.$emit("close",!1)}}},d=p,f=o("KHd+"),m=Object(f["a"])(d,l,u,!1,null,null,null),q=m.exports,h={name:"PageIndex",components:{runrunit:q},data:function(){return{copyData:"teste",runrunData:{info:{fullName:"",polo:""}},modal:!1,selected:[],todos:[]}},computed:i()({},Object(r["c"])({requests:function(t){return t.request.requests}})),methods:i()({},Object(r["b"])({getAllRequests:"request/getAllRequests",finish:"request/finish"}),{runrunit:function(t){this.runrunData=t,this.modal=!0},handleSuccess:function(){this.$q.notify({message:"Copiado com sucesso",timeout:2e3,type:"positive",color:"positive"})},getAvatar:function(t){if(t.finish)return"./statics/avatar/checked.jpg";var n="Japão"===t.from?"Japao":t.from;return"./statics/avatar/".concat(n,".jpg")},getLabel:function(t){return"".concat(t.info.fullName," - ").concat(t.info.polo)},getSubLabel:function(t){var n=1===t.type?"Solicitação de arte":"Material para imprensa";return"".concat(n," - ").concat(t.protocolo)},onCopyAction:function(t){var n=1===t.type?"Solicitação de arte":"Material para imprensa";return"".concat(n,"\n\nSolicitado em ").concat(this.dateTime(t.protocolo)," pelo polo ").concat(t.info.polo," (").concat(t.from,") com seu número de protocolo ").concat(t.protocolo,", informações para contato:\nNome completo: ").concat(t.info.fullName,"\nE-mail: ").concat(t.info.email,"\nCelular: ").concat(t.info.phone,"\n\nPerguntas/Respostas:\n").concat(t.question[0].question,"\nR: ").concat(t.question[0].answer,"\n").concat(t.question[1].question,"\nR: ").concat(t.question[1].answer,"\n").concat(t.question[2].question,"\nR: ").concat(t.question[2].answer,"\n").concat(t.question[3].question,"\nR: ").concat(t.question[3].answer,"\n").concat(t.question[4].question,"\nR: ").concat(t.question[4].answer,"\n").concat(t.question[5].question,"\nR: ").concat(t.question[5].answer,"\n\nObservação:\n").concat(t.note,"\n")},dateTime:function(t){return c["U"].formatDate(parseInt(t),"DD/MM/YY [ás] HH:MM")}}),mounted:function(){this.getAllRequests()}},b=h,v=Object(f["a"])(b,e,a,!1,null,null,null);n["default"]=v.exports}}]);