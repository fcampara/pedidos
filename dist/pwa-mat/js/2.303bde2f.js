(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"kmF/":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{attrs:{padding:""}},[o("q-list",{staticClass:"shadow-24",attrs:{separator:""}},t._l(t.requests,function(e){return o("q-collapsible",{key:e.protocolo,attrs:{label:t.getLabel(e),sublabel:t.getSubLabel(e),avatar:t.getAvatar(e)}},[o("q-card",{staticClass:"shadow-4"},[o("q-card-title",{staticClass:"text-center"},[t._v("\n          Solicitado em "+t._s(t.dateTime(e.protocolo))+"\n          "),o("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[o("q-btn-group",{staticClass:"full-width q-mt-md",attrs:{push:""}},[o("q-btn",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.onCopyAction(e),expression:"onCopyAction(request)"}],staticClass:"full-width",attrs:{push:"",color:"primary",icon:"file_copy",label:"Copiar"},on:{success:t.handleSuccess}}),o("q-btn",{staticClass:"full-width",attrs:{push:"",color:"positive",disable:e.finish,icon:"check",label:"Finalizar"},on:{click:function(o){t.finish(e)}}}),o("q-btn",{staticClass:"full-width",attrs:{push:"",color:"negative",disable:e.finish,icon:"close",label:"Cancelar"}})],1)],1)]),o("q-list",{attrs:{separator:""}},[t._l(e.question,function(e){return o("q-collapsible",{key:e.index,staticClass:"ellipsis",attrs:{label:e.question}},[o("div",[t._v("\n              "+t._s(e.answer)+"\n            ")])])}),e.note?o("q-collapsible",{attrs:{label:"Observação"}},[o("div",{domProps:{innerHTML:t._s(e.note)}})]):t._e()],2)],1)],1)}))],1)},a=[];n._withStripped=!0;var s=o("MVZn"),c=o.n(s),i=o("4IOb"),l=o("L2JU"),r={name:"PageIndex",data:function(){return{copyData:"teste",selected:[],todos:[]}},computed:c()({},Object(l["c"])({requests:function(t){return t.request.requests}})),methods:c()({},Object(l["b"])({getAllRequests:"request/getAllRequests",finish:"request/finish"}),{handleSuccess:function(){this.$q.notify({message:"Copiado com sucesso",timeout:2e3,type:"positive",color:"positive"})},getAvatar:function(t){if(t.finish)return"../assets/avatar/checked.jpg";var e="Japão"===t.from?"Japao":t.from;return"../assets/avatar/".concat(e,".jpg")},getLabel:function(t){return"".concat(t.info.fullName," - ").concat(t.info.polo)},getSubLabel:function(t){var e=1===t.type?"Solicitação de arte":"Material para imprensa";return"".concat(e," - ").concat(t.protocolo)},onCopyAction:function(t){return"Solicitado em ".concat(this.dateTime(t.protocolo)," pelo polo ").concat(t.info.polo," (").concat(t.from,") com seu número de protocolo ").concat(t.protocolo,", informações para contato:\nNome completo: ").concat(t.info.fullName,"\nE-mail: ").concat(t.info.email,"\nCelular: ").concat(t.info.phone,"\n\nPerguntas/Respostas:\n").concat(t.question[0].question,"\nR: ").concat(t.question[0].answer,"\n").concat(t.question[1].question,"\nR: ").concat(t.question[1].answer,"\n").concat(t.question[2].question,"\nR: ").concat(t.question[2].answer,"\n").concat(t.question[3].question,"\nR: ").concat(t.question[3].answer,"\n").concat(t.question[4].question,"\nR: ").concat(t.question[4].answer,"\n").concat(t.question[5].question,"\nR: ").concat(t.question[5].answer,"\n\nObservação:\n").concat(t.note,"\n")},dateTime:function(t){return i["S"].formatDate(parseInt(t),"DD/MM/YY [ás] h:mm")}}),mounted:function(){this.getAllRequests()}},u=r,p=o("KHd+"),q=Object(p["a"])(u,n,a,!1,null,null,null);e["default"]=q.exports}}]);