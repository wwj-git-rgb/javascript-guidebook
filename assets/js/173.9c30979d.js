(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{676:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"变量对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量对象"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),a("p",[t._v("变量对象是与 "),a("router-link",{attrs:{to:"/core-modules/executable-code-and-execution-contexts/execution/execution-context-stack.html"}},[t._v("执行上下文")]),t._v(" 相关的数据作用域，存储了在上下文中定义的"),a("strong",[t._v("变量")]),t._v("和"),a("strong",[t._v("函数声明")]),t._v("。")],1),t._v(" "),a("p",[t._v("因为不同执行上下文中的变量对象稍有不同，所以我们来聊聊 "),a("a",{attrs:{href:"#%E5%85%A8%E5%B1%80%E4%B8%8A%E4%B8%8B%E6%96%87"}},[t._v("全局上下文")]),t._v(" 下的变量对象和 "),a("a",{attrs:{href:"#%E5%87%BD%E6%95%B0%E4%B8%8A%E4%B8%8B%E6%96%87"}},[t._v("函数上下文")]),t._v(" 下的变量对象。")]),t._v(" "),a("h2",{attrs:{id:"全局上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局上下文"}},[t._v("#")]),t._v(" 全局上下文")]),t._v(" "),a("p",[t._v("💡 "),a("strong",[t._v("全局上下文中的变量对象就是全局对象")])]),t._v(" "),a("p",[t._v("我们先了解一个概念，叫全局对象。在 "),a("a",{attrs:{href:"http://www.w3school.com.cn/jsref/jsref_obj_global.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3School"),a("OutboundLink")],1),t._v(" 中也有介绍：")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("全局对象")]),t._v("是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在顶层 JavaScript 代码中，可以用关键字 "),a("code",[t._v("this")]),t._v(" 引用全局对象。因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。")])]),t._v(" "),a("blockquote",[a("p",[t._v("例如，当 JavaScript 代码引用 "),a("code",[t._v("parseInt()")]),t._v(" 函数时，它引用的是全局对象的 "),a("code",[t._v("parseInt")]),t._v(" 属性。全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。")])]),t._v(" "),a("p",[t._v("如果看的不是很懂的话，容我再来介绍下全局对象:")]),t._v(" "),a("ol",[a("li",[t._v("可以通过 "),a("code",[t._v("this")]),t._v(" 引用，在客户端 JavaScript 中，全局对象就是 Window 对象。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Window { ... }")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("全局对象是由 Object 构造函数实例化的一个对象。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("预定义全局函数和全局属性，在任何地方均可调用。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("作为全局变量的宿主。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("客户端 JavaScript 中，全局对象有 Window 属性指向自身。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'foo'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'foo'")]),t._v("\n")])])]),a("h2",{attrs:{id:"函数上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数上下文"}},[t._v("#")]),t._v(" 函数上下文")]),t._v(" "),a("p",[t._v("在函数上下文中，我们用"),a("strong",[t._v("活动对象")]),t._v("（Activation Object，AO）来表示变量对象。")]),t._v(" "),a("p",[t._v("活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 Activation Object ，而只有"),a("strong",[t._v("被激活")]),t._v("的变量对象，也就是活动对象上的各种属性才能被访问。")]),t._v(" "),a("p",[t._v("活动对象是在进入函数上下文时刻被创建的，它通过函数的 "),a("code",[t._v("arguments")]),t._v(" 属性初始化。"),a("code",[t._v("arguments")]),t._v(" 属性值是 Arguments 对象。")]),t._v(" "),a("h2",{attrs:{id:"执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行过程"}},[t._v("#")]),t._v(" 执行过程")]),t._v(" "),a("p",[t._v("执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("分析")]),t._v("：进入执行上下文")]),t._v(" "),a("li",[a("strong",[t._v("执行")]),t._v("：代码执行")])]),t._v(" "),a("h3",{attrs:{id:"进入执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入执行上下文"}},[t._v("#")]),t._v(" 进入执行上下文")]),t._v(" "),a("p",[t._v("当进入执行上下文时，这时候还没有执行代码，变量对象的创建，依次经历了以下几个过程：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("函数的所有形参（如果是函数上下文）")]),t._v(" "),a("ul",[a("li",[t._v("建立 Arguments 对象")]),t._v(" "),a("li",[t._v("检查当前上下文的参数，由名称和对应值组成的一个变量对象的属性被创建")]),t._v(" "),a("li",[t._v("没有实参，属性值设为 "),a("code",[t._v("undefined")])])])]),t._v(" "),a("li",[a("p",[t._v("函数声明")]),t._v(" "),a("ul",[a("li",[t._v("检查当前上下文的函数声明，也就是使用 "),a("code",[t._v("function")]),t._v(" 关键字声明的函数")]),t._v(" "),a("li",[t._v("在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用")]),t._v(" "),a("li",[t._v("如果变量对象已经存在相同名称的属性，那么该属性将会被新的引用所覆盖")])])]),t._v(" "),a("li",[a("p",[t._v("变量声明")]),t._v(" "),a("ul",[a("li",[t._v("检查当前上下文中的变量声明")]),t._v(" "),a("li",[t._v("每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为 "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[t._v("如果变量名称与已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性（亦可理解为为了防止同名的变量属性被修改为 "),a("code",[t._v("undefined")]),t._v("，则会直接跳过，原属性值不会被修改）")])])])]),t._v(" "),a("p",[t._v("🌰 "),a("strong",[t._v("标准示例：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在进入执行上下文后，这时候的活动对象 AO 是：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reference to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"代码执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码执行"}},[t._v("#")]),t._v(" 代码执行")]),t._v(" "),a("p",[t._v("在代码执行阶段，会根据代码，顺序执行代码，修改变量对象的值")]),t._v(" "),a("p",[t._v("还是上面的例子，当代码执行完后，这时候的 AO 是：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reference to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reference to FunctionExpression "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：")]),t._v(" "),a("ol",[a("li",[t._v("全局上下文的变量对象初始化是全局对象")]),t._v(" "),a("li",[t._v("函数上下文的变量对象初始化只包括 Arguments 对象")]),t._v(" "),a("li",[t._v("在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值")]),t._v(" "),a("li",[t._v("在代码执行阶段，会再次修改变量对象的属性值")])]),t._v(" "),a("h2",{attrs:{id:"活动对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#活动对象"}},[t._v("#")]),t._v(" 活动对象")]),t._v(" "),a("p",[a("strong",[t._v("VO 和 AO 到底是什么关系？")])]),t._v(" "),a("p",[t._v("未进入执行阶段之前，变量对象（VO：Variable Object）中的属性都不能访问。")]),t._v(" "),a("p",[t._v("但是进入执行阶段之后，活动对象（AO：Activation Object）被激活，里面的属性包括 VO、函数执行时传入的参数和 Arguments 对象都能被访问了，然后开始进行执行阶段的操作。")]),t._v(" "),a("p",[t._v("利用公式可以简单表述为:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("AO "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" VO + "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" parameters + arguments\n")])])]),a("hr"),t._v(" "),a("p",[a("strong",[t._v("参考资料：")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 JavaScript 深入之变量对象"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);