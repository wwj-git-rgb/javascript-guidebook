(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[198],{"8rSr":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),c=t.n(a),l=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(l);t("5Yjd");n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u6587\u6863\u5c5e\u6027"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u6587\u6863\u5c5e\u6027"},c.a.createElement("span",{className:"icon icon-link"})),"\u6587\u6863\u5c5e\u6027"),c.a.createElement("p",null,"\u8fd9\u91cc\u7f57\u5217\u4e3b\u8981\u7684\u6587\u6863\u4fe1\u606f API"),c.a.createElement("h2",{id:"documentdoctype"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentdoctype"},c.a.createElement("span",{className:"icon icon-link"})),"document.doctype"),c.a.createElement("p",null,"\u83b7\u53d6\u6587\u6863\u5173\u8054\u7684\u6587\u6863\u7c7b\u578b\u5b9a\u4e49\u3002"),c.a.createElement("p",null,"\u8fd4\u56de\u7684\u5bf9\u8c61\u5b9e\u73b0\u4e86 DocumentType \u63a5\u53e3\uff0c\u4f7f\u7528 ",c.a.createElement("code",null,"DOMImplementation.createDocumentType()")," \u65b9\u6cd5\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a DocumentType \u7c7b\u578b\u7684\u5bf9\u8c61\u3002"),c.a.createElement(o.a,{code:"const doc = document.doctype;\n\nconsole.log(doc.name);\n// html\n",lang:"js"}),c.a.createElement("h2",{id:"documentdocumentelement"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentdocumentelement"},c.a.createElement("span",{className:"icon icon-link"})),"document.documentElement"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u76f4\u63a5\u5b50\u8282\u70b9\u3002\u5bf9\u4e8e HTML \u6587\u6863\uff0cHTMLHtmlElement \u5bf9\u8c61\u4e00\u822c\u4ee3\u8868\u8be5\u6587\u6863\u7684 ",c.a.createElement("code",null,"<html>")," \u5143\u7d20\u3002"),c.a.createElement(o.a,{code:"const rootElement = document.documentElement;\nconst firstTier = rootElement.childNodes;\n\n// firstTier \u662f\u7531\u6839\u5143\u7d20\u7684\u6240\u6709\u5b50\u8282\u70b9\u7ec4\u6210\u7684\u4e00\u4e2a NodeList\nfor (let i = 0; i < firstTier.length; i++) {\n  // \u4f7f\u7528\u6839\u8282\u70b9\u7684\u6bcf\u4e2a\u5b50\u8282\u70b9\n  // \u5982 firstTier[i]\n}\n",lang:"js"}),c.a.createElement("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u53ea\u8bfb\u5c5e\u6027\u80fd\u5f88\u65b9\u4fbf\u7684\u83b7\u53d6\u5230\u4efb\u610f\u6587\u6863\u7684\u6839\u5143\u7d20\u3002"),c.a.createElement("h2",{id:"documentbody"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentbody"},c.a.createElement("span",{className:"icon icon-link"})),"document.body"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u4e2d\u7684 ",c.a.createElement("code",null,"<body>")," \u5143\u7d20\u6216\u8005 ",c.a.createElement("code",null,"<frameset>")," \u5143\u7d20\u3002"),c.a.createElement(o.a,{code:"const body = document.body;\n\nconsole.log(body.nodeName);\n// 'BODY'\n",lang:"js"}),c.a.createElement("h2",{id:"documenthead"},c.a.createElement("a",{"aria-hidden":"true",href:"#documenthead"},c.a.createElement("span",{className:"icon icon-link"})),"document.head"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u4e2d\u7684 ",c.a.createElement("code",null,"<head>")," \u5143\u7d20\u3002\u5982\u679c\u6709\u591a\u4e2a ",c.a.createElement("code",null,"<head>")," \u5143\u7d20\uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u3002"),c.a.createElement(o.a,{code:"const head = document.head;\n\nconsole.log(head.nodeName);\n// 'HEAD'\n",lang:"js"}),c.a.createElement("h2",{id:"documentactiveelement"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentactiveelement"},c.a.createElement("span",{className:"icon icon-link"})),"document.activeElement"),c.a.createElement("p",null,c.a.createElement("code",null,"document.activeElment")," \u6307\u5411\u5f53\u524d\u9875\u9762\u83b7\u5f97\u7126\u70b9\u7684\u5143\u7d20\u3002"),c.a.createElement("p",null,"\u6587\u6863\u52a0\u8f7d\u5b8c\u6210\u540e\uff1a",c.a.createElement("code",null,"document.activeElement")," \u6307\u5411 ",c.a.createElement("code",null,"document.body")),c.a.createElement("p",null,"\u6587\u6863\u52a0\u8f7d\u671f\u95f4\uff1a",c.a.createElement("code",null,"document.activeElement")," \u6307\u5411 ",c.a.createElement("code",null,"null")),c.a.createElement("p",null,"\u4f7f\u7528\u8be5\u5c5e\u6027\u53ef\u4ee5\u5de7\u5999\u5730\u5224\u65ad\u6587\u6863\u662f\u5426\u52a0\u8f7d\u5b8c\u6210\u3002"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"\u53ef\u4ee5\u901a\u904e ",c.a.createElement("code",null,"document.hasFocus()")," \u65b9\u6cd5\u6765\u67e5\u770b\u5f53\u524d\u5143\u7d20\u662f\u5426\u83b7\u53d6\u7126\u70b9")),c.a.createElement("h2",{id:"documentlinks"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentlinks"},c.a.createElement("span",{className:"icon icon-link"})),"document.links"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u6240\u6709 ",c.a.createElement("code",null,"<a>")," \u5143\u7d20"),c.a.createElement("p",null,"\ud83c\udf30 ",c.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),c.a.createElement(o.a,{code:"// \u8fd4\u56de\u6587\u6863\u7684\u94fe\u63a5\u6570\ndocument.links.length;\n\n// \u8fd4\u56de\u6587\u6863\u7b2c\u4e00\u4e2a\u94fe\u63a5\ndocument.links[0];\n",lang:"js"}),c.a.createElement("h2",{id:"documentdocumenturi"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentdocumenturi"},c.a.createElement("span",{className:"icon icon-link"})),"document.documentURI"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u7f51\u5740"),c.a.createElement("p",null,"HTML \u6587\u6863\u6709\u4e00\u4e2a ",c.a.createElement("code",null,"document.URL")," \u5c5e\u6027\u8fd4\u56de\u540c\u6837\u7684\u503c\uff0c\u4f46\u662f\u4e0d\u50cf URL\uff0c",c.a.createElement("code",null,"document.documentURI")," \u9002\u7528\u4e8e\u6240\u6709\u7c7b\u578b\u7684\u6587\u6863\u3002"),c.a.createElement(o.a,{code:'console.log(document.documentURI);\n// "https://www.google.com/"\n',lang:"js"}),c.a.createElement("h2",{id:"documenturl"},c.a.createElement("a",{"aria-hidden":"true",href:"#documenturl"},c.a.createElement("span",{className:"icon icon-link"})),"document.URL"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u7f51\u5740"),c.a.createElement("p",null,"\u8be5\u5c5e\u6027\u7684\u503c\u548c DOM Level 0 \u4e2d\u7684 ",c.a.createElement("code",null,"document.location.href")," \u5c5e\u6027\u7684\u503c\u662f\u76f8\u7b49\u7684\uff0c\u7136\u800c ",c.a.createElement("code",null,"document.location.href")," \u662f\u53ef\u5199\u7684\uff0c",c.a.createElement("code",null,"document.URL")," \u662f\u53ea\u8bfb\u7684\u3002"),c.a.createElement("h2",{id:"documentdomain"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentdomain"},c.a.createElement("span",{className:"icon icon-link"})),"document.domain"),c.a.createElement("p",null,"\u83b7\u53d6/\u8bbe\u7f6e\u5f53\u524d\u6587\u6863\u7684\u539f\u59cb\u57df\u540d\uff0c\u7528\u4e8e\u540c\u6e90\u7b56\u7565\u3002"),c.a.createElement("p",null,"\u5982\u679c\u5f53\u524d\u6587\u6863\u7684\u57df\u65e0\u6cd5\u8bc6\u522b\uff0c\u90a3\u4e48 domain \u5c5e\u6027\u4f1a\u8fd4\u56de ",c.a.createElement("code",null,"null"),"\u3002"),c.a.createElement(o.a,{code:'console.log(document.domain);\n// "www.google.com"\n',lang:"js"}),c.a.createElement("h2",{id:"documentlocation"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentlocation"},c.a.createElement("span",{className:"icon icon-link"})),"document.location"),c.a.createElement("p",null,"\u83b7\u53d6 location \u5bf9\u8c61\uff0c\u63d0\u4f9b\u5f53\u524d\u6587\u6863\u7684 URL \u4fe1\u606f"),c.a.createElement(o.a,{code:'console.log(document.location);\n// {\n//   href: "https://www.google.com/",\n//   ancestorOrigins: undefined,\n//   origin: "https://www.google.com",\n//   protocol: "https:",\n//   host: "www.google.com",\n//   hostname: "www.google.com",\n//   pathname: "/",\n//   Symbol(Symbol.toPrimitive): undefined,\n// }\n',lang:"js"}),c.a.createElement("h2",{id:"documentreferrer"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentreferrer"},c.a.createElement("span",{className:"icon icon-link"})),"document.referrer"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u8bbf\u95ee\u6765\u6e90"),c.a.createElement("p",null,"\u5982\u679c\u7528\u6237\u76f4\u63a5\u6253\u5f00\u4e86\u8fd9\u4e2a\u9875\u9762\uff0c\u800c\u4e0d\u662f\u9875\u9762\u8df3\u8f6c\uff0c\u6216\u901a\u8fc7\u5730\u5740\u680f\u6216\u4e66\u7b7e\u7b49\u6253\u5f00\u7684\uff0c\u5219\u8be5\u5c5e\u6027\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002\u7531\u4e8e\u8be5\u5c5e\u6027\u53ea\u662f\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5\u4e0d\u80fd\u591f\u901a\u8fc7\u8be5\u5c5e\u6027\u5f15\u7528\u9875\u9762\u7684 DOM\u3002"),c.a.createElement(o.a,{code:'console.log(document.URL);\n// "https://google.com/search?xxxxxxxx"\n\nconsole.log(document.referrer);\n// "https://www.google.com/"\n',lang:"js"}),c.a.createElement("h2",{id:"documenttitle"},c.a.createElement("a",{"aria-hidden":"true",href:"#documenttitle"},c.a.createElement("span",{className:"icon icon-link"})),"document.title"),c.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u6807\u9898"),c.a.createElement(o.a,{code:"// \u8bbe\u7f6e\u6587\u6863\u6807\u9898\ndocument.title = 'Hello world!';\n",lang:"js"}),c.a.createElement("h2",{id:"documentcharacterset"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentcharacterset"},c.a.createElement("span",{className:"icon icon-link"})),"document.characterSet"),c.a.createElement("p",null,"\u83b7\u53d6\u6e32\u67d3\u5f53\u524d\u6587\u6863\u7684\u5b57\u7b26\u96c6"),c.a.createElement(o.a,{code:'console.log(document.characterSet);\n// "UTF-8"\n',lang:"js"}),c.a.createElement("h2",{id:"documentreadystate"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentreadystate"},c.a.createElement("span",{className:"icon icon-link"})),"document.readyState"),c.a.createElement("p",null,"\u63cf\u8ff0\u6587\u6863\u7684\u52a0\u8f7d\u72b6\u6001\uff0c\u5f53\u8be5\u72b6\u6001\u5c5e\u6027\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4f1a\u5728 document \u5bf9\u8c61\u4e0a\u89e6\u53d1 ",c.a.createElement("code",null,"readystatechange")," \u4e8b\u4ef6\u3002"),c.a.createElement("p",null,"\u53d6\u503c\uff1a"),c.a.createElement("ul",null,c.a.createElement("li",null,"loading / \u6b63\u5728\u52a0\u8f7d\uff1a\u6587\u6863\u4ecd\u5728\u52a0\u8f7d"),c.a.createElement("li",null,"interactive / \u53ef\u4ea4\u4e92\uff1a\u6587\u6863\u5df2\u88ab\u89e3\u6790\uff0c",c.a.createElement("strong",null,"\u6b63\u5728\u52a0\u8f7d"),"\u72b6\u6001\u7ed3\u675f\uff0c\u4f46\u662f\u8bf8\u5982\u56fe\u50cf\u3001\u6837\u5f0f\u8868\u548c\u6846\u67b6\u4e4b\u7c7b\u7684\u5b50\u8d44\u6e90\u4ecd\u5728\u52a0\u8f7d"),c.a.createElement("li",null,"complete / \u5b8c\u6210\uff1a\u6587\u6863\u548c\u6240\u6709\u5b50\u8d44\u6e90\u5df2\u5b8c\u6210\u52a0\u8f7d\uff0c\u8868\u793a ",c.a.createElement("code",null,"load")," \u72b6\u6001\u7684\u4e8b\u4ef6\u5373\u5c06\u88ab\u89e6\u53d1")),c.a.createElement("p",null,"\ud83c\udf30 ",c.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),c.a.createElement("p",null,"\u6839\u636e\u4e0d\u540c\u7684\u52a0\u8f7d\u72b6\u6001\u5904\u7406\u4e0d\u540c\u903b\u8f91"),c.a.createElement(o.a,{code:"switch (document.readyState) {\n  case 'loading':\n    // \u8868\u793a\u6587\u6863\u8fd8\u5728\u52a0\u8f7d\u4e2d\uff0c\u5373\u5904\u4e8e\u201c\u6b63\u5728\u52a0\u8f7d\u201d\u72b6\u6001\n    break;\n  case 'interactive':\n    // \u6587\u6863\u5df2\u7ecf\u7ed3\u675f\u4e86\u201c\u6b63\u5728\u52a0\u8f7d\u201d\u72b6\u6001\uff0cDOM\u5143\u7d20\u53ef\u4ee5\u88ab\u8bbf\u95ee\n    // \u4f46\u662f\u56fe\u50cf\u3001\u6837\u5f0f\u8868\u548c\u6846\u67b6\u7b49\u8d44\u6e90\u4f9d\u7136\u8fd8\u5728\u52a0\u8f7d\n    const span = document.createElement('span');\n    span.textContent = 'A <span> element';\n    document.body.appendChild(span);\n    break;\n  case 'complete':\n    // \u9875\u9762\u6240\u6709\u5185\u5bb9\u90fd\u5df2\u88ab\u5b8c\u5168\u52a0\u8f7d\n    const cssRule = document.styleSheets[0].cssRules[0].cssText;\n    console.log(`The first CSS rule is\uff1a${cssRule}`);\n    break;\n}\n",lang:"js"}),c.a.createElement("p",null,"\u6a21\u62df DOMContentLoaded / jQuery ready"),c.a.createElement(o.a,{code:"document.onreadystatechange = function() {\n  if (document.readyState === 'interactive') {\n    initApplication();\n  }\n};\n",lang:"js"}),c.a.createElement("p",null,"\u6a21\u62df load \u4e8b\u4ef6"),c.a.createElement(o.a,{code:"document.onreadystatechange = function() {\n  if (document.readyState === 'complete') {\n    initApplication();\n  }\n};\n",lang:"js"}),c.a.createElement("h2",{id:"documentdesignmode"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentdesignmode"},c.a.createElement("span",{className:"icon icon-link"})),"document.designMode"),c.a.createElement("p",null,"\u63a7\u5236\u5f53\u524d\u6587\u6863\u662f\u5426\u53ef\u7f16\u8f91\u3002\u6709\u6548\u503c\u4e3a ",c.a.createElement("code",null,'"on"')," \u548c ",c.a.createElement("code",null,'"off"'),"\u3002"),c.a.createElement(o.a,{code:"documnet.designMode = 'on' || 'off';\n\n// \u4f7f\u4e00\u4e2a <iframe> \u6587\u6863\u53ef\u7f16\u8f91\niframeNode.contentDocument.designMode = 'on';\n",lang:"js"}),c.a.createElement("h2",{id:"documentcookie"},c.a.createElement("a",{"aria-hidden":"true",href:"#documentcookie"},c.a.createElement("span",{className:"icon icon-link"})),"document.cookie"),c.a.createElement("p",null,"\u83b7\u53d6 Cookie"),c.a.createElement("p",null,"\u6bcf\u4e2a Cookie \u90fd\u662f\u4e00\u4e2a\u540d/\u503c\u5bf9\uff0c\u5982\u679c\u8981\u4e00\u6b21\u5b58\u50a8\u591a\u4e2a\u540d/\u503c\u5bf9\uff0c\u53ef\u4ee5\u4f7f\u7528\u5206\u53f7\u52a0\u7a7a\u683c\uff08",c.a.createElement("code",null,";"),"\uff09\u9694\u5f00\u3002"),c.a.createElement(o.a,{code:"// \u8bbe\u7f6e cookie\ndocument.cookie = 'uid=123';\ndocument.cookie = 'username=ben';\n\n// \u83b7\u53d6 cookie\nconsole.log(document.cookie);\n// \"uid=123;username=ben\"\n",lang:"js"}),c.a.createElement("h2",{id:"\u5176\u4ed6"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5176\u4ed6"},c.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ed6"),c.a.createElement(o.a,{code:"// \u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u6240\u6709\u8868\u5355\u5143\u7d20\ndocument.formas;\n\n// \u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u6240\u6709\u56fe\u7247\u5143\u7d20\ndocument.images;\n\n// \u83b7\u53d6\u5f53\u524d\u6587\u6863\u4e2d\u6240\u6709\u5d4c\u5165\u5bf9\u8c61\ndocument.embeds;\n\n// \u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u6240\u6709\u811a\u672c\ndocument.scripts;\n\n// \u83b7\u53d6\u5f53\u524d\u6587\u6863\u7684\u6240\u6709\u6837\u5f0f\u8868\ndocument.styleSheets;\n\n// \u83b7\u53d6\u5f53\u524d\u6587\u6863\u6700\u540e\u4fee\u6539\u7684\u65f6\u95f4\u6233\ndocument.lastModified;\n",lang:"js"})))}}}]);