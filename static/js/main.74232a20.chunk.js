(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),s=n(7),i=n(2),l=n(17),u=n(18),h={searchField:"",isPending:!1,robots:[],error:""},d=(n(28),n(4)),b=n(5),m=n(8),E=n(6),p=n(9),g=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},f=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e){return a.a.createElement(g,{key:e.id,name:e.name,id:e.id,email:e.email})}))},O=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Box",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=(n(30),function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"500px"}},e.children)}),R=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops, something bugs here."):this.props.children}}]),t}(r.Component),S=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchFieldx,n=e.onSearchChange,r=e.isPending,o=e.robots.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",null,"Loading")):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"Robofriends"),a.a.createElement(O,{searchChange:n}),a.a.createElement(v,null,a.a.createElement(R,null,a.a.createElement(f,{robots:o}))))}},{key:"componentDidMount",value:function(){this.props.onRequestRobots()}}]),t}(r.Component),y=Object(s.b)(function(e){return{searchFieldx:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})}(e)}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);var j=Object(l.createLogger)(),w=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(i.d)(w,Object(i.a)(u.a,j));c.a.render(a.a.createElement(s.a,{store:C},a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.74232a20.chunk.js.map