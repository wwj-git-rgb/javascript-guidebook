(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[286],{"7Lyt":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"objectpreventextensions"},l.a.createElement("a",{"aria-hidden":"true",href:"#objectpreventextensions"},l.a.createElement("span",{className:"icon icon-link"})),"Object.preventExtensions"),l.a.createElement("p",null,l.a.createElement("code",null,"Object.preventExtensions()")," \u65b9\u6cd5\u7528\u4e8e\u4ee4\u6307\u5b9a\u5bf9\u8c61\u65e0\u6cd5\u518d\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"Object.preventExtensions(O);\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"O"),l.a.createElement("td",null,"\u5c06\u6807\u8bb0\u4e3a\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61"),l.a.createElement("td",null,"object")))),l.a.createElement("p",null,"\u8fd4\u56de\u5904\u7406\u540e\u7684\u5bf9\u8c61\u3002"),l.a.createElement("h2",{id:"\u63cf\u8ff0"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},l.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),l.a.createElement("p",null,"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff0c\u5219\u8fd9\u4e2a\u5bf9\u8c61\u662f\u53ef\u6269\u5c55\u7684\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"Object.preventExtensions")," \u80fd\u5c06\u5bf9\u8c61\u6807\u8bb0\u4e3a\u4e0d\u53ef\u6269\u5c55\uff0c\u56e0\u6b64\u5b83\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u5177\u6709\u8d85\u51fa\u5b83\u88ab\u6807\u8bb0\u4e3a\u4e0d\u53ef\u6269\u5c55\u7684 Properties\u3002"),l.a.createElement("p",null,"\u26a0\ufe0f ",l.a.createElement("strong",null,"\u6ce8\u610f"),"\uff1a\u4e00\u822c\u6765\u8bf4\uff0c\u4e0d\u53ef\u6269\u5c55\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u80fd\u4ecd\u7136\u53ef\u88ab\u5220\u9664\u3002"),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4ec5\u963b\u6b62\u6dfb\u52a0\u81ea\u8eab\u7684\u5c5e\u6027\u3002\u4f46\u5c5e\u6027\u4ecd\u7136\u53ef\u4ee5\u6dfb\u52a0\u5230\u5bf9\u8c61\u539f\u578b\u3002"),l.a.createElement("p",null,"\u4e00\u65e6\u4f7f\u5176\u4e0d\u53ef\u6269\u5c55\uff0c\u5c31\u65e0\u6cd5\u518d\u5bf9\u8c61\u8fdb\u884c\u6269\u5c55\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("p",null,"\u5b57\u9762\u91cf\u65b9\u5f0f\u521b\u5efa\u7684\u5bf9\u8c61\u9ed8\u8ba4\u662f\u53ef\u6269\u5c55\u7684\u3002"),l.a.createElement(c.a,{code:"const foo = {};\nObject.isExtensible(foo);\n// true\n",lang:"js"}),l.a.createElement("p",null,"\u4f46\u662f\u53ef\u4ee5\u6539\u53d8\u3002"),l.a.createElement(c.a,{code:"Object.preventExtensions(foo);\n\nObject.isExtensible(foo);\n// false\n",lang:"js"}),l.a.createElement("p",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"Object.defineProperty")," \u65b9\u6cd5\u4e3a\u4e00\u4e2a\u53ef\u6269\u5c55\u7684\u5bf9\u8c61\u6dfb\u52a0\u65b0\u5c5e\u6027\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),l.a.createElement(c.a,{code:"const nonExtensible = { removalbe: true };\n\nObject.preventExtensions(nonExtensible);\n\nObject.defineProperty(nonExtensible, 'new', { value: 5678 });\n// throw TypeError Exception\n",lang:"js"})))}}}]);