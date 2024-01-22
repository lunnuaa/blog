(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{403:function(a,t,v){"use strict";v.r(t);var s=v(14),_=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"gc-方法论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc-方法论"}},[a._v("#")]),a._v(" GC 方法论")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("ul",[t("li",[a._v("所有GC器都有RSet吗？存在部分垃圾收集的GC器几乎都有RSet")]),a._v(" "),t("li",[a._v("Card Table和RSet是什么关系？\nCard Table与Remembered Set的关系更像是HashMap与Map的关系。")]),a._v(" "),t("li",[a._v("三色标记的漏标问题怎么解决？")])]),a._v(" "),t("p",[a._v("如果关于以上问题有所疑问，相信看完这篇文章能够解答这些疑问。")]),a._v(" "),t("p",[a._v("GC的具体实现是取决于垃圾回收器的。垃圾回收器同时也决定了堆内存空间如何被划分。那么不妨先来看一看各个版本的JDK默认的垃圾回收器是什么，有个整体的概念")]),a._v(" "),t("h2",{attrs:{id:"gc进化史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc进化史"}},[a._v("#")]),a._v(" GC进化史")]),a._v(" "),t("p",[a._v("JDK8 之前属于古早版本")]),a._v(" "),t("p",[a._v("JDK8 默认垃圾收集器是 Parallel Scavenge（新生代）+Parallel Old（老年代）")]),a._v(" "),t("p",[a._v("JDK9 ~ 17 默认垃圾收集器仍然是G1")]),a._v(" "),t("h4",{attrs:{id:"jdk8的gc器的争议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk8的gc器的争议"}},[a._v("#")]),a._v(" JDK8的GC器的争议")]),a._v(" "),t("blockquote",[t("p",[a._v("《深入理解 Java 虚拟机》中提到 JDK 9 之前的Server默认GC器是：")]),a._v(" "),t("p",[t("code",[a._v("Parallel Scavenge + Serial Old(PS MarkSweep)")])]),a._v(" "),t("p",[a._v("实际上JDK 7U4，由于 "),t("code",[a._v("Parallel")]),a._v(" 的成熟，直接替换了Serial，所以 JDK 7u4 以后的 7 和 JDK 8 老年代默认使用的都是 "),t("code",[a._v("Parallel")]),a._v(" 收集器。")]),a._v(" "),t("p",[a._v("具体可以看这篇文章："),t("a",{attrs:{href:"https://blog.csdn.net/csdn_life18/article/details/129358752",target:"_blank",rel:"noopener noreferrer"}},[a._v("研究了 2 天，终于知道 JDK 8 默认 GC 收集器了"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"稳定的g1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#稳定的g1"}},[a._v("#")]),a._v(" 稳定的G1")]),a._v(" "),t("p",[a._v("可以看到，G1 在大多数时间都是默认的GC器，看似是 GC 器的老大，但G1实际上也经过很多版本的优化")]),a._v(" "),t("p",[a._v("JDK10：")]),a._v(" "),t("p",[a._v("新增了Full GC （1）。采用"),t("strong",[a._v("并行化")]),a._v("标记扫描压缩（mark-sweep-compact）GC算法，并使用与年轻代回收和混合回收相同数量的线程")]),a._v(" "),t("blockquote",[t("p",[a._v("G1的JDK10之前是 基于"),t("strong",[a._v("单线程")]),a._v("标记扫描压缩算法（mark-sweep-compact）")]),a._v(" "),t("p",[a._v("（1）：在以前G1的Full GC是直接交给serial old做的")])]),a._v(" "),t("p",[a._v("JDK12:")]),a._v(" "),t("p",[a._v("G1的可中断 mixed GC；G1能够立即归还未使用的部分Java堆内存给操作系统")]),a._v(" "),t("p",[a._v("JDK14:")]),a._v(" "),t("p",[a._v("Java 14 改进非一致性内存访问（NUMA）系统上的 G1 垃圾收集器的整体性能")]),a._v(" "),t("h3",{attrs:{id:"陨落的cms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#陨落的cms"}},[a._v("#")]),a._v(" 陨落的CMS")]),a._v(" "),t("p",[t("strong",[a._v("CMS从未被JDK采取为默认的GC，并且在JDK14被彻底废除了")]),a._v("。")]),a._v(" "),t("blockquote",[t("p",[a._v("JDK14 同时弃用 ParallelScavenge 和 SerialOld GC 的组合")])]),a._v(" "),t("p",[a._v("当然CMS在参数配置足够优秀契合的情况，还是不错的，只是配置太复杂了：CMS 的参数有 72 个，而 G1 的参数只有 26 个。")]),a._v(" "),t("h3",{attrs:{id:"新兴的zgc、shenandoahgc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新兴的zgc、shenandoahgc"}},[a._v("#")]),a._v(" 新兴的ZGC、ShenandoahGC")]),a._v(" "),t("p",[a._v("JDK11：首次推出ZGC")]),a._v(" "),t("p",[a._v("JDK12：首次推出ShenandoahGC")]),a._v(" "),t("p",[a._v("JDK15：ZGC正式作为新特性，但仍属于实验阶段")]),a._v(" "),t("p",[a._v("看下表就知道他们的强悍了。")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("对比项")]),a._v(" "),t("th",[a._v("G1")]),a._v(" "),t("th",[a._v("ZGC")]),a._v(" "),t("th",[a._v("ShenandoahGC")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("是否支持并发回收")]),a._v(" "),t("td",[a._v("不支持")]),a._v(" "),t("td",[a._v("支持")]),a._v(" "),t("td",[a._v("支持")])]),a._v(" "),t("tr",[t("td",[a._v("最大堆空间大小")]),a._v(" "),t("td",[a._v("达到上百GB停顿时间会很长")]),a._v(" "),t("td",[a._v("16TB")]),a._v(" "),t("td",[a._v("256TB")])]),a._v(" "),t("tr",[t("td",[a._v("平均停顿")]),a._v(" "),t("td",[a._v("500ms以内")]),a._v(" "),t("td",[a._v("10ms以内")]),a._v(" "),t("td",[a._v("1~20ms左右")])]),a._v(" "),t("tr",[t("td",[a._v("是否支持指针压缩")]),a._v(" "),t("td",[a._v("支持")]),a._v(" "),t("td",[a._v("不支持")]),a._v(" "),t("td",[a._v("支持")])])])]),a._v(" "),t("h3",{attrs:{id:"a-no-op-gc-epsilon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-no-op-gc-epsilon"}},[a._v("#")]),a._v(" A No_Op GC：Epsilon")]),a._v(" "),t("p",[a._v("JDK11推出。")]),a._v(" "),t("p",[a._v("Epsilon被描述为"),t("code",[a._v("A No_Op GC")]),a._v("。是指不会对内存进行回收。实际上"),t("strong",[a._v("任何GC器都要负责分配和管理堆内存")]),a._v("。")]),a._v(" "),t("p",[a._v("Epsilon的由来：")]),a._v(" "),t("p",[a._v("JVM的架构是三个系统：类加载，运行时数据区，和执行引擎。但是GC器实际上决定了运行时数据区的堆的内存划分，并且还要负责与执行引擎的协作，这导致了实现GC的耦合度较高。 因此需要剥离出这样一个**『自动内存管理系统』**接口。Epsilon是对这个接口的实现。")]),a._v(" "),t("p",[a._v("Epsilon本身不进行任何GC操作，它在启动时速度快，运行负载小，在测试环境有它的用武之地。")]),a._v(" "),t("h3",{attrs:{id:"查看你的gc器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看你的gc器"}},[a._v("#")]),a._v(" 查看你的GC器")]),a._v(" "),t("p",[a._v("输入如下命令")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java -XX:+PrintCommandLineFlags -version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("会得到这样一行代表GC参数，对应你具体使用的GC器")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("XX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UseParallelGC")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("还有一种方法：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GarbageCollectorMXBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" beans "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("                                                            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ManagementFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getGarbageCollectorMXBeans")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GarbageCollectorMXBean")]),a._v(" bean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" beans"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"gc基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc基础知识"}},[a._v("#")]),a._v(" GC基础知识")]),a._v(" "),t("p",[a._v("这部分是讲具体GC器的基础，所有GC通用，必须掌握。")]),a._v(" "),t("h3",{attrs:{id:"gc的主要区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc的主要区域"}},[a._v("#")]),a._v(" GC的主要区域")]),a._v(" "),t("p",[a._v("主要是堆。栈和PC不会被GC，方法区的Class信息几乎不会被GC（详见类的卸载，条件很苛刻）")]),a._v(" "),t("p",[a._v("JDK11的ZGC更是直接不支持类的卸载了，并且JVM规范不要求必须对方法区GC")]),a._v(" "),t("h3",{attrs:{id:"gc发生的时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc发生的时机"}},[a._v("#")]),a._v(" GC发生的时机")]),a._v(" "),t("p",[a._v("一般取决于具体的GC器")]),a._v(" "),t("h2",{attrs:{id:"判断对象是否可被回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断对象是否可被回收"}},[a._v("#")]),a._v(" 判断对象是否可被回收")]),a._v(" "),t("h3",{attrs:{id:"_1、引用计数法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、引用计数法"}},[a._v("#")]),a._v(" 1、引用计数法")]),a._v(" "),t("p",[a._v("每个对象自身都携带一个引用计数器，被引用计数器+1")]),a._v(" "),t("p",[a._v("实现简单，但无法解决循环引用问题，维护计数器的资源开销大。")]),a._v(" "),t("p",[a._v("当然引用计数法存在的价值还是有的。")]),a._v(" "),t("blockquote",[t("p",[a._v("Python、Redis、Perl、PHP等，它们的对象都是采用该算法进行存活判定。")]),a._v(" "),t("p",[a._v("Java的Netty的位于直接内存的Bytebuf也用的是引用计数法。")])]),a._v(" "),t("h3",{attrs:{id:"_2、可达性分析算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、可达性分析算法"}},[a._v("#")]),a._v(" 2、可达性分析算法")]),a._v(" "),t("p",[a._v("通过一系列的称为 "),t("strong",[a._v("“GC Roots”")]),a._v(" 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的，需要被回收。")]),a._v(" "),t("h4",{attrs:{id:"扫描栈的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扫描栈的概念"}},[a._v("#")]),a._v(" 扫描栈的概念")]),a._v(" "),t("p",[a._v("扫描栈用于存储所有待搜索的对象。也有paper叫它标记栈。")]),a._v(" "),t("h4",{attrs:{id:"gc-roots有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc-roots有哪些"}},[a._v("#")]),a._v(" GC Roots有哪些")]),a._v(" "),t("p",[t("strong",[a._v("哪些对象可以作为 GC Roots 呢？")])]),a._v(" "),t("ul",[t("li",[a._v("虚拟机栈(栈帧中的本地变量表)中引用的对象")]),a._v(" "),t("li",[a._v("本地方法栈 JNI (Native 方法)中引用的对象")]),a._v(" "),t("li",[a._v("方法区中类静态属性引用的对象")]),a._v(" "),t("li",[a._v("方法区中运行时常量池中常量引用的对象，字符串常量池里的引用也是")]),a._v(" "),t("li",[a._v("所有被同步锁持有的对象")]),a._v(" "),t("li",[a._v("系统对象：系统的三个类加载器，基本数据类型的class")])]),a._v(" "),t("p",[t("strong",[a._v("除此以外，在部分GC/分代GC时，还会有一些对象加入作为GC Roots，但这就取决于具体的GC器/JVM了")])]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("对象可以被回收，就代表一定会被回收吗？")])]),a._v(" "),t("p",[a._v("不是。要真正宣告一个对象死亡，至少要经历两次标记过程。")])]),a._v(" "),t("h4",{attrs:{id:"如何找到gc-roots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何找到gc-roots"}},[a._v("#")]),a._v(" 如何找到GC Roots")]),a._v(" "),t("blockquote",[t("p",[a._v("这一步一定是STW的。否则会导致结果的不准确。")])]),a._v(" "),t("p",[a._v("虽然我们明确知道哪些对象可以作为 GC Roots ，但是遍历整个方法区，栈，常量池等，显然效率太低。")]),a._v(" "),t("p",[a._v("HotSpot使用OopMap来实现，他将所有可能的GC Roots记录下来，这样直接从OopMap里就可以拿到GC Roots")]),a._v(" "),t("p",[a._v("但是，会导致OopMap变化的操作太多了，因此，只会在安全点记录OopMap")]),a._v(" "),t("h3",{attrs:{id:"stw-stop-the-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stw-stop-the-world"}},[a._v("#")]),a._v(" STW：stop the world")]),a._v(" "),t("p",[t("strong",[a._v("STW")]),a._v("：暂停所有用户线程")]),a._v(" "),t("p",[a._v("在找到GC Roots的这个过程，是一定会导致STW的。")]),a._v(" "),t("p",[a._v("暂停所有线程是需要一个合适的时机的，执行代码不是说停就能停的，至于原因涉及到了RSet的维护等等，比较复杂。总之专门有"),t("strong",[a._v("安全点和安全区域")]),a._v("两个概念作为线程由于某种原因需要暂停的暂停点。当用户线程执行到安全点或安全区域的代码处才可以被暂停。")]),a._v(" "),t("h3",{attrs:{id:"安全点的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全点的概念"}},[a._v("#")]),a._v(" 安全点的概念")]),a._v(" "),t("p",[a._v("安全点是一个线程可以放心地在此处暂停的位置。")]),a._v(" "),t("blockquote",[t("p",[a._v("安全点不仅仅与GC有关，还在别的方面影响着程序的运行")])]),a._v(" "),t("p",[a._v("HotSpot中，安全点位置主要在：")]),a._v(" "),t("ol",[t("li",[a._v("方法返回之前")]),a._v(" "),t("li",[a._v("方法调用之后")]),a._v(" "),t("li",[a._v("抛出异常的位置")]),a._v(" "),t("li",[a._v("循环的末尾")])]),a._v(" "),t("blockquote",[t("p",[a._v("『循环的末尾』这里又涉及到了一个可数/不可数循环的事情，具体可以看：")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7139741080597037063?searchId=202308281010178331533A3EFB14720017",target:"_blank",rel:"noopener noreferrer"}},[a._v("Thread.sleep(0) - by why技术"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("关于安全点的进一步深入可以结合两篇文章一起看：")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/zyqytsoft/article/details/131075899",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入浅出解析JVM中的Safepoint，可以入个门"),t("OutboundLink")],1)])]),a._v(" "),t("h4",{attrs:{id:"如何通知线程暂停"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何通知线程暂停"}},[a._v("#")]),a._v(" 如何通知线程暂停")]),a._v(" "),t("p",[a._v("实际上，JVM并不主动通知，而是设置一个标志。")]),a._v(" "),t("p",[a._v("每条线程执行时主动轮询这个标志，当一个线程到达安全点后，发现中断标志为"),t("code",[a._v("true")]),a._v("时就自己中断挂起。")]),a._v(" "),t("p",[a._v("JVM还会周期性地让所有线程进入安全点，由 "),t("code",[a._v("-XX:GuaranteedSafepointInterval")]),a._v("选项控制，该选项默认为 1000ms。由于各种各样的优化")]),a._v(" "),t("h3",{attrs:{id:"安全区域-对安全点的补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全区域-对安全点的补充"}},[a._v("#")]),a._v(" 安全区域：对安全点的补充")]),a._v(" "),t("p",[a._v("安全区域是对安全点的补充，处于安全区域的线程被视为进入安全点。想一下这样一个场景：发生了STW，但有些线程已经处于中断或者休眠状态，比如"),t("code",[a._v("Thread.sleep(1000)")]),a._v("。此时该线程需要告知JVM自己进入了安全区域，在该线程醒来时，需要判断自己是否可以退出安全区域，比如可达性分析算法是否执行完毕，然后才能正式醒来。")]),a._v(" "),t("h2",{attrs:{id:"并发的可达性分析-三色标记法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发的可达性分析-三色标记法"}},[a._v("#")]),a._v(" 并发的可达性分析：三色标记法")]),a._v(" "),t("p",[a._v("CMS和G1在并发标记阶段，都采用了这个算法。")]),a._v(" "),t("p",[a._v("首先，对象被分为三类：")]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("黑色：根对象，或者该对象与它的子对象都被扫描了")]),a._v(" "),t("li",[a._v("灰色：对象本身被扫描，但还没扫描完该对象中的子对象")]),a._v(" "),t("li",[a._v("白色：未被扫描对象，扫描完成所有对象之后，最终为白色的为不可达对象，即垃圾对象")])])]),a._v(" "),t("p",[a._v("三色标记流程：")]),a._v(" "),t("ol",[t("li",[a._v("起初所有对象为白色")]),a._v(" "),t("li",[a._v("短暂的STW，找出所有GC Roots，标记为黑色，与GC Roots相连的为灰色")]),a._v(" "),t("li",[a._v("遍历所有灰色点扫描直至没有灰色点/扫描栈为空")]),a._v(" "),t("li",[a._v("短暂STW，纠正"),t("strong",[a._v("漏标问题")])])]),a._v(" "),t("p",[a._v("三色标记的过程中，是并发的，即GC线程与用户线程同时工作，用户线程可能会导致对象的引用被改变，因此在并发标记结束后需要修正这一部分。")]),a._v(" "),t("h3",{attrs:{id:"错标问题-无需额外处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错标问题-无需额外处理"}},[a._v("#")]),a._v(" 错标问题：无需额外处理")]),a._v(" "),t("p",[a._v("错标问题是："),t("strong",[a._v("一个本该是白色的对象被标记为了黑色")]),a._v("。")]),a._v(" "),t("p",[a._v("一个原本被引用的对象，引用消失了，但已经被标记为黑色了。这会导致回收不及时，但这个对象在下次GC时也是大概率会被回收的。因此不需要额外关注。")]),a._v(" "),t("h3",{attrs:{id:"漏标问题-重要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏标问题-重要"}},[a._v("#")]),a._v(" 漏标问题（重要）")]),a._v(" "),t("p",[a._v("漏标问题是："),t("strong",[a._v("一个本该是黑色的对象被标记为了白色")]),a._v("。")]),a._v(" "),t("p",[a._v("漏标问题发生，会导致你的访问报出空指针异常。")]),a._v(" "),t("h4",{attrs:{id:"漏标问题发生的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏标问题发生的场景"}},[a._v("#")]),a._v(" "),t("strong",[a._v("漏标问题发生的场景")]),a._v("：")]),a._v(" "),t("p",[a._v("原本一个灰色指向一个白色，但这个引用消失了，与此同时，有一个黑色指向了这个白色。而黑色的点不会再扫描它指向的节点，这就导致了虽然黑色指向白色，但这个白色无法变为黑色。")]),a._v(" "),t("h3",{attrs:{id:"漏标问题解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏标问题解决方案"}},[a._v("#")]),a._v(" "),t("strong",[a._v("漏标问题解决方案")])]),a._v(" "),t("p",[a._v("漏标问题发生的必要条件：")]),a._v(" "),t("ul",[t("li",[a._v("灰色对象断开了与白色对象的引用")]),a._v(" "),t("li",[a._v("已经标为黑色的对象重新与白色对象建立了引用关系")])]),a._v(" "),t("p",[a._v("打破任一即可解决。")]),a._v(" "),t("p",[a._v("因此，漏标问题有两种解决方案：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("增量更新：关注黑指向白的引用新增")])]),a._v(" "),t("li",[t("strong",[a._v("快照：关注灰指向白的引用减少")])])]),a._v(" "),t("h4",{attrs:{id:"_1、增量更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、增量更新"}},[a._v("#")]),a._v(" 1、"),t("strong",[a._v("增量更新")])]),a._v(" "),t("p",[t("strong",[a._v("跟踪黑指向白的增加")])]),a._v(" "),t("p",[a._v("但新增黑指向白，记录这些黑色，并发标记完成后，重新标记为灰色，下次重新扫描属性。")]),a._v(" "),t("p",[a._v("CMS采用增量更新的方案")]),a._v(" "),t("h4",{attrs:{id:"_2、satb-snapshot-at-the-beginning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、satb-snapshot-at-the-beginning"}},[a._v("#")]),a._v(" 2、SATB：snapshot at the beginning")]),a._v(" "),t("p",[a._v("顾名思义：就是"),t("strong",[a._v("在开始标记的时候生成一个存活对象的快照图")]),a._v("。")]),a._v(" "),t("p",[a._v("SATB关注灰–>白的消失")]),a._v(" "),t("p",[a._v("G1、ZGC采用了SATB，具体的实现取决于GC器")]),a._v(" "),t("h2",{attrs:{id:"记忆集-帮助partial-gc找gc-root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记忆集-帮助partial-gc找gc-root"}},[a._v("#")]),a._v(" 记忆集：帮助Partial GC找GC Root")]),a._v(" "),t("p",[a._v("在做Young GC时，我们只对新生代清理，因此不希望扫描老年代，避免整堆扫描，从而提高效率。但可达性分析法的GC Roots可能在老年代，也可能在新生代。")]),a._v(" "),t("p",[t("strong",[a._v("如果从在老年代的GC Roots直接开始可达性分析，那必然会导致整堆扫描。")])]),a._v(" "),t("p",[a._v("因此我们需要记录"),t("strong",[a._v("哪些新生代是被老年代引用的")])]),a._v(" "),t("blockquote",[t("p",[a._v("一个作为GC Root的老年代，可能引用另一个老年代，从而引用一个新生代")]),a._v(" "),t("p",[a._v("一个本该被GC的对象没有被GC是允许的，但"),t("strong",[a._v("一个不该被GC的对象被GC了就会带来空指针异常等糟糕情况")])]),a._v(" "),t("p",[a._v("因此：所有被老年代引用的新生代，都可以作为Young GC的GC Roots。")])]),a._v(" "),t("p",[a._v("前面分代的例子只是为了让你更好的理解记忆集的作用。那实际上，不仅仅是分代需要记忆集，所有涉及到"),t("strong",[a._v("部分GC")]),a._v("的垃圾收集器都需要记忆集来避免整堆扫描。")]),a._v(" "),t("h3",{attrs:{id:"rset-抽象概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rset-抽象概念"}},[a._v("#")]),a._v(" RSet：抽象概念")]),a._v(" "),t("p",[t("strong",[a._v("Remembered Set是一种抽象概念")]),a._v("。Remembered Set是在实现部分垃圾收集（partial GC）时用于记录从非收集部分指向收集部分的指针的"),t("strong",[a._v("集合")]),a._v("的抽象数据结构。")]),a._v(" "),t("blockquote",[t("p",[a._v("R大说的："),t("a",{attrs:{href:"https://hllvm-group.iteye.com/group/topic/21468#post-272070",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://hllvm-group.iteye.com/group/topic/21468#post-272070"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"rset的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rset的实现"}},[a._v("#")]),a._v(" RSet的实现")]),a._v(" "),t("p",[a._v("那到底怎么记录分区的引用情况？一般有三种：")]),a._v(" "),t("ul",[t("li",[a._v("字粒度：记录每一个老年代到新生代的引用，精确到字宽")]),a._v(" "),t("li",[a._v("对象粒度：记录被老年代引用的新生代的对象")]),a._v(" "),t("li",[a._v("card粒度：记录一块内存区域，只知道这个区域内有这样的指针")])]),a._v(" "),t("p",[a._v("那具体的实现就取决于所有有分代概念的GC器了。但一般不会是字粒度。")]),a._v(" "),t("h4",{attrs:{id:"card-table-仅仅是特殊的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#card-table-仅仅是特殊的实现"}},[a._v("#")]),a._v(" Card Table：仅仅是特殊的实现")]),a._v(" "),t("h5",{attrs:{id:"常见误区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见误区"}},[a._v("#")]),a._v(" 常见误区")]),a._v(" "),t("p",[a._v("很多文章都提及了Card Table。很多资料也直接把Card Table当作了Remembered Set。实际上Card Table，仅仅是对Card粒度的RSet的一种实现。这是一处常见误区。Card Table与Remembered Set的关系更像是HashMap与Map的关系。")]),a._v(" "),t("p",[a._v("Card Table：使用字节数组来实现card的记录，每个card对应该数组里的一个bit或一个byte，用c语言实现是这样")]),a._v(" "),t("div",{staticClass:"language-C line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CardTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  \n      byte table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("MAX_CARDTABLE_SIZE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("很多文章作者都有一个误区：就是但凡是个RSet，就一定会有这样一个字节数组，实际是不对的。")]),a._v(" "),t("blockquote",[t("p",[a._v("CMS以及之前的大部分的分代收集器为Card Table")])]),a._v(" "),t("h4",{attrs:{id:"g1-per-region-remembered-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1-per-region-remembered-set"}},[a._v("#")]),a._v(" G1：per-region remembered set")]),a._v(" "),t("p",[a._v("G1采用了per-region remembered set实现记忆集，per-region remembered set也简称RSet，因此这个RSet的概念也是经常被混淆。具体后面讲到G1再说。")]),a._v(" "),t("h4",{attrs:{id:"rset写屏障-维护rset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rset写屏障-维护rset"}},[a._v("#")]),a._v(" RSet写屏障：维护RSet")]),a._v(" "),t("p",[a._v("写屏障可以看做是对引用的修改的AOP。")]),a._v(" "),t("p",[a._v("写前屏障：Pre-Write Barrier")]),a._v(" "),t("p",[a._v("写后屏障：Post-Write Barrier")]),a._v(" "),t("p",[a._v("写前屏障是关注引用的删除；写后屏障则是关注引用的新增。")]),a._v(" "),t("h3",{attrs:{id:"特殊的大对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊的大对象"}},[a._v("#")]),a._v(" 特殊的大对象")]),a._v(" "),t("p",[a._v("大对象是指需要"),t("strong",[a._v("连续")]),a._v("内存空间的对象，最典型的大对象是那种很长的字符串以及数组。")]),a._v(" "),t("p",[a._v("分代的GC：大对象通常直接放在老年代，从而避免在 Eden 区和 Survivor 区之间的大量内存复制。")]),a._v(" "),t("p",[a._v("分区的GC：G1专门有个区域存放大对象")]),a._v(" "),t("h3",{attrs:{id:"判断常量是否可回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断常量是否可回收"}},[a._v("#")]),a._v(" 判断常量是否可回收")]),a._v(" "),t("p",[a._v('假如在字符串常量池中存在字符串 "abc"，如果当前没有任何 String 对象引用该字符串常量的话，就说明常量 "abc" 就是废弃常量，如果这时发生内存回收的话而且有必要的话，"abc" 就会被系统清理出常量池了。')]),a._v(" "),t("h3",{attrs:{id:"判断类class是否可回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断类class是否可回收"}},[a._v("#")]),a._v(" 判断类Class是否可回收")]),a._v(" "),t("p",[a._v("必须同时满足以下三点，也"),t("strong",[a._v("仅仅是可以")]),a._v("回收")]),a._v(" "),t("ol",[t("li",[a._v("该类所有的实例都已经被回收，也就是 Java 堆中不存在该类的任何实例。")]),a._v(" "),t("li",[a._v("加载该类的 "),t("code",[a._v("ClassLoader")]),a._v(" 已经被回收。")]),a._v(" "),t("li",[a._v("该类对应的 "),t("code",[a._v("java.lang.Class")]),a._v(" 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。")])]),a._v(" "),t("h3",{attrs:{id:"类加载器是否会被回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器是否会被回收"}},[a._v("#")]),a._v(" 类加载器是否会被回收")]),a._v(" "),t("p",[a._v("java自带的，ext，bootstrap，app，不会被回收。")]),a._v(" "),t("p",[a._v("自定义的，和普通类Class一样。")]),a._v(" "),t("h2",{attrs:{id:"gc算法-如何真正回收内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc算法-如何真正回收内存"}},[a._v("#")]),a._v(" GC算法：如何真正回收内存")]),a._v(" "),t("h3",{attrs:{id:"_1、标记-清除算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、标记-清除算法"}},[a._v("#")]),a._v(" 1、标记-清除算法")]),a._v(" "),t("p",[a._v("首先标记出所有不需要回收的对象，将他们的GC标记置为1，在标记完成后统一回收掉所有GC标记为0的对象。")]),a._v(" "),t("blockquote",[t("p",[a._v("标记-清除完成后会将所有GC标记复位为0，GC标记在markword中")])]),a._v(" "),t("p",[a._v("缺点：")]),a._v(" "),t("ol",[t("li",[a._v("效率问题，搜索所有可达节点时间长")]),a._v(" "),t("li",[a._v("空间问题（标记清除后会产生大量不连续的碎片）")])]),a._v(" "),t("h3",{attrs:{id:"_2、标记-复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、标记-复制算法"}},[a._v("#")]),a._v(" 2、标记-复制算法")]),a._v(" "),t("p",[a._v("它可以将内存分为大小相同的两块，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。主要不足是只使用了内存的一半。")]),a._v(" "),t("blockquote",[t("p",[a._v("现在的商业虚拟机都采用这种收集算法来回收新生代，但是并不是将新生代划分为大小相等的两块，而是分为一块较大的 Eden 空间和两块较小的 Survivor 空间，每次使用 Eden 空间和其中一块 Survivor。在回收时，将 Eden 和 Survivor 中还存活着的对象一次性复制到另一块 Survivor 空间上，最后清理 Eden 和使用过的那一块 Survivor。")]),a._v(" "),t("p",[a._v("HotSpot 虚拟机的 Eden 和 Survivor 的大小比例默认为 8:1:1，保证了内存的利用率达到 90%。如果每次回收有多于 10% 的对象存活，那么一块 Survivor 空间就不够用了，此时需要依赖于老年代进行分配担保，也就是借用老年代的空间存储放不下的对象。")])]),a._v(" "),t("h3",{attrs:{id:"_3、标记-整理算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、标记-整理算法"}},[a._v("#")]),a._v(" 3、标记-整理算法")]),a._v(" "),t("p",[a._v("标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象回收，而是让所有存活的对象向一端移动，然后直接清理掉端边界以外的内存。")]),a._v(" "),t("h2",{attrs:{id:"分代收集基本思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分代收集基本思想"}},[a._v("#")]),a._v(" 分代收集基本思想")]),a._v(" "),t("blockquote",[t("p",[a._v("JDK1.8普遍采用分代收集算法，但G1仅仅逻辑分代，物理不分代。")]),a._v(" "),t("p",[a._v("JDK10以后的GC更是彻底抹去了分代的概念。")])]),a._v(" "),t("p",[a._v("分代收集算法使得我们可以"),t("strong",[a._v("针对不同代选择更加合适的垃圾收集算法")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"如何分代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何分代"}},[a._v("#")]),a._v(" 如何分代")]),a._v(" "),t("p",[a._v("一般将 java 堆分为"),t("strong",[a._v("新生代和老年代")]),a._v("。")]),a._v(" "),t("p",[a._v("新生代又分为Eden，s0，s1，比例为8:1:1。")]),a._v(" "),t("h3",{attrs:{id:"如何确定对象所属的代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何确定对象所属的代"}},[a._v("#")]),a._v(" 如何确定对象所属的代")]),a._v(" "),t("p",[a._v("通过：年龄计数器")]),a._v(" "),t("h5",{attrs:{id:"年龄-age-计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#年龄-age-计数器"}},[a._v("#")]),a._v(" 年龄（Age）计数器")]),a._v(" "),t("p",[a._v("虚拟机给每个对象一个对象年龄（Age）计数器。")]),a._v(" "),t("p",[a._v("大部分情况，"),t("strong",[a._v("对象都会首先在 Eden 区域分配")]),a._v("。")]),a._v(" "),t("p",[a._v("如果对象在 Eden 出生并经过第一次 Minor GC 后仍然能够存活，并且能被 Survivor 容纳的话，将被移动到 Survivor 空间（s0 或者 s1）中，并将对象年龄设为 1(Eden 区->Survivor 区后对象的初始年龄变为 1)。")]),a._v(" "),t("p",[a._v("对象在 Survivor 中每熬过一次 MinorGC,年龄就增加 1 岁，"),t("strong",[a._v("当它的年龄增加到一定程度（默认为 15 岁），就会被晋升到老年代中")]),a._v("。对象晋升到老年代的年龄阈值，可以通过参数 "),t("code",[a._v("-XX:MaxTenuringThreshold")]),a._v(" 来设置。")]),a._v(" "),t("h3",{attrs:{id:"分代gc的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分代gc的类型"}},[a._v("#")]),a._v(" 分代GC的类型")]),a._v(" "),t("h5",{attrs:{id:"minorgc-younggc-新生代gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minorgc-younggc-新生代gc"}},[a._v("#")]),a._v(" MinorGC/YoungGC：新生代GC")]),a._v(" "),t("p",[t("strong",[a._v("只收集新生代")]),a._v("。")]),a._v(" "),t("h5",{attrs:{id:"major-gc-old-gc-老年代gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major-gc-old-gc-老年代gc"}},[a._v("#")]),a._v(" Major GC/Old GC：老年代GC")]),a._v(" "),t("p",[t("strong",[a._v("只收集老年代")]),a._v("。只有CMS有")]),a._v(" "),t("h5",{attrs:{id:"mixedgc-混合gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixedgc-混合gc"}},[a._v("#")]),a._v(" MixedGC：混合GC")]),a._v(" "),t("p",[a._v("对"),t("strong",[a._v("整个新生代空间及部分老年代")]),a._v("的GC，只在G1有")]),a._v(" "),t("h5",{attrs:{id:"fullgc-全面gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fullgc-全面gc"}},[a._v("#")]),a._v(" FullGC：全面GC")]),a._v(" "),t("p",[a._v("涵盖新生代、年老代以及"),t("strong",[a._v("元数据空间")])]),a._v(" "),t("h3",{attrs:{id:"分配担保机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分配担保机制"}},[a._v("#")]),a._v(" "),t("strong",[a._v("分配担保机制")])]),a._v(" "),t("p",[a._v("意义：确保在 Minor GC 之前老年代本身还有容纳新生代所有对象的剩余空间。")]),a._v(" "),t("p",[a._v("只要"),t("strong",[a._v("老年代的连续空间大于新生代对象总大小或者历次晋升的平均大小")]),a._v("，就会进行 Minor GC，否则将进行 Full GC。")]),a._v(" "),t("h3",{attrs:{id:"minor-gc触发条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-gc触发条件"}},[a._v("#")]),a._v(" Minor GC触发条件")]),a._v(" "),t("p",[a._v("当 Eden 区没有足够空间进行分配时，虚拟机将发起一次 Minor GC。（就是Eden区满了）")]),a._v(" "),t("h3",{attrs:{id:"full-gc触发条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-gc触发条件"}},[a._v("#")]),a._v(" Full GC触发条件")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("老年代满了")]),a._v("，可能原因是大对象直接进入老年代、长期存活的对象进入老年代")]),a._v(" "),t("li",[t("strong",[a._v("元空间满了")]),a._v("，Class加载太多")]),a._v(" "),t("li",[t("strong",[a._v("分配担保机制")]),a._v("触发")]),a._v(" "),t("li",[a._v("程序调用"),t("code",[a._v("System.gc()")]),a._v("，会"),t("strong",[a._v("建议JVM进行一次Full GC")]),a._v("，但只有JVM发现内存占用较多时才会接受建议")])]),a._v(" "),t("h3",{attrs:{id:"lab-本地缓存区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lab-本地缓存区"}},[a._v("#")]),a._v(" LAB：本地缓存区")]),a._v(" "),t("h5",{attrs:{id:"用户线程-tlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户线程-tlab"}},[a._v("#")]),a._v(" 用户线程：TLAB")]),a._v(" "),t("p",[a._v("new对象时，每个线程都有自己的TLAB，属于Eden区，可以直接在线程自己的TLAB分配对象")]),a._v(" "),t("h5",{attrs:{id:"gc线程-gclab-plab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc线程-gclab-plab"}},[a._v("#")]),a._v(" GC线程：GCLAB/PLAB")]),a._v(" "),t("p",[a._v("GC线程的缓冲区，标记复制时，GC线程要把存活对象拷贝到一个Region，如果是新生代，则要放入Survivor区，这个提前分配的区域就叫"),t("strong",[a._v("GCLAB")]),a._v("；")]),a._v(" "),t("p",[a._v("如果是从新生代晋升到老年代，也有一个分配的Region叫"),t("strong",[a._v("PLAB")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.pdai.tech/md/java/jvm/java-jvm-gc-g1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("pdai.tech.GC - Java 垃圾回收器之G1详解"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/column/7057537880624726053",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM成神路 - 竹子爱熊猫"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("周志明 《深入理解Java虚拟机》")])])}),[],!1,null,null,null);t.default=_.exports}}]);