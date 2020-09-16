(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[322],{iYuL:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),l=(n("B2uJ"),n("+su7"),n("qOys")),o=n.n(l);n("5Yjd");a["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"arrayprototypekeys"},r.a.createElement("a",{"aria-hidden":"true",href:"#arrayprototypekeys"},r.a.createElement("span",{className:"icon icon-link"})),"Array.prototype.keys()"),r.a.createElement("p",null,r.a.createElement("code",null,"Array.prototype.keys()")," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u4e00\u4e2a\u65b0\u7684 Array Iterator \u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u7d22\u5f15\u7684\u952e\u3002"),r.a.createElement("h2",{id:"\u8bed\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),r.a.createElement(o.a,{code:"arr.keys();\n",lang:"javascript"}),r.a.createElement("p",null,r.a.createElement("strong",null,"\u8fd4\u56de\u503c\uff1a")," \u4e00\u4e2a\u65b0\u7684 Array Iterator \u5bf9\u8c61\u3002"),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement(o.a,{code:"let arr = ['a', 'b', 'c'];\n\nlet iterator = arr.keys();\n// undefined\n\nconsole.log(iterator);\n// Array Iterator {}\n\nconsole.log(iterator.next());\n// Object {value: 0, done: false}\n\nconsole.log(iterator.next());\n// Object {value: 1, done: false}\n\nconsole.log(iterator.next());\n// Object {value: 2, done: false}\n\nconsole.log(iterator.next());\n// Object {value: undefined, done: true}\n",lang:"js"}),r.a.createElement("p",null,"\u7d22\u5f15\u8fed\u4ee3\u5668\u4f1a\u5305\u542b\u90a3\u4e9b\u6ca1\u6709\u5bf9\u5e94\u5143\u7d20\u7684\u7d22\u5f15\u3002"),r.a.createElement(o.a,{code:"const arr = ['a', , 'c'];\nconst sparseKeys = Object.keys(arr);\nconst denseKeys = [...arr.keys()];\n\nconsole.log(sparseKeys); // ['0', '2']\n\nconsole.log(denseKeys); // [0, 1, 2]\n",lang:"js"})))}}}]);