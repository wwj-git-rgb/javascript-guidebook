(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[220],{"9ffj":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),o=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(o);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u8282\u70b9\u5c5e\u6027"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8282\u70b9\u5c5e\u6027"},l.a.createElement("span",{className:"icon icon-link"})),"\u8282\u70b9\u5c5e\u6027"),l.a.createElement("p",null,"\u901a\u8fc7\u66b4\u9732\u7684 Node \u8282\u70b9\u5c5e\u6027\uff0c\u53ef\u4ee5\u83b7\u53d6\u76f8\u5173 Node \u8282\u70b9\u7684\u5c5e\u6027\u4fe1\u606f\u3002"),l.a.createElement(c.a,{code:'<body>\n  <div id="app">\n    Hello World\uff01\n    <ul id="list">\n      <li id="item"></li>\n    </ul>\n  </div>\n</body>\n',lang:"html"}),l.a.createElement("h2",{id:"api"},l.a.createElement("a",{"aria-hidden":"true",href:"#api"},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"nodenodename"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodenodename"},l.a.createElement("span",{className:"icon icon-link"})),"Node.nodeName"),l.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u8282\u70b9\u7684\u540d\u79f0"),l.a.createElement(c.a,{code:'const list = document.getElementById(\'list\');\nconst item = list.firstElementChild;\n\nconsole.log(list.nodeName);\n// "UL"\nconsole.log(item.nodeName);\n// "LI"\n',lang:"js"}),l.a.createElement("h3",{id:"nodenodetype"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodenodetype"},l.a.createElement("span",{className:"icon icon-link"})),"Node.nodeType"),l.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u8282\u70b9\u7c7b\u578b\u7684\u5e38\u6570\u503c"),l.a.createElement("p",null,l.a.createElement("a",{href:"node.md"},"\u8282\u70b9\u7c7b\u578b\u5bf9\u5e94\u7684\u5e38\u6570\u503c")),l.a.createElement(c.a,{code:"const app = document.getElementById('app');\n\nconst text = app.firstChild;\nconsole.log(text);\n// #text\n\nconst ele = app.firstElementChild;\nconsole.log(ele);\n// <ul id=\"list\">...</ul>\n\nconsole.log(app.nodeType);\n// 1\nconsole.log(text.nodeType);\n// 3\nconsole.log(document.nodeType);\n// 9\n",lang:"js"}),l.a.createElement("h3",{id:"nodenodevalue"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodenodevalue"},l.a.createElement("span",{className:"icon icon-link"})),"Node.nodeValue"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"DOM Level 2 Core: Node.nodeValue")),l.a.createElement("p",null,"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5f53\u524d\u8282\u70b9\u7684\u503c"),l.a.createElement("p",null,"\u5bf9\u4e8e",l.a.createElement("strong",null,"\u6ce8\u91ca"),"\u548c",l.a.createElement("strong",null,"\u6587\u672c"),"\u8282\u70b9\u6765\u8bf4\uff0c\u4f1a\u8fd4\u56de\u6587\u672c\u5185\u5bb9\uff0c\u5176\u4ed6\u5747\u8fd4\u56de ",l.a.createElement("code",null,"null"),"\u3002"),l.a.createElement(c.a,{code:"const app = document.getElementById('app');\n\nconsole.log(app.firstChild.nodeValue);\n// 'Hello World\uff01'\n",lang:"js"}),l.a.createElement("h3",{id:"nodetextcontent"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodetextcontent"},l.a.createElement("span",{className:"icon icon-link"})),"Node.textContent"),l.a.createElement("p",null,"\u83b7\u53d6\u6216\u8bbe\u7f6e\u5f53\u524d\u8282\u70b9\u53ca\u5176\u6240\u6709\u540e\u4ee3\u8282\u70b9\u7684\u6587\u672c\u5185\u5bb9"),l.a.createElement("p",null,"\u5982\u679c node \u4e3a Document\u3001DocumentType \u6216\u8005 Notation \u7c7b\u578b\u8282\u70b9\uff0c\u5219 textContent \u8fd4\u56de ",l.a.createElement("code",null,"null"),"\u3002"),l.a.createElement("p",null,"\u5982\u679c\u8981\u83b7\u53d6\u6574\u4e2a\u6587\u6863\u7684\u6587\u672c\u4ee5\u53ca CDATA \u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"document.documentElement.textContent"),"\u3002"),l.a.createElement("p",null,"\u5982\u679c\u8282\u70b9\u662f CDATA \u7247\u6bb5\u3001Comment \u6ce8\u91ca\u8282\u70b9\u3001ProcessingInstruction \u8282\u70b9\u6216\u6587\u672c\u8282\u70b9\uff0c\u5219\u8fd4\u56de\u8282\u70b9\u5185\u90e8\u7684\u6587\u672c\u8282\u70b9\uff08\u5373 ",l.a.createElement("code",null,"nodeValue"),"\uff09\u3002"),l.a.createElement("p",null,"\u5bf9\u4e8e\u5176\u4ed6\u8282\u70b9\u7c7b\u578b\uff0c",l.a.createElement("code",null,"textContent")," \u5c06\u6240\u6709\u5b50\u8282\u70b9\u7684 ",l.a.createElement("code",null,"textContent")," \u5408\u5e76\u540e\u8fd4\u56de\uff08\u9664\u6ce8\u91ca\u8282\u70b9\uff09\u3002\u5982\u679c\u8be5\u5b50\u8282\u70b9\u6ca1\u6709\u5b50\u8282\u70b9\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),l.a.createElement("p",null,"\u5728\u8282\u70b9\u4e0a\u8bbe\u7f6e ",l.a.createElement("code",null,"textContent")," \u5c5e\u6027\u7684\u8bdd\uff0c\u4f1a\u5220\u9664\u5b83\u7684\u6240\u6709\u5b50\u8282\u70b9\uff0c\u5e76\u66ff\u6362\u4e3a\u4e00\u4e2a\u5177\u6709\u7ed9\u5b9a\u503c\u7684\u6587\u672c\u8282\u70b9\u3002"),l.a.createElement(c.a,{code:"<div class=\"app\">Hello world!</div>\n\n<script dangerouslySetInnerHTML={{ __html: `\n  const text = document.getElementById('app').textContent;\n\n  console.log(text);\n  // 'Hello world!'\n\n  document.getElementById('app').textContent = 123;\n\n  console.log(text);\n  // 123\n` }} />\n",lang:"html"}),l.a.createElement("h3",{id:"nodebaseuri"},l.a.createElement("a",{"aria-hidden":"true",href:"#nodebaseuri"},l.a.createElement("span",{className:"icon icon-link"})),"Node.baseURI"),l.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u7f51\u9875\u7684\u7edd\u5bf9\u8def\u5f84"),l.a.createElement(c.a,{code:"const app = document.getElmentById('app');\n\nconsole.log(app.baseURI)``; // \"https://www.baidu.com/\"\n",lang:"js"}),l.a.createElement("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6700\u4f73\u5b9e\u8df5"},l.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4f73\u5b9e\u8df5"),l.a.createElement("h3",{id:"\u8282\u70b9\u7c7b\u578b\u5224\u65ad"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8282\u70b9\u7c7b\u578b\u5224\u65ad"},l.a.createElement("span",{className:"icon icon-link"})),"\u8282\u70b9\u7c7b\u578b\u5224\u65ad"),l.a.createElement(c.a,{code:"const app = document.querySelector('.app');\n\nif (app.nodeType == Node.ELEMENT_NODE) {\n  // \u5728IE\u4e2d\u65e0\u6548\n  console.log('Node is an element.');\n}\n",lang:"js"}),l.a.createElement("p",null,"\u5982\u679c\u4e24\u8005\u76f8\u7b49\uff0c\u5219\u610f\u5473\u7740 app \u786e\u5b9e\u662f\u4e00\u4e2a\u5143\u7d20\u3002\u7136\u800c\uff0c\u7531\u4e8e IE \u6ca1\u6709\u516c\u5f00 Node \u7c7b\u578b\u7684\u6784\u9020\u51fd\u6570\uff0c\u56e0\u6b64\u4e0a\u9762\u7684\u4ee3\u7801\u5728 IE \u4e2d\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002\u4e3a\u4e86\u786e\u4fdd\u8de8\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\uff0c\u6700\u597d\u8fd8\u662f\u5c06 nodeType \u5c5e\u6027\u4e0e\u6570\u503c\u5e38\u91cf\u8fdb\u884c\u6bd4\u8f83\u3002"),l.a.createElement(c.a,{code:"const app = document.querySelector('.app');\n\nif (app.nodeType == 1) {\n  console.log('Node is an element.');\n}\n",lang:"js"})))}}}]);