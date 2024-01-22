(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{325:function(a,s,t){a.exports=t.p+"assets/img/image-20231229162759116.8cfa94c9.png"},394:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"threadlocal-线程本地变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal-线程本地变量"}},[a._v("#")]),a._v(" ThreadLocal：线程本地变量")]),a._v(" "),s("p",[a._v("ThreadLocal：线程本地变量，可以起到"),s("strong",[a._v("线程隔离")]),a._v("作用，即每个线程访问自己的变量，不再是共享一个变量。")]),a._v(" "),s("p",[a._v("ThreadLocal利用泛型来封装「任意的自定义类」，我们定义ThreadLocal封装的任意的自定义类为「资源」，ThreadLocal就是在「资源」的基础上做了一层封装")]),a._v(" "),s("h2",{attrs:{id:"threadlocal应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal应用场景"}},[a._v("#")]),a._v(" ThreadLocal应用场景")]),a._v(" "),s("p",[a._v("最常见的「资源」是数据库连接、simpleDateFormat等；")]),a._v(" "),s("blockquote",[s("p",[a._v("要么是线程独享的对象，要么是便于在线程生命周期的任意时间点方便的拿到。")])]),a._v(" "),s("p",[a._v("在业务代码中，通常会通过定义一个全局的类对ThreadLocal进行封装，从而使得web服务器的请求线程可以轻松的拿到关键的业务数据，比如userId")]),a._v(" "),s("h2",{attrs:{id:"threadlocal快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal快速入门"}},[a._v("#")]),a._v(" ThreadLocal快速入门")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocaDemo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" local "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h4",{attrs:{id:"三个api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个api"}},[a._v("#")]),a._v(" 三个API")]),a._v(" "),s("ul",[s("li",[a._v("set(T)：改")]),a._v(" "),s("li",[a._v("remove：删")]),a._v(" "),s("li",[a._v("get：查")])]),a._v(" "),s("h2",{attrs:{id:"threadlocal实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal实现原理"}},[a._v("#")]),a._v(" ThreadLocal实现原理")]),a._v(" "),s("p",[a._v("既然ThreadLocal是对「资源」的封装，那我们第一个要解决的问题就是："),s("strong",[a._v("ThreadLocal如何存储资源？")]),a._v(" 你会发现ThreadLocal内部没有任何字段保存了资源，那么资源去哪里了？")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("JDK8之前，"),s("strong",[a._v("ThreadLocal")]),a._v("维护ThreadLocalMap，"),s("strong",[a._v("以Thread为key")]),a._v("存对应的数据")]),a._v(" "),s("li",[a._v("现在"),s("strong",[a._v("Thread")]),a._v("维护ThreadLocalMap，"),s("strong",[a._v("以ThreadLocal为key")]),a._v("存对应的数据")])]),a._v(" "),s("p",[a._v("下面基于JDK8源码分析")])]),a._v(" "),s("h3",{attrs:{id:"线程存储threadlocalmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程存储threadlocalmap"}},[a._v("#")]),a._v(" 线程存储ThreadLocalMap")]),a._v(" "),s("p",[a._v("ThreadLocalMap是一张哈希表。key是ThreadLocal，value是ThreadLocal封装的「资源」。")]),a._v(" "),s("p",[a._v("ThreadLocalMap所有方法都是private的，没有向外暴露任何方法，因此如果仅仅想知道ThreadLocal的工作原理，我们完全不需要关注它的实现原理。")]),a._v(" "),s("p",[a._v("我们暂时可以把ThreadLocalMap理解成类HashMap，提供了类似哈希表数据结构的get/set/remove等功能，把ThreadLocalMap当成黑盒来看，关于ThreadLocalMap这样设计的原因我们后面再深入分析，先来看看ThreadLocal最核心的功能如何实现。")]),a._v(" "),s("h3",{attrs:{id:"读写-转化为对map的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读写-转化为对map的操作"}},[a._v("#")]),a._v(" 读写：转化为对Map的操作")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalMap")]),a._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("map "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Entry")]),a._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("e "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setInitialValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("拿到线程的ThreadLocalMap，调用getEntry方法，如果value为null设置为初始值并返回")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalMap")]),a._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("map "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("同样转化为对线程的ThreadLocalMap的操作，如果没有Map就初始化。")]),a._v(" "),s("p",[a._v("还支持remove操作，也是一样的，就不贴源码了")]),a._v(" "),s("h4",{attrs:{id:"自定义初始值-重写initialvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义初始值-重写initialvalue"}},[a._v("#")]),a._v(" 自定义初始值：重写initialValue")]),a._v(" "),s("p",[a._v("get方法如果为null，ThreadLocal会返回一个可以自定义的初始值，自定义方法是initialValue")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setInitialValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initialValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 省略维护Map")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initialValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("我们可以通过重写initialValue方法从而设置ThreadLocal的资源的初始值")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyResource")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initialValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 自定义初始值")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("绕过了ThreadLocalMap，实际上对ThreadLocal的实现原理就已经讲完了，但是：")]),a._v(" "),s("p",[a._v("但凡稍微背过点八股文的都知道：ThreadLocal是有「内存泄漏」的风险的。即ThreadLocalMap这个黑盒到底做了些什么事情，又有什么风险，要如何解决呢？")]),a._v(" "),s("h2",{attrs:{id:"threadlocal的风险"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal的风险"}},[a._v("#")]),a._v(" ThreadLocal的风险")]),a._v(" "),s("h3",{attrs:{id:"_1、脏数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、脏数据"}},[a._v("#")]),a._v(" 1、脏数据")]),a._v(" "),s("p",[a._v("线程池一个很大的作用是「线程复用」，而线程复用，就会导致"),s("strong",[a._v("复用的线程共享同一个ThreadLocalMap")]),a._v("，因此如果没有及时remove ThreadLocal，直接调用get而期望拿到initial value，很可能会拿到上个线程的ThreadLocal值，这种风险是致命的。")]),a._v(" "),s("p",[a._v("要解决也不难：")]),a._v(" "),s("ul",[s("li",[a._v("在线程执行完毕后，结束前，remove所有的ThreadLocal")]),a._v(" "),s("li",[a._v("保证所有线程使用ThreadLocal前，先set从而保证是自己的value")])]),a._v(" "),s("p",[a._v("但第二种做法会导致initial value的失效，因此推荐remove方法")]),a._v(" "),s("h3",{attrs:{id:"_2、内存泄漏问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、内存泄漏问题"}},[a._v("#")]),a._v(" 2、内存泄漏问题")]),a._v(" "),s("p",[a._v("我们先来看Map的键值对。")]),a._v(" "),s("h4",{attrs:{id:"entry-map的键值对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry-map的键值对"}},[a._v("#")]),a._v(" Entry：Map的键值对")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Entry")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("WeakReference")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Reference内部封装了用户指定的泛型，在这里就是ThreadLocal<?>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" referent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("我们发现：Entry的key，也就是ThreadLocal，被设计成了"),s("strong",[a._v("弱引用")]),a._v("。")]),a._v(" "),s("blockquote",[s("p",[a._v("弱引用：对象值得被回收")])]),a._v(" "),s("h4",{attrs:{id:"为什么key是弱引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么key是弱引用"}},[a._v("#")]),a._v(" 为什么key是弱引用")]),a._v(" "),s("p",[a._v("解决「内存泄露」问题。")]),a._v(" "),s("blockquote",[s("p",[a._v("内存泄露：对象没有被引用，已经是个无用的对象了，但是GC无法将该对象回收。")])]),a._v(" "),s("p",[a._v("存在这样一条引用链：Thread -> ThreadLocalMap -> Entry -> ThreadLocal")]),a._v(" "),s("p",[a._v("因此，如果是强引用，即使没有任何引用指向ThreadLocal，只要线程不死亡，ThreadLocal 永远都不会死亡。因此，将key设计为弱引用，就可以解决这个问题。")]),a._v(" "),s("p",[a._v("但是Entry的value还是强引用，还是会发生「内存泄露」。即key为null，value还在。")]),a._v(" "),s("h4",{attrs:{id:"value的内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value的内存泄漏"}},[a._v("#")]),a._v(" value的内存泄漏")]),a._v(" "),s("p",[s("img",{attrs:{src:t(325),alt:"image-20231229162759116"}})]),a._v(" "),s("p",[a._v("上图来自"),s("a",{attrs:{href:"https://juejin.cn/user/3562073406314311/posts",target:"_blank",rel:"noopener noreferrer"}},[a._v("Richard_Yi"),s("OutboundLink")],1),a._v("，很好的阐述了value的内存泄漏问题")]),a._v(" "),s("p",[a._v("因此使用完ThreadLocal，需要手动调用"),s("code",[a._v("remove()")]),a._v("回收。")]),a._v(" "),s("blockquote",[s("p",[a._v("ThreadLocal在执行get set remove方法都会尽量把ThreadLocal为null的entry回收掉，这是ThreadLocal尽力解决「内存泄漏」问题，但是无法彻底解决，还是要手动remove")])]),a._v(" "),s("h4",{attrs:{id:"题外话-threadlocal如何作为key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题外话-threadlocal如何作为key"}},[a._v("#")]),a._v(" 题外话：ThreadLocal如何作为key")]),a._v(" "),s("p",[a._v("ThreadLocal类有个类变量：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("HASH_INCREMENT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x61c88647")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("所有ThreadLocal的实例对象有个threadLocalHashCode")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" threadLocalHashCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nextHashCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("next也体现了ThreadLocal类的每个实例对象的threadLocalHashCode都尽量不相同，因此：与HashMap不同，HashMap利用HashCode方法获取HashCode，ThreadLocal额外维护了自己的threadLocalHashCode。")]),a._v(" "),s("h2",{attrs:{id:"子线程获取父线程的threadlocal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子线程获取父线程的threadlocal"}},[a._v("#")]),a._v(" 子线程获取父线程的ThreadLocal")]),a._v(" "),s("p",[a._v("很多场景下，ThreadLocal需要共享，子线程需要访问父线程的ThreadLocal，Java提供了一种优雅的方式："),s("code",[a._v("InheritableThreadLocal")]),a._v(" 。")]),a._v(" "),s("p",[a._v("当"),s("code",[a._v("parent的inheritableThreadLocals")]),a._v("不为"),s("code",[a._v("null")]),a._v("时，就会将"),s("code",[a._v("parent")]),a._v("的"),s("code",[a._v("inheritableThreadLocals")]),a._v("，赋值给当前线程的"),s("code",[a._v("inheritableThreadLocals")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"inheritablethreadlocal实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inheritablethreadlocal实现原理"}},[a._v("#")]),a._v(" InheritableThreadLocal实现原理")]),a._v(" "),s("p",[a._v("IheritableThreadLocal直接继承ThreadLocal，只写了三个方法：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("childValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" parentValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" parentValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalMap")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("inheritableThreadLocals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" firstValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("inheritableThreadLocals "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" firstValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("在"),s("a",{attrs:{href:"https://juejin.cn/post/7281459744602587190",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java线程详解：线程模型，Thread类，异常处理器，异步执行结果Future"),s("OutboundLink")],1),a._v("一文中我们提到过，在创建线程时：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("inheritThreadLocals "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("inheritableThreadLocals "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("inheritableThreadLocals "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createInheritedMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("inheritableThreadLocals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("这个方法会"),s("strong",[a._v("将父线程的inheritableThreadLocals的所有键值对插入到自己的inheritableThreadLocals中")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"inheritablethreadlocal与线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inheritablethreadlocal与线程池"}},[a._v("#")]),a._v(" InheritableThreadLocal与线程池")]),a._v(" "),s("p",[a._v("我们知道线程池的线程复用会带来脏数据问题，但ThreadLocal只需要手动remove即可解决，但InheritableThreadLocal就没这么好办了。")]),a._v(" "),s("p",[a._v("InheritableThreadLocal 无法解决，"),s("strong",[a._v("也就是在使用线程池等会池化复用线程的执行组件情况下，异步执行执行任务，需要传递上下文的情况")]),a._v("。")]),a._v(" "),s("p",[a._v("对于线程池中的线程，它们的"),s("code",[a._v("InheritableThreadLocal")]),a._v("，都来自于"),s("strong",[a._v("线程池中第一个执行任务的线程")]),a._v("，这就会导致"),s("code",[a._v("InheritableThreadLocal")]),a._v("混乱/失效。")]),a._v(" "),s("p",[a._v("如何在线程池中正确的使用InheritableThreadLocal呢？TransmittableThreadLocal提供了这样的功能。"),s("strong",[s("a",{attrs:{href:"https://github.com/alibaba/transmittable-thread-local",target:"_blank",rel:"noopener noreferrer"}},[a._v("transmittable-thread-local"),s("OutboundLink")],1)]),a._v(" 是阿里巴巴开源的一个工具类，简称TTL，挖个坑，以后有空就来扒一扒TransmittableThreadLocal的源码。")]),a._v(" "),s("h4",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844904102015713293",target:"_blank",rel:"noopener noreferrer"}},[a._v("讲透 ThreadLocal 和 InheritableThreadLocal"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7214901105977671717",target:"_blank",rel:"noopener noreferrer"}},[a._v("从ThreadLocal谈到TransmittableThreadLocal，从使用到原理"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);