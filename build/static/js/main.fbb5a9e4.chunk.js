(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],[,,,,,,,,,function(t,e,r){t.exports=r(17)},,,,,function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(3),u=r.n(a),i=(r(14),r(1)),c=r(4),s=r(5),l=r(7),f=r(6),h=r(8);function v(t){var e=[];if(t.length<=1)return t;var r=t.slice();return function t(e,r,n,o,a){if(r===n)return;var u=Math.floor((r+n)/2);t(o,r,u,e,a);t(o,u+1,n,e,a);!function(t,e,r,n,o,a){var u=e,i=e,c=r+1;for(;i<=r&&c<=n;)a.push([i,c]),a.push([i,c]),o[i]<=o[c]?(a.push([u,o[i]]),t[u++]=o[i++]):(a.push([u,o[c]]),t[u++]=o[c++]);for(;i<=r;)a.push([i,i]),a.push([i,i]),a.push([u,o[i]]),t[u++]=o[i++];for(;c<=n;)a.push([c,c]),a.push([c,c]),a.push([u,o[c]]),t[u++]=o[c++]}(e,r,u,n,o,a)}(t,0,t.length-1,r,e),e}r(15);var m=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(l.a)(this,Object(f.a)(e).call(this,t))).state={array:[]},r}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var t=[],e=0;e<310;e++)t.push(p(5,730));this.setState({array:t})}},{key:"mergeSort",value:function(){for(var t=v(this.state.array),e=function(e){var r=document.getElementsByClassName("array-bar");if(e%3!==2){var n=Object(i.a)(t[e],2),o=n[0],a=n[1],u=r[o].style,c=r[a].style,s=e%3===0?"red":"turquoise";setTimeout((function(){u.backgroundColor=s,c.backgroundColor=s}),1*e)}else setTimeout((function(){var n=Object(i.a)(t[e],2),o=n[0],a=n[1];r[o].style.height="".concat(a,"px")}),1*e)},r=0;r<t.length;r++)e(r)}},{key:"quickSort",value:function(){}},{key:"heapSort",value:function(){}},{key:"bubbleSort",value:function(){}},{key:"testSortingAlgorithms",value:function(){for(var t=0;t<100;t++){for(var e=[],r=p(1,1e3),n=0;n<r;n++)e.push(p(-1e3,1e3));var o=e.slice().sort((function(t,e){return t-e})),a=v(e.slice());console.log(b(o,a))}}},{key:"render",value:function(){var t=this,e=this.state.array;return o.a.createElement("div",{className:"array-container"},e.map((function(t,e){return o.a.createElement("div",{className:"array-bar",key:e,style:{backgroundColor:"turquoise",height:"".concat(t,"px")}})})),o.a.createElement("button",{onClick:function(){return t.resetArray()}},"Generate New Array"),o.a.createElement("button",{onClick:function(){return t.mergeSort()}},"Merge Sort"),o.a.createElement("button",{onClick:function(){return t.quickSort()}},"Quick Sort"),o.a.createElement("button",{onClick:function(){return t.heapSort()}},"Heap Sort"),o.a.createElement("button",{onClick:function(){return t.bubbleSort()}},"Bubble Sort"))}}]),e}(o.a.Component);function p(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function b(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}r(16);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.fbb5a9e4.chunk.js.map