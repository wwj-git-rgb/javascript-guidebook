(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[381],{eEm9:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(l);a("5Yjd");t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"stringprototypepadstart"},r.a.createElement("a",{"aria-hidden":"true",href:"#stringprototypepadstart"},r.a.createElement("span",{className:"icon icon-link"})),"String.prototype.padStart()"),r.a.createElement("p",null,r.a.createElement("code",null,"padStart()")," \u65b9\u6cd5\u7528\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u586b\u5145\u5f53\u524d\u5b57\u7b26\u4e32\uff08\u91cd\u590d\uff0c\u5982\u679c\u9700\u8981\u7684\u8bdd\uff09\uff0c\u4ee5\u4fbf\u4ea7\u751f\u7684\u5b57\u7b26\u4e32\u8fbe\u5230\u7ed9\u5b9a\u7684\u957f\u5ea6\u3002\u586b\u5145\u4ece\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\uff08\u5de6\u4fa7\uff09\u5e94\u7528\u7684\u3002"),r.a.createElement("h2",{id:"\u8bed\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),r.a.createElement(c.a,{code:"str.padStart(targetLength [, padString]);\n",lang:"js"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"targetLength")),r.a.createElement("td",null,"\u5f53\u524d\u5b57\u7b26\u4e32\u9700\u8981\u586b\u5145\u5230\u7684\u76ee\u6807\u957f\u5ea6\u3002\u5982\u679c\u8fd9\u4e2a\u6570\u503c\u5c0f\u4e8e\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5219\u8fd4\u56de\u5f53\u524d\u5b57\u7b26\u4e32\u672c\u8eab\u3002"),r.a.createElement("td",null,"number")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"padString")),r.a.createElement("td",null,"\uff08\u53ef\u9009\uff09\u586b\u5145\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5b57\u7b26\u4e32\u592a\u957f\uff0c\u4f7f\u586b\u5145\u540e\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u4e86\u76ee\u6807\u957f\u5ea6\uff0c\u5219\u53ea\u4fdd\u7559\u6700\u5de6\u4fa7\u7684\u90e8\u5206\uff0c\u5176\u4ed6\u90e8\u5206\u4f1a\u88ab\u622a\u65ad\u3002"),r.a.createElement("td",null,"string")))),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement(c.a,{code:"const str = 'abc';\n\nstr.padStart('1');\n// 'abc'\n\nstr.padStart('10');\n// '       abc'\n\nstr.padStart('6', '123456');\n// '123abc'\n\nstr.padStart('10', 'foo');\n// 'foofoofabc'\n",lang:"js"}),r.a.createElement("h2",{id:"polyfill"},r.a.createElement("a",{"aria-hidden":"true",href:"#polyfill"},r.a.createElement("span",{className:"icon icon-link"})),"Polyfill"),r.a.createElement(c.a,{code:"if (String.prototype.padStart) {\n  String.prototype.padStart = function padStart(targetLength, padString) {\n    targetLength = targetLength >> 0;\n    padString = String(typeof padString !== 'undefined' ? padString : '');\n    if (this.length > targetLength) {\n      return String(this);\n    } else {\n      targetLength = targetLength - this.length;\n      if (targetLength > padString.length) {\n        padString += padString.repeat(targetLength / padString.length);\n      }\n      return padString.slice(0, targetLength) + String(this);\n    }\n  };\n}\n",lang:"js"})))}}}]);