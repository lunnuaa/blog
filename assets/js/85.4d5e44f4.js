(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{423:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"哨兵-sentinel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵-sentinel"}},[s._v("#")]),s._v(" 哨兵（Sentinel）")]),s._v(" "),a("h2",{attrs:{id:"哨兵的功能意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵的功能意义"}},[s._v("#")]),s._v(" 哨兵的功能意义")]),s._v(" "),a("h3",{attrs:{id:"_1、监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、监控"}},[s._v("#")]),s._v(" 1、监控")]),s._v(" "),a("p",[s._v("Sentinel 会不断检查您的master和slave是否按预期工作")]),s._v(" "),a("h3",{attrs:{id:"_2、自动故障恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、自动故障恢复"}},[s._v("#")]),s._v(" 2、自动故障恢复")]),s._v(" "),a("p",[s._v("如果master故障，Sentinel会将一个slave提升为master。当故障实例恢复后也变为一个slave，也以新的master为主")]),s._v(" "),a("h3",{attrs:{id:"_3、通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、通知"}},[s._v("#")]),s._v(" 3、通知")]),s._v(" "),a("p",[s._v("Sentinel充当Redis客户端的服务发现来源，当集群发生故障转移时，会将最新信息推送给Redis的客户端。即作Redis为主节点、从节点的地址的通知者，发生变更后第一时间通知Redis客户端。")]),s._v(" "),a("h2",{attrs:{id:"哨兵的基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵的基本使用"}},[s._v("#")]),s._v(" 哨兵的基本使用")]),s._v(" "),a("h3",{attrs:{id:"启动哨兵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动哨兵"}},[s._v("#")]),s._v(" 启动哨兵")]),s._v(" "),a("p",[a("strong",[s._v("哨兵不需要配置从节点，哨兵会自动监听从节点")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./src/redis-sentinel sentinel.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sentinel.conf 是配置文件")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("配置文件如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听的主节点信息")]),s._v("\nsentinel monitor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("quorum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当[quorum]个sentinel认为主节点下线(主观下线)，则认为主节点客观下线")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主节点的密码")]),s._v("\nsentinel auth-pass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"哨兵本身也是集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵本身也是集群"}},[s._v("#")]),s._v(" 哨兵本身也是集群")]),s._v(" "),a("p",[s._v("多个 Sentinel 监听到一个主节点，他们会自动发现彼此，构成 Sentinel 集群")]),s._v(" "),a("h3",{attrs:{id:"主观下线和客观下线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主观下线和客观下线"}},[s._v("#")]),s._v(" 主观下线和客观下线")]),s._v(" "),a("p",[s._v("一个 Sentinel 认为节点下线，就是主观下线；那怎么才算认为呢，稍后原理部分介绍。")]),s._v(" "),a("p",[s._v("超过 Quorum 个 Sentinel 认为节点下线，就是客观下线。")]),s._v(" "),a("h2",{attrs:{id:"哨兵常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵常用命令"}},[s._v("#")]),s._v(" 哨兵常用命令")]),s._v(" "),a("h4",{attrs:{id:"连接哨兵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接哨兵"}},[s._v("#")]),s._v(" 连接哨兵")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-cli "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("port 默认26379"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"查询监听的节点信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询监听的节点信息"}},[s._v("#")]),s._v(" 查询监听的节点信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主节点 哨兵可以监听多个主节点")]),s._v("\nsentinel master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有从节点")]),s._v("\nsentinel replicas "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"查询其它哨兵-sentinels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询其它哨兵-sentinels"}},[s._v("#")]),s._v(" 查询其它哨兵：sentinels")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sentinel sentinels "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"添加监控的主节点-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加监控的主节点-monitor"}},[s._v("#")]),s._v(" 添加监控的主节点：monitor")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sentinel monitor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP:127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("port:6379"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("quorum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"移除监控的主节点-remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除监控的主节点-remove"}},[s._v("#")]),s._v(" 移除监控的主节点：remove")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("sentinel remove "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"修改-quorum-参数-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-quorum-参数-set"}},[s._v("#")]),s._v(" 修改 quorum 参数：set")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sentinel "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" quorum "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new-num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"监控的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控的实现原理"}},[s._v("#")]),s._v(" 监控的实现原理")]),s._v(" "),a("p",[s._v("Sentinel基于心跳机制监测服务状态，每隔1秒向每个实例（包括从节点）发送ping命令。")]),s._v(" "),a("h4",{attrs:{id:"主观下线的本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主观下线的本质"}},[s._v("#")]),s._v(" 主观下线的本质")]),s._v(" "),a("p",[s._v("主观下线最重要的参数是 "),a("code",[s._v("down-after-milliseconds")]),s._v(" ，即距离上次ping通超过30s(默认值)，认为主观下线。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("down-after-milliseconds "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"自动故障恢复实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动故障恢复实现原理"}},[s._v("#")]),s._v(" 自动故障恢复实现原理")]),s._v(" "),a("p",[s._v("一旦发现master故障，Sentinel需要选择一个作为新的master。")]),s._v(" "),a("h4",{attrs:{id:"如何选择新的主节点-replica-priority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何选择新的主节点-replica-priority"}},[s._v("#")]),s._v(" 如何选择新的主节点：replica-priority")]),s._v(" "),a("p",[s._v("首先排除一些可能也存在问题的节点，比如：与master节点的断开时间超过"),a("code",[s._v("down-after-milliseconds")]),s._v(" * 10的")]),s._v(" "),a("p",[s._v("然后根据"),a("code",[s._v("replica-priority")]),s._v("选择优先级最高的，这个选型位于 redis.conf 中")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认值为100 最大也为100")]),s._v("\nreplica-priority "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个值越小,优先级越高,0除外")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("如果 "),a("code",[s._v("replica-priority")]),s._v(" 为0，永远不会参与选举")])]),s._v(" "),a("p",[s._v("那如果 "),a("code",[s._v("replica-priority")]),s._v(" 都相同，还记得同步原理的offset吗，我们选择offset最新的作为主节点。")]),s._v(" "),a("blockquote",[a("p",[s._v("这样选到的主节点数据最新")])]),s._v(" "),a("h4",{attrs:{id:"如何成为新的主节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何成为新的主节点"}},[s._v("#")]),s._v(" 如何成为新的主节点")]),s._v(" "),a("p",[s._v("当选中了其中一个slave为新的master后（例如slave1），故障的转移的步骤如下：")]),s._v(" "),a("ol",[a("li",[s._v("sentinel给备选的slave1节点发送 "),a("code",[s._v("slaveof no one")]),s._v(" 命令，让该节点成为master")]),s._v(" "),a("li",[s._v("sentinel给所有其它slave发送slaveof 192.168.150.101 7002 命令，让这些slave成为新master的从节点，开始从新的master上同步数据。")]),s._v(" "),a("li",[s._v("最后，sentinel将故障节点标记为slave，当故障节点恢复后会自动成为新的master的slave节点")])]),s._v(" "),a("h3",{attrs:{id:"故障恢复期间的请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障恢复期间的请求"}},[s._v("#")]),s._v(" 故障恢复期间的请求")]),s._v(" "),a("p",[s._v("主库故障后，无法处理写请求，但读请求依然可以交给从库。")]),s._v(" "),a("h2",{attrs:{id:"哨兵彼此如何通信-pub-sub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵彼此如何通信-pub-sub"}},[s._v("#")]),s._v(" 哨兵彼此如何通信：pub/sub")]),s._v(" "),a("p",[s._v("显然，哨兵之间是需要彼此通信的，比如确定主观下线。")]),s._v(" "),a("p",[s._v("而它们通信的原理是：发布/订阅。")]),s._v(" "),a("p",[s._v("哨兵上线，会在某个特定的「频道」上发布消息；其它哨兵通过订阅该频道来发现彼此和通信。")]),s._v(" "),a("h4",{attrs:{id:"频道-消息类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频道-消息类型"}},[s._v("#")]),s._v(" 频道：消息类型")]),s._v(" "),a("p",[s._v("频道可以理解为消息类型，唯一确定某一类消息。")]),s._v(" "),a("p",[s._v("例如：“sentinel:hello”频道，就是哨兵发现彼此存在的频道。")]),s._v(" "),a("h4",{attrs:{id:"客户端感知哨兵的工作情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端感知哨兵的工作情况"}},[s._v("#")]),s._v(" 客户端感知哨兵的工作情况")]),s._v(" "),a("p",[s._v("哨兵本身也提供 pub/sub 机制，客户端可以通过订阅哨兵特定的频道来获取如主观下线，主库切换等事件。")]),s._v(" "),a("h2",{attrs:{id:"哨兵实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵实战"}},[s._v("#")]),s._v(" 哨兵实战")]),s._v(" "),a("h4",{attrs:{id:"哨兵通常配置为奇数个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵通常配置为奇数个"}},[s._v("#")]),s._v(" 哨兵通常配置为奇数个")]),s._v(" "),a("p",[s._v("这和超过半数有关系。")]),s._v(" "),a("h4",{attrs:{id:"哨兵配置一致"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵配置一致"}},[s._v("#")]),s._v(" 哨兵配置一致")]),s._v(" "),a("p",[s._v("所有哨兵的配置需要一致，避免选举错误。")])])}),[],!1,null,null,null);a.default=n.exports}}]);