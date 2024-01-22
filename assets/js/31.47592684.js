(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{282:function(s,t,a){s.exports=a.p+"assets/img/image-20231207115647634.e8eaee7b.png"},332:function(s,t,a){s.exports=a.p+"assets/img/image-20231207115640849.a9a6b4cc.png"},406:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"string-数字-字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string-数字-字符串"}},[s._v("#")]),s._v(" String：数字 & 字符串")]),s._v(" "),t("h2",{attrs:{id:"字符串常见命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串常见命令"}},[s._v("#")]),s._v(" 字符串常见命令")]),s._v(" "),t("h4",{attrs:{id:"基本读写-get-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本读写-get-set"}},[s._v("#")]),s._v(" 基本读写：get/set")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基本命令:get/set")]),s._v("\nSET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SET name lin")]),s._v("\nGET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# GET name 返回"lin"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"批量读写-mget"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量读写-mget"}},[s._v("#")]),s._v(" 批量读写：MGET")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量执行:mget")]),s._v("\nMSET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nMGET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"设置过期时间-ex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置过期时间-ex"}},[s._v("#")]),s._v(" 设置过期时间：EX")]),s._v(" "),t("p",[s._v("默认永不过期")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过期时间为 1000 秒")]),s._v("\nSET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ex "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以这样写")]),s._v("\nSETEX "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单位为毫秒")]),s._v("\npsetex "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"查询过期时间-ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询过期时间-ttl"}},[s._v("#")]),s._v(" 查询过期时间：TTL")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询过期时间")]),s._v("\nTTL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"字符串拼接-append"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串拼接-append"}},[s._v("#")]),s._v(" 字符串拼接：append")]),s._v(" "),t("p",[s._v("在字符串尾部追加字符串")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("get key\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),s._v("\nappend key "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nget key\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"查询长度-strlen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询长度-strlen"}},[s._v("#")]),s._v(" 查询长度：strlen")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("strlen "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"查询子串-range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询子串-range"}},[s._v("#")]),s._v(" 查询子串：range")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# get hello "hello world"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询从 0 ~ 4的子串")]),s._v("\ngetrange hello "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -1代表倒数第一个字符 -2代表倒数第二个字符")]),s._v("\ngetrange hello "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"设置字符串新值并返回旧值-getset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置字符串新值并返回旧值-getset"}},[s._v("#")]),s._v(" 设置字符串新值并返回旧值：getset")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 顾名思义 先get 再set")]),s._v("\ngetset db mysql\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis"')]),s._v("\nget db\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"key不存在才生效-setnx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key不存在才生效-setnx"}},[s._v("#")]),s._v(" key不存在才生效：SETNX")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 key 已经存在，命令无效")]),s._v("\nsetnx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个也可以批量")]),s._v("\nmsetnx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("需要注意的是：msetnx是原子性操作，如果有一个已经存在的key，那么全部键值都会设置失败")]),s._v(" "),t("h2",{attrs:{id:"数字相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数字相关命令"}},[s._v("#")]),s._v(" 数字相关命令")]),s._v(" "),t("h4",{attrs:{id:"整数自增减-incr-decr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整数自增减-incr-decr"}},[s._v("#")]),s._v(" 整数自增减：incr/decr")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("incr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"做减法-decrby-incrby"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#做减法-decrby-incrby"}},[s._v("#")]),s._v(" 做减法：decrby/incrby")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("decrby "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("diff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# value -= diff")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"浮点加减-incrbyfloat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮点加减-incrbyfloat"}},[s._v("#")]),s._v(" 浮点加减：incrbyfloat")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("incrbyfloat "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("diff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"对象头信息-redisobject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象头信息-redisobject"}},[s._v("#")]),s._v(" 对象头信息：redisObject")]),s._v(" "),t("p",[s._v("在了解String底层原理之前，不得不先说的是：redisObject。")]),s._v(" "),t("p",[s._v("在 Redis 中，所有的对象都会包含 redisObject 对象头，redisObject  包含了数据类型的元数据，具体的信息如下")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// redisObject共16字节如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("redisObject")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4 bit type 如string、list、hash")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4 bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" lru"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("LRU_BITS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3字节")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" refcount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4字节 引用计数器")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8 个字节 指向具体的内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("典型的 redisObject 如下图：")]),s._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:a(282),alt:"./image-20231207115647634"}}),s._v(" "),t("p",[s._v("Redis通过 redisObject 知道数据类型是 String 从而找到真正的数据。")]),s._v(" "),t("h2",{attrs:{id:"string底层实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string底层实现原理"}},[s._v("#")]),s._v(" String底层实现原理")]),s._v(" "),t("p",[s._v("Redis内部有三种内部数据类型。")]),s._v(" "),t("h3",{attrs:{id:"_1、int-整数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、int-整数"}},[s._v("#")]),s._v(" 1、int：整数")]),s._v(" "),t("p",[s._v("如果String本身是一个不超过C语言long类型的整数值：")]),s._v(" "),t("p",[s._v("那么，String不是广为人知的SDS，而是直接将redisObject中的：")]),s._v(" "),t("div",{staticClass:"language-C line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8 个字节 指向具体的内容")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("转换成C语言的long（也是8个字节），存储在头信息中，不占用别的内容了。")]),s._v(" "),t("h3",{attrs:{id:"sds的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sds的实现原理"}},[s._v("#")]),s._v(" SDS的实现原理")]),s._v(" "),t("p",[s._v("在介绍下面两个数据类型前，先来了解SDS，因为它们都基于SDS。")]),s._v(" "),t("p",[s._v("Redis 3.2，根据字符串长度选择不同的结构体，仅列出部分如下：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一共有 5 种 第一个是 1<<5  最大是1<<64")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对应的字符串长度小于 1<<8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("__attribute__")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__packed__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sdshdr8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint8_t")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 已使用长度，1 字节存储 ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint8_t")]),s._v(" alloc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 总长度 1字节")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 真正存储字符串的数据空间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对应的字符串长度小于 1<<32")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("__attribute__")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__packed__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sdshdr32")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint32_t")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4字节")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint32_t")]),s._v(" alloc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4字节")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"sds-vs-cstring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sds-vs-cstring"}},[s._v("#")]),s._v(" SDS vs Cstring")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("SDS")]),s._v(" "),t("th",[s._v("Cstring")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("获取字符串长度复杂度为 O(1)")]),s._v(" "),t("td",[s._v("获取字符串长度复杂度为 O(n)")])]),s._v(" "),t("tr",[t("td",[s._v("修改字符串时，"),t("strong",[s._v("最多")]),s._v("需要执行 N 次内存重分配")]),s._v(" "),t("td",[s._v("一定是 N 次")])]),s._v(" "),t("tr",[t("td",[s._v("可以保存二进制数据")]),s._v(" "),t("td",[s._v("不能")])])])]),s._v(" "),t("h3",{attrs:{id:"_2、embstr-小字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、embstr-小字符串"}},[s._v("#")]),s._v(" 2、embstr：小字符串")]),s._v(" "),t("p",[s._v("当字符串长度小于等于 44 字节，为embstr 类型。")]),s._v(" "),t("p",[t("strong",[s._v("embstr的特点是：redisObject和SDS连续")])]),s._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:a(332),alt:"image-20231207115640849"}}),s._v(" "),t("p",[s._v("连续的好处自然是能够"),t("strong",[s._v("提升性能")])]),s._v(" "),t("p",[s._v("缺点是：当字符串长度变化，不仅仅SDS，连redisObject都需要重新分配空间并初始化，因此当修改使得超出当前SDS的len时，修改的效率低。")]),s._v(" "),t("h3",{attrs:{id:"_3、row-大字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、row-大字符串"}},[s._v("#")]),s._v(" 3、row：大字符串")]),s._v(" "),t("p",[s._v("当字符串长度大于 44 字节时，会变为 raw 类型存储。")]),s._v(" "),t("p",[t("strong",[s._v("row的特点是：redisObject和SDS不连续，这意味着额外的一次内存分配")])]),s._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:a(282),alt:"image-20231207115647634"}}),s._v(" "),t("p",[s._v("好处是修改的性能比embstr高。")]),s._v(" "),t("h3",{attrs:{id:"浮点数-处理为字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮点数-处理为字符串"}},[s._v("#")]),s._v(" 浮点数：处理为字符串")]),s._v(" "),t("p",[s._v("浮点数并不会类似long被处理为8位的double，而是像字符串一样被处理")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 短浮点:embstr")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" testfloat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.112")]),s._v("\nobject encoding testfloat\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"embstr"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 长浮点:raw")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" testfloat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.112344444444444444444444444444444444444")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nobject encoding testfloat\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"raw"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"字符串唯一约束-大小512mb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串唯一约束-大小512mb"}},[s._v("#")]),s._v(" 字符串唯一约束：大小512MB")]),s._v(" "),t("p",[s._v("Redis的字符串用途十分广泛，因此几乎没有约束，也可以直接用来存储二进制格式的文件，比如jpeg格式图片。")]),s._v(" "),t("p",[s._v("唯一约束是：大小不可超过512MB。")]),s._v(" "),t("h2",{attrs:{id:"string潜在的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string潜在的问题"}},[s._v("#")]),s._v(" String潜在的问题")]),s._v(" "),t("h3",{attrs:{id:"_1、键值对数量的增长"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、键值对数量的增长"}},[s._v("#")]),s._v(" 1、键值对数量的增长")]),s._v(" "),t("p",[s._v("String作为V，只表达了一个键值对，相对其它数据类型，保存的信息最少，由于Redis使用哈希表组织整个数据库，这会导致哈希冲突概率提高，访问效率变低。RDB的效率也会受影响。")]),s._v(" "),t("h3",{attrs:{id:"_2、浪费内存空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、浪费内存空间"}},[s._v("#")]),s._v(" 2、浪费内存空间")]),s._v(" "),t("h4",{attrs:{id:"键值对占用的最小内存空间-64b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#键值对占用的最小内存空间-64b"}},[s._v("#")]),s._v(" 键值对占用的最小内存空间：64B")]),s._v(" "),t("p",[s._v("由于对Long的优化，RedisObject即可表达它的大小，没有任何额外的内存空间，但是：")]),s._v(" "),t("p",[t("strong",[s._v("一个Long本该只有8字节，但在Redis中以K-V形式存储却需要占用64B")]),s._v("。")]),s._v(" "),t("ul",[t("li",[s._v("由于Redis的内存分配原则，key,value,next三个指针24B，一个Long在Redis全局字典中就首先占用32B；")]),s._v(" "),t("li",[s._v("其次一个RedisObject就16字节，K-V各一个，就总共占用了32B。")])]),s._v(" "),t("p",[s._v("加起来共64B，所以如果存在大量的Long型字符串，对内存空间是非常不友好的。")])])}),[],!1,null,null,null);t.default=e.exports}}]);