(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[299],{mraD:function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),a=n.n(l),r=(n("B2uJ"),n("+su7"),n("qOys")),i=n.n(r);n("5Yjd");t["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"symbolsplit"},a.a.createElement("a",{"aria-hidden":"true",href:"#symbolsplit"},a.a.createElement("span",{className:"icon icon-link"})),"Symbol.split"),a.a.createElement("p",null,"\u5bf9\u8c61\u7684 ",a.a.createElement("code",null,"Symbol.split")," \u5c5e\u6027\uff0c\u6307\u5411\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5f53\u8be5\u5bf9\u8c61\u88ab ",a.a.createElement("code",null,"String.prototype.split")," \u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u4f1a\u8fd4\u56de\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"),a.a.createElement(i.a,{code:"String.prototype.split(separator, limit);\n// \u7b49\u540c\u4e8e\nseparator[Symbol.split](this, limit);\n",lang:"js"}),a.a.createElement(i.a,{code:"class MySplitter {\n  constructor(value) {\n    this.value = value;\n  }\n  [Symbol.split](string) {\n    let index = string.indexOf(this.value);\n    if (index === -1) {\n      return string;\n    }\n    return [string.substr(0, index), string.substr(index + this.value.length)];\n  }\n}\n\n'foobar'.split(new MySplitter('foo')); // ['', 'bar']\n\n'foobar'.split(new MySplitter('bar')); // ['foo', '']\n\n'foobar'.split(new MySplitter('baz')); // 'foobar'\n",lang:"js"}),a.a.createElement("p",null,"\u4e0a\u9762\u65b9\u6cd5\u4f7f\u7528 ",a.a.createElement("code",null,"Symbol.split")," \u65b9\u6cd5\uff0c\u91cd\u65b0\u5b9a\u4e49\u4e86\u5b57\u7b26\u4e32\u5bf9\u8c61\u7684 ",a.a.createElement("code",null,"split")," \u65b9\u6cd5\u7684\u884c\u4e3a\u3002")))}}}]);