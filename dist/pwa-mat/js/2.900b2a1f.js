(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"5KbQ":function(e,t,i){"use strict";var o=i("e6BW"),a=i.n(o);a.a},e6BW:function(e,t,i){},"kmF/":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[e.loading?i("div",[i("q-spinner"),e._v(" Fetching data...\n  ")],1):i("div",[i("q-list",[i("q-list-header",[e._v("Todos")]),e._l(e.todos,function(t,o){return i("q-item",{key:o},[i("q-item-main",[e._v("\n          "+e._s(t.title)+"\n        ")])],1)})],2)],1),e.todos.length||e.loading?e._e():i("q-btn",{staticClass:"q-mt-md",attrs:{label:"Seed Data",color:"tertiary"},on:{click:function(t){e.seedData()}}})],1)},a=[];o._withStripped=!0;i("rGqo");var l=i("kzos"),d={name:"PageIndex",data:function(){return{loading:!0,todos:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.loading=!0,this.todos=[];var t=this.$firebase.firestore().collection("todos");t.get().then(function(t){t.forEach(function(t){e.todos.push(t.data())}),e.loading=!1}).catch(function(e){return console.error(e)})},seedData:function(){var e=this.$firebase.firestore().collection("todos");l.forEach(function(t){e.doc().set(t).then(function(){console.log("Created",t.title)}).catch(function(e){return console.error(e)})}),this.getData()}}},s=d,u=(i("5KbQ"),i("KHd+")),n=Object(u["a"])(s,o,a,!1,null,null,null);t["default"]=n.exports},kzos:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1},{userId:1,id:6,title:"qui ullam ratione quibusdam voluptatem quia omnis",completed:!1},{userId:1,id:7,title:"illo expedita consequatur quia in",completed:!1},{userId:1,id:8,title:"quo adipisci enim quam ut ab",completed:!0},{userId:1,id:9,title:"molestiae perspiciatis ipsa",completed:!1},{userId:1,id:10,title:"illo est ratione doloremque quia maiores aut",completed:!0},{userId:1,id:11,title:"vero rerum temporibus dolor",completed:!0},{userId:1,id:12,title:"ipsa repellendus fugit nisi",completed:!0},{userId:1,id:13,title:"et doloremque nulla",completed:!1},{userId:1,id:14,title:"repellendus sunt dolores architecto voluptatum",completed:!0},{userId:1,id:15,title:"ab voluptatum amet voluptas",completed:!0},{userId:1,id:16,title:"accusamus eos facilis sint et aut voluptatem",completed:!0},{userId:1,id:17,title:"quo laboriosam deleniti aut qui",completed:!0},{userId:1,id:18,title:"dolorum est consequatur ea mollitia in culpa",completed:!1},{userId:1,id:19,title:"molestiae ipsa aut voluptatibus pariatur dolor nihil",completed:!0},{userId:1,id:20,title:"ullam nobis libero sapiente ad optio sint",completed:!0},{userId:2,id:21,title:"suscipit repellat esse quibusdam voluptatem incidunt",completed:!1},{userId:2,id:22,title:"distinctio vitae autem nihil ut molestias quo",completed:!0},{userId:2,id:23,title:"et itaque necessitatibus maxime molestiae qui quas velit",completed:!1},{userId:2,id:24,title:"adipisci non ad dicta qui amet quaerat doloribus ea",completed:!1},{userId:2,id:25,title:"voluptas quo tenetur perspiciatis explicabo natus",completed:!0}]}}]);