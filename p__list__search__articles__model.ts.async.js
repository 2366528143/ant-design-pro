(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{xzdv:function(t,e,r){"use strict";r.r(e);var a=r("p0pE"),n=r.n(a),s=r("d6i3"),c=r.n(s),p=r("1l/V"),u=r.n(p),i=r("io9h");function o(t){return l.apply(this,arguments)}function l(){return(l=u()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("/api/fake_list",{params:e}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}var f={namespace:"listSearchArticles",state:{list:[]},effects:{fetch:c.a.mark(function t(e,r){var a,n,s,p;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.payload,n=r.call,s=r.put,t.next=4,n(o,a);case 4:return p=t.sent,t.next=7,s({type:"queryList",payload:Array.isArray(p)?p:[]});case 7:case"end":return t.stop()}},t)}),appendFetch:c.a.mark(function t(e,r){var a,n,s,p;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.payload,n=r.call,s=r.put,t.next=4,n(o,a);case 4:return p=t.sent,t.next=7,s({type:"appendList",payload:Array.isArray(p)?p:[]});case 7:case"end":return t.stop()}},t)})},reducers:{queryList:function(t,e){return n()({},t,{list:e.payload})},appendList:function(t,e){return n()({},t,{list:t.list.concat(e.payload)})}}};e.default=f}}]);