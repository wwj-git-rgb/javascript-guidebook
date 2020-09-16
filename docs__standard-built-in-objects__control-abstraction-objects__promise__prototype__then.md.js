(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[260],{sT3X:function(e,n,l){"use strict";l.r(n);var t=l("55Ip"),a=l("q1tI"),r=l.n(a),c=(l("B2uJ"),l("+su7"),l("qOys")),o=l.n(c);l("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"promiseprototypethen"},r.a.createElement("a",{"aria-hidden":"true",href:"#promiseprototypethen"},r.a.createElement("span",{className:"icon icon-link"})),"Promise.prototype.then"),r.a.createElement("p",null,r.a.createElement("code",null,"Promise.prototype.then()")," \u7528\u4e8e Promise \u5b9e\u4f8b\u6dfb\u52a0\u72b6\u6001\u6539\u53d8\u65f6\u6267\u884c\u7684\u51fd\u6570\u3002"),r.a.createElement("h2",{id:"\u8bed\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),r.a.createElement(o.a,{code:"promiseInstance.then(onFulfilled, onRejected);\n",lang:"js"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"onFulfilled"),r.a.createElement("td",null,"\u5f53 Promise \u53d8\u6210 Fulfilled \u72b6\u6001\u65f6\uff0c\u8be5\u53c2\u6570\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u88ab\u8c03\u7528\u3002\u8be5\u51fd\u6570\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u63a5\u53d7\u7684\u6700\u7ec8\u7ed3\u679c\u3002\u5982\u679c\u4f20\u5165\u7684 onFulfilled \u7684\u53c2\u6570\u7c7b\u578b\u4e0d\u662f\u51fd\u6570\uff0c\u5219\u4f1a\u88ab\u5185\u90e8\u8f6c\u6362\u4e3a ",r.a.createElement("code",null,"(x) => x"),"\uff0c\u5373\u539f\u6837\u8fd4\u56de Promise \u6700\u7ec8\u7ed3\u679c\u7684\u51fd\u6570\u3002")),r.a.createElement("tr",null,r.a.createElement("td",null,"onRejected"),r.a.createElement("td",null,"\u5f53 Promise \u53d8\u6210 Rejected \u72b6\u6001\u65f6\uff0c\u8be5\u53c2\u6570\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u88ab\u8c03\u7528\u3002\u8be5\u51fd\u6570\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u62d2\u7edd\u7684\u539f\u56e0\u3002")))),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u7528\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5"),r.a.createElement(o.a,{code:"const promise = new Promise((resolve, reject) => {\n  resolve('Fulfilled');\n});\n\npromise.then(\n  res => console.log(res), // Output: 'Fulfilled'\n  rej => console.log(rej)\n);\n",lang:"js"}),r.a.createElement("h3",{id:"\u94fe\u5f0f\u8c03\u7528"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u94fe\u5f0f\u8c03\u7528"},r.a.createElement("span",{className:"icon icon-link"})),"\u94fe\u5f0f\u8c03\u7528"),r.a.createElement("p",null,"\u91c7\u7528\u94fe\u5f0f\u8c03\u7528\u7684 ",r.a.createElement("code",null,".then()"),"\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4\u6309\u7167\u6b21\u5e8f\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\u3002\u8fd9\u65f6\uff0c\u524d\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u6709\u53ef\u80fd\u8fd4\u56de\u7684\u8fd8\u662f\u4e00\u4e2a Promise \u5bf9\u8c61\uff08\u5373\u6709\u5f02\u6b65\u64cd\u4f5c\uff09\uff0c\u8fd9\u65f6\u540e\u9762\u7d27\u8ddf\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5c31\u4f1a\u7b49\u5f85\u8be5 Promise \u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff0c\u624d\u4f1a\u88ab\u8c03\u7528\u3002"),r.a.createElement(o.a,{code:"getJSON('/post/1.json')\n  .then(post => getJSON(post.commentURL))\n  .then(comments => console.log('resolved: ', comments), err => console.log('rejected: ', err));\n",lang:"js"}),r.a.createElement("h3",{id:"\u53c2\u6570\u4f20\u9012"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570\u4f20\u9012"},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u4f20\u9012"),r.a.createElement("p",null,"\u94fe\u5f0f\u8c03\u7528\u4e2d\uff0c\u4e00\u4e2a ",r.a.createElement("code",null,".then()")," \u6267\u884c\u5b8c\u6210\u540e\u8fd4\u56de\u65b0\u521b\u5efa\u7684 Promise \u5bf9\u8c61\uff0c\u5e76\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a ",r.a.createElement("code",null,".then()")," \u65b9\u6cd5\uff0c\u5f53\u4e0a\u4e00\u4e2a ",r.a.createElement("code",null,".then()")," \u9700\u8981\u4f20\u9012\u53c2\u6570\u5230\u4e0b\u4e00\u4e2a\u53c2\u6570\u65f6\uff0c\u53ef\u4ee5\u8fd9\u6837\u64cd\u4f5c\u3002"),r.a.createElement(o.a,{code:"// Example\nfunction foo(value) {\n  return value * 2;\n}\n\nfunction bar(value) {\n  return value + 5;\n}\n\nfunction baz(value) {\n  console.log(value);\n}\n\nconst promise = Promise.resolve(1);\n\npromise\n  .then(foo)\n  .then(bar)\n  .then(baz)\n  .catch(error => console.log(err));\n",lang:"js"}),r.a.createElement("p",null,"\u6267\u884c\u6d41\u7a0b\u5206\u6790\uff1a"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u5165\u53e3\u51fd\u6570\u662f ",r.a.createElement("code",null,"Promise.resolve(1)")),r.a.createElement("li",null,r.a.createElement("code",null,"Promise.resolve(1)")," \u4f20\u9012\u53c2\u6570 ",r.a.createElement("code",null,"1")," \u7ed9 ",r.a.createElement("code",null,"foo")," \u51fd\u6570"),r.a.createElement("li",null,"\u51fd\u6570 ",r.a.createElement("code",null,"foo")," \u5bf9\u63a5\u6536\u7684\u53c2\u6570\u8fdb\u884c\u64cd\u4f5c\u5e76\u8fd4\u56de"),r.a.createElement("li",null,"\u8fd9\u65f6\u53c2\u6570\u4e3a ",r.a.createElement("code",null,"2")," \u4f20\u9012\u7ed9\u51fd\u6570 ",r.a.createElement("code",null,"bar")),r.a.createElement("li",null,"\u6700\u540e\u5728\u51fd\u6570 ",r.a.createElement("code",null,"baz")," \u4e2d\u6253\u5370\u7ed3\u679c ",r.a.createElement("code",null,"7"))),r.a.createElement("p",null,"\u6bcf\u4e2a\u65b9\u6cd5\u4e2d ",r.a.createElement("code",null,"return")," \u7684\u503c\u4e0d\u4ec5\u53ea\u5c40\u9650\u4e8e\u5b57\u7b26\u4e32\u6216\u8005\u6570\u503c\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\u6216\u8005 Promise \u5bf9\u8c61\u7b49\u590d\u6742\u7c7b\u578b\u3002"),r.a.createElement("p",null,r.a.createElement("code",null,"return")," \u7684\u503c\u4f1a\u7531 ",r.a.createElement(t["a"],{to:"../properties-of-the-promise-constructor/resolve"},"Promise.resolve")," \u8fdb\u884c\u76f8\u5e94\u7684\u5305\u88c5\u5904\u7406\uff0c\u56e0\u6b64\u4e0d\u7ba1\u56de\u8c03\u51fd\u6570\u4e2d\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4ec0\u4e48\u6837\u7684\u503c\uff0c\u6700\u7ec8 ",r.a.createElement("code",null,".then()")," \u7684\u7ed3\u679c\u90fd\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u521b\u5efa\u7684 Promise \u5bf9\u8c61\u3002")))}}}]);