(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"0Fdr":function(e,t,a){"use strict";a.r(t);var s=a("p0pE"),n=a.n(s),r=a("d6i3"),c=a.n(r),u=a("k9Yu"),p=(a("34ay"),a("HZnN"));a("jYEY"),a("1pet");t["default"]={namespace:"register",state:{status:void 0},effects:{submit:c.a.mark(function e(t,a){var s,n,r,p,i,d;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=t.payload,n=t.callback,r=a.call,p=a.put,i=s,e.next=5,r(u["d"],i);case 5:return d=e.sent,e.next=8,p({type:"registerHandle",payload:d});case 8:d.success&&n(d);case 9:case"end":return e.stop()}},e)})},reducers:{registerHandle:function(e,t){var a=t.payload;return Object(p["b"])(),n()({},e,{status:a.status})}}}}}]);