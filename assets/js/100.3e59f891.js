(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{537:function(a,t,s){"use strict";s.r(t);var e=s(76),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ecmascript-6-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-6-简介"}},[a._v("#")]),a._v(" ECMAScript 6 简介")]),a._v(" "),s("p",[a._v("ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。")]),a._v(" "),s("h2",{attrs:{id:"ecmascript-和-javascript-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-和-javascript-的关系"}},[a._v("#")]),a._v(" ECMAScript 和 JavaScript 的关系")]),a._v(" "),s("p",[a._v("一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？")]),a._v(" "),s("p",[a._v("要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。")]),a._v(" "),s("p",[a._v("该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。")]),a._v(" "),s("p",[a._v("因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。")]),a._v(" "),s("h2",{attrs:{id:"es6-与-ecmascript-2015-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-与-ecmascript-2015-的关系"}},[a._v("#")]),a._v(" ES6 与 ECMAScript 2015 的关系")]),a._v(" "),s("p",[a._v("ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？")]),a._v(" "),s("p",[a._v("2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。")]),a._v(" "),s("p",[a._v("但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。")]),a._v(" "),s("p",[a._v("但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。")]),a._v(" "),s("p",[a._v("标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。")]),a._v(" "),s("p",[a._v("ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的"),s("code",[a._v("includes")]),a._v("方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。")]),a._v(" "),s("p",[a._v("因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。")]),a._v(" "),s("h2",{attrs:{id:"语法提案的批准流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法提案的批准流程"}},[a._v("#")]),a._v(" 语法提案的批准流程")]),a._v(" "),s("p",[a._v("任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。")]),a._v(" "),s("p",[a._v("一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。")]),a._v(" "),s("ul",[s("li",[a._v("Stage 0 - Strawman（展示阶段）")]),a._v(" "),s("li",[a._v("Stage 1 - Proposal（征求意见阶段）")]),a._v(" "),s("li",[a._v("Stage 2 - Draft（草案阶段）")]),a._v(" "),s("li",[a._v("Stage 3 - Candidate（候选人阶段）")]),a._v(" "),s("li",[a._v("Stage 4 - Finished（定案阶段）")])]),a._v(" "),s("p",[a._v("一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的官方网站"),s("a",{attrs:{href:"https://github.com/tc39/ecma262",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub.com/tc39/ecma262"),s("OutboundLink")],1),a._v("查看。")]),a._v(" "),s("p",[a._v("本书的写作目标之一，是跟踪 ECMAScript 语言的最新进展，介绍 5.1 版本以后所有的新语法。对于那些明确或很有希望，将要列入标准的新语法，都将予以介绍。")]),a._v(" "),s("h2",{attrs:{id:"ecmascript-的历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-的历史"}},[a._v("#")]),a._v(" ECMAScript 的历史")]),a._v(" "),s("p",[a._v("ES6 从开始制定到最后发布，整整用了 15 年。")]),a._v(" "),s("p",[a._v("前面提到，ECMAScript 1.0 是 1997 年发布的，接下来的两年，连续发布了 ECMAScript 2.0（1998 年 6 月）和 ECMAScript 3.0（1999 年 12 月）。3.0 版是一个巨大的成功，在业界得到广泛支持，成为通行标准，奠定了 JavaScript 语言的基本语法，以后的版本完全继承。直到今天，初学者一开始学习 JavaScript，其实就是在学 3.0 版的语法。")]),a._v(" "),s("p",[a._v("2000 年，ECMAScript 4.0 开始酝酿。这个版本最后没有通过，但是它的大部分内容被 ES6 继承了。因此，ES6 制定的起点其实是 2000 年。")]),a._v(" "),s("p",[a._v("为什么 ES4 没有通过呢？因为这个版本太激进了，对 ES3 做了彻底升级，导致标准委员会的一些成员不愿意接受。ECMA 的第 39 号技术专家委员会（Technical Committee 39，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、Mozilla、Google 等大公司。")]),a._v(" "),s("p",[a._v("2007 年 10 月，ECMAScript 4.0 版草案发布，本来预计次年 8 月发布正式版本。但是，各方对于是否通过这个标准，发生了严重分歧。以 Yahoo、Microsoft、Google 为首的大公司，反对 JavaScript 的大幅升级，主张小幅改动；以 JavaScript 创造者 Brendan Eich 为首的 Mozilla 公司，则坚持当前的草案。")]),a._v(" "),s("p",[a._v("2008 年 7 月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激烈，ECMA 开会决定，中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分，发布为 ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为 Harmony（和谐）。会后不久，ECMAScript 3.1 就改名为 ECMAScript 5。")]),a._v(" "),s("p",[a._v("2009 年 12 月，ECMAScript 5.0 版正式发布。Harmony 项目则一分为二，一些较为可行的设想定名为 JavaScript.next 继续开发，后来演变成 ECMAScript 6；一些不是很成熟的设想，则被视为 JavaScript.next.next，在更远的将来再考虑推出。TC39 委员会的总体考虑是，ES5 与 ES3 基本保持兼容，较大的语法修正和新功能加入，将由 JavaScript.next 完成。当时，JavaScript.next 指的是 ES6，第六版发布以后，就指 ES7。TC39 的判断是，ES5 会在 2013 年的年中成为 JavaScript 开发的主流标准，并在此后五年中一直保持这个位置。")]),a._v(" "),s("p",[a._v("2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。")]),a._v(" "),s("p",[a._v("2013 年 3 月，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7。")]),a._v(" "),s("p",[a._v("2013 年 12 月，ECMAScript 6 草案发布。然后是 12 个月的讨论期，听取各方反馈。")]),a._v(" "),s("p",[a._v("2015 年 6 月，ECMAScript 6 正式通过，成为国际标准。从 2000 年算起，这时已经过去了 15 年。")]),a._v(" "),s("p",[a._v("目前，各大浏览器对 ES6 的支持可以查看"),s("a",{attrs:{href:"https://kangax.github.io/compat-table/es6/",target:"_blank",rel:"noopener noreferrer"}},[a._v("kangax.github.io/compat-table/es6/"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("p",[a._v("Node.js 是 JavaScript 的服务器运行环境（runtime）。它对 ES6 的支持度更高。除了那些默认打开的功能，还有一些语法功能已经实现了，但是默认没有打开。使用下面的命令，可以查看 Node.js 默认没有打开的 ES6 实验性语法。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("// Linux "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" Mac\n$ node --v8-options "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" harmony\n\n// Windows\n$ node --v8-options "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" findstr harmony\n")])])]),s("h2",{attrs:{id:"babel-转码器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-转码器"}},[a._v("#")]),a._v(" Babel 转码器")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Babel"),s("OutboundLink")],1),a._v(" 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 转码前")]),a._v("\ninput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("item")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 转码后")]),a._v("\ninput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上面的原始代码用了箭头函数，Babel 将其转为普通函数，就能在不支持箭头函数的 JavaScript 环境执行了。")]),a._v(" "),s("p",[a._v("下面的命令在项目目录中，安装 Babel。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @babel/core\n")])])]),s("h3",{attrs:{id:"配置文件-babelrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-babelrc"}},[a._v("#")]),a._v(" 配置文件"),s("code",[a._v(".babelrc")])]),a._v(" "),s("p",[a._v("Babel 的配置文件是"),s("code",[a._v(".babelrc")]),a._v("，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。")]),a._v(" "),s("p",[a._v("该文件用来设置转码规则和插件，基本格式如下。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"presets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("code",[a._v("presets")]),a._v("字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 最新转码规则")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @babel/preset-env\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# react 转码规则")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @babel/preset-react\n")])])]),s("p",[a._v("然后，将这些规则加入"),s("code",[a._v(".babelrc")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"presets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"@babel/env"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"@babel/preset-react"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("注意，以下所有 Babel 工具和模块的使用，都必须先写好"),s("code",[a._v(".babelrc")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"命令行转码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行转码"}},[a._v("#")]),a._v(" 命令行转码")]),a._v(" "),s("p",[a._v("Babel 提供命令行工具"),s("code",[a._v("@babel/cli")]),a._v("，用于命令行转码。")]),a._v(" "),s("p",[a._v("它的安装命令如下。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @babel/cli\n")])])]),s("p",[a._v("基本用法如下。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 转码结果输出到标准输出")]),a._v("\n$ npx babel example.js\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 转码结果写入一个文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --out-file 或 -o 参数指定输出文件")]),a._v("\n$ npx babel example.js --out-file compiled.js\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\n$ npx babel example.js -o compiled.js\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 整个目录转码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --out-dir 或 -d 参数指定输出目录")]),a._v("\n$ npx babel src --out-dir lib\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\n$ npx babel src -d lib\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -s 参数生成source map文件")]),a._v("\n$ npx babel src -d lib -s\n")])])]),s("h3",{attrs:{id:"babel-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-node"}},[a._v("#")]),a._v(" babel-node")]),a._v(" "),s("p",[s("code",[a._v("@babel/node")]),a._v("模块的"),s("code",[a._v("babel-node")]),a._v("命令，提供一个支持 ES6 的 REPL 环境。它支持 Node 的 REPL 环境的所有功能，而且可以直接运行 ES6 代码。")]),a._v(" "),s("p",[a._v("首先，安装这个模块。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @babel/node\n")])])]),s("p",[a._v("然后，执行"),s("code",[a._v("babel-node")]),a._v("就进入 REPL 环境。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ npx babel-node\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" x * "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),s("p",[s("code",[a._v("babel-node")]),a._v("命令可以直接运行 ES6 脚本。将上面的代码放入脚本文件"),s("code",[a._v("es6.js")]),a._v("，然后直接运行。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# es6.js 的代码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# console.log((x => x * 2)(1));")]),a._v("\n$ npx babel-node es6.js\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),s("h3",{attrs:{id:"babel-register-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-register-模块"}},[a._v("#")]),a._v(" @babel/register 模块")]),a._v(" "),s("p",[s("code",[a._v("@babel/register")]),a._v("模块改写"),s("code",[a._v("require")]),a._v("命令，为它加上一个钩子。此后，每当使用"),s("code",[a._v("require")]),a._v("加载"),s("code",[a._v(".js")]),a._v("、"),s("code",[a._v(".jsx")]),a._v("、"),s("code",[a._v(".es")]),a._v("和"),s("code",[a._v(".es6")]),a._v("后缀名的文件，就会先用 Babel 进行转码。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @babel/register\n")])])]),s("p",[a._v("使用时，必须首先加载"),s("code",[a._v("@babel/register")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("// index.js\nrequire"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@babel/register'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nrequire"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./es6.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("然后，就不需要手动对"),s("code",[a._v("index.js")]),a._v("转码了。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ node index.js\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),s("p",[a._v("需要注意的是，"),s("code",[a._v("@babel/register")]),a._v("只会对"),s("code",[a._v("require")]),a._v("命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用。")]),a._v(" "),s("h3",{attrs:{id:"polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polyfill"}},[a._v("#")]),a._v(" polyfill")]),a._v(" "),s("p",[a._v("Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如"),s("code",[a._v("Iterator")]),a._v("、"),s("code",[a._v("Generator")]),a._v("、"),s("code",[a._v("Set")]),a._v("、"),s("code",[a._v("Map")]),a._v("、"),s("code",[a._v("Proxy")]),a._v("、"),s("code",[a._v("Reflect")]),a._v("、"),s("code",[a._v("Symbol")]),a._v("、"),s("code",[a._v("Promise")]),a._v("等全局对象，以及一些定义在全局对象上的方法（比如"),s("code",[a._v("Object.assign")]),a._v("）都不会转码。")]),a._v(" "),s("p",[a._v("举例来说，ES6 在"),s("code",[a._v("Array")]),a._v("对象上新增了"),s("code",[a._v("Array.from")]),a._v("方法。Babel 就不会转码这个方法。如果想让这个方法运行，可以使用"),s("code",[a._v("core-js")]),a._v("和"),s("code",[a._v("regenerator-runtime")]),a._v("(后者提供generator函数的转码)，为当前环境提供一个垫片。")]),a._v(" "),s("p",[a._v("安装命令如下。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev core-js regenerator-runtime\n")])])]),s("p",[a._v("然后，在脚本头部，加入如下两行代码。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'core-js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'regenerator-runtime/runtime'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 或者")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'core-js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("'regenerator"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("runtime"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Babel 默认不转码的 API 非常多，详细清单可以查看"),s("code",[a._v("babel-plugin-transform-runtime")]),a._v("模块的"),s("a",{attrs:{href:"https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/runtime-corejs3-definitions.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("definitions.js"),s("OutboundLink")],1),a._v("文件。")]),a._v(" "),s("h3",{attrs:{id:"浏览器环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器环境"}},[a._v("#")]),a._v(" 浏览器环境")]),a._v(" "),s("p",[a._v("Babel 也可以用于浏览器环境，使用"),s("a",{attrs:{href:"https://babeljs.io/docs/en/next/babel-standalone.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("@babel/standalone"),s("OutboundLink")],1),a._v("模块提供的浏览器版本，将其插入网页。")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("https://unpkg.com/@babel/standalone/babel.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("text/babel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Your ES6 code")]),a._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("注意，网页实时将 ES6 代码转为 ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本。")]),a._v(" "),s("p",[a._v("Babel 提供一个"),s("a",{attrs:{href:"https://babeljs.io/repl/",target:"_blank",rel:"noopener noreferrer"}},[a._v("REPL 在线编译器"),s("OutboundLink")],1),a._v("，可以在线将 ES6 代码转为 ES5 代码。转换后的代码，可以直接作为 ES5 代码插入网页运行。")])])}),[],!1,null,null,null);t.default=n.exports}}]);