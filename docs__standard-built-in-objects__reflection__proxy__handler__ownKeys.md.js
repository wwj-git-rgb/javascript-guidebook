(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[353],{"8Ac+":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"proxy---handlerownkeys"},l.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlerownkeys"},l.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.ownKeys"),l.a.createElement("p",null,l.a.createElement("code",null,"handler.ownKeys()")," \u65b9\u6cd5\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u81ea\u8eab\u5c5e\u6027\u7684\u8bfb\u53d6\u64cd\u4f5c\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"const proxy = new Proxy(target, {\n  ownKeys: function(target) {\n    // do something\n  },\n});\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"target")),l.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),l.a.createElement("td",null,"object")))),l.a.createElement("p",null,l.a.createElement("code",null,"ownKeys")," \u65b9\u6cd5\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u53ef\u679a\u4e3e\u5bf9\u8c61\u3002"),l.a.createElement("h2",{id:"\u8bf4\u660e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),l.a.createElement("h3",{id:"\u62e6\u622a"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},l.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"Object.getOwnPropertyNames()")),l.a.createElement("li",null,l.a.createElement("code",null,"Object.getOwnPropertySymbols()")),l.a.createElement("li",null,l.a.createElement("code",null,"Object.keys()")),l.a.createElement("li",null,l.a.createElement("code",null,"Reflect.ownKeys()"))),l.a.createElement("h3",{id:"\u7ea6\u675f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),l.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",l.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"ownKeys")," \u7684\u7ed3\u679c\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4"),l.a.createElement("li",null,"\u6570\u7ec4\u7684\u5143\u7d20\u7c7b\u578b\u8981\u4e48\u662f\u5b57\u7b26\u4e32\uff0c\u8981\u4e48\u662f Symbol \u7c7b\u578b"),l.a.createElement("li",null,"\u7ed3\u679c\u5217\u8868\u5fc5\u987b\u5305\u542b\u76ee\u6807\u5bf9\u8c61\u7684\u6240\u6709\u4e0d\u53ef\u914d\u7f6e\uff08non-configurable\uff09\u3001\u81ea\u6709\uff08own\uff09\u5c5e\u6027\u7684 ",l.a.createElement("code",null,"key")),l.a.createElement("li",null,"\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55\uff0c\u90a3\u4e48\u7ed3\u679c\u5217\u8868\u5fc5\u987b\u5305\u542b\u76ee\u6807\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u6709\uff08own\uff09\u5c5e\u6027\u7684 ",l.a.createElement("code",null,"key"),"\uff0c\u4e0d\u80fd\u6709\u5176\u4ed6\u503c")),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement(c.a,{code:"const proxy = new Proxy(\n  {},\n  {\n    ownKeys(target) {\n      console.log('Called');\n      return ['a', 'b', 'c'];\n    },\n  }\n);\n\nconsole.log(Object.getOwnPropertyNames(proxy));\n// 'Called'\n// ['a', 'b', 'c']\n",lang:"js"}),l.a.createElement("h3",{id:"\u5faa\u73af"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5faa\u73af"},l.a.createElement("span",{className:"icon icon-link"})),"\u5faa\u73af"),l.a.createElement("p",null,l.a.createElement("code",null,"for...in")," \u5faa\u73af\u4e5f\u53d7\u5230 ",l.a.createElement("code",null,"ownKeys()")," \u65b9\u6cd5\u7684\u62e6\u622a\uff1a"),l.a.createElement(c.a,{code:"const target = {\n  foo: 'bar',\n};\n\nconst proxy = new Proxy(target, {\n  ownKeys: function() {\n    return ['a', 'b'];\n  },\n});\n\nfor (let key in proxy) {\n  console.log(key);\n  // \u6ca1\u6709\u4efb\u4f55\u8f93\u51fa\n}\n",lang:"js"}),l.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",l.a.createElement("code",null,"ownKeys()")," \u6307\u5b9a\u53ea\u8fd4\u56de ",l.a.createElement("code",null,"a")," \u548c ",l.a.createElement("code",null,"b")," \u5c5e\u6027\uff0c\u7531\u4e8e ",l.a.createElement("code",null,"target")," \u6ca1\u6709\u8fd9\u4e24\u4e2a\u5c5e\u6027\uff0c\u56e0\u6b64 ",l.a.createElement("code",null,"for...in")," \u5faa\u73af\u4e0d\u4f1a\u6709\u4efb\u4f55\u8f93\u51fa\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"ownKeys()")," \u65b9\u6cd5\u8fd4\u56de\u7684\u6570\u7ec4\u6210\u5458\uff0c\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u6216 Symbol \u503c\u3002\u5982\u679c\u6709\u5176\u4ed6\u7c7b\u578b\u7684\u503c\uff0c\u6216\u8005\u8fd4\u56de\u7684\u6839\u672c\u4e0d\u662f\u6570\u7ec4\uff0c\u5c31\u4f1a\u62a5\u9519\u3002"),l.a.createElement(c.a,{code:"const target = {};\n\nconst proxy = new Proxy(\n  {},\n  {\n    ownKeys: function(target) {\n      return [123, true, undefined, null, {}, []];\n    },\n  }\n);\n\nObject.getOwnPropertyNames(proxy);\n// Uncaught TypeError: 123 is not a valid property name\n",lang:"js"})))}}}]);