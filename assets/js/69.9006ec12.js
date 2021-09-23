(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{509:function(s,a,t){"use strict";t.r(a);var n=t(76),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"脚本除错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本除错"}},[s._v("#")]),s._v(" 脚本除错")]),s._v(" "),t("p",[s._v("本章介绍如何对 Shell 脚本除错。")]),s._v(" "),t("h2",{attrs:{id:"常见错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[s._v("#")]),s._v(" 常见错误")]),s._v(" "),t("p",[s._v("编写 Shell 脚本的时候，一定要考虑到命令失败的情况，否则很容易出错。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/path/not/exist\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir_name")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" *\n")])])]),t("p",[s._v("上面脚本中，如果目录"),t("code",[s._v("$dir_name")]),s._v("不存在，"),t("code",[s._v("cd $dir_name")]),s._v("命令就会执行失败。这时，就不会改变当前目录，脚本会继续执行下去，导致"),t("code",[s._v("rm *")]),s._v("命令删光当前目录的文件。")]),s._v(" "),t("p",[s._v("如果改成下面的样子，也会有问题。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" *\n")])])]),t("p",[s._v("上面脚本中，只有"),t("code",[s._v("cd $dir_name")]),s._v("执行成功，才会执行"),t("code",[s._v("rm *")]),s._v("。但是，如果变量"),t("code",[s._v("$dir_name")]),s._v("为空，"),t("code",[s._v("cd")]),s._v("就会进入用户主目录，从而删光用户主目录的文件。")]),s._v(" "),t("p",[s._v("下面的写法才是正确的。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" *\n")])])]),t("p",[s._v("上面代码中，先判断目录"),t("code",[s._v("$dir_name")]),s._v("是否存在，然后才执行其他操作。")]),s._v(" "),t("p",[s._v("如果不放心删除什么文件，可以先打印出来看一下。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" *\n")])])]),t("p",[s._v("上面命令中，"),t("code",[s._v("echo rm *")]),s._v("不会删除文件，只会打印出来要删除的文件。")]),s._v(" "),t("h2",{attrs:{id:"bash的-x参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash的-x参数"}},[s._v("#")]),s._v(" "),t("code",[s._v("bash")]),s._v("的"),t("code",[s._v("-x")]),s._v("参数")]),s._v(" "),t("p",[t("code",[s._v("bash")]),s._v("的"),t("code",[s._v("-x")]),s._v("参数可以在执行每一行命令之前，打印该命令。一旦出错，这样就比较容易追查。")]),s._v(" "),t("p",[s._v("下面是一个脚本"),t("code",[s._v("script.sh")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# script.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello world\n")])])]),t("p",[s._v("加上"),t("code",[s._v("-x")]),s._v("参数，执行每条命令之前，都会显示该命令。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -x script.sh\n+ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello world\nhello world\n")])])]),t("p",[s._v("上面例子中，行首为"),t("code",[s._v("+")]),s._v("的行，显示该行是所要执行的命令，下一行才是该命令的执行结果。")]),s._v(" "),t("p",[s._v("下面再看一个"),t("code",[s._v("-x")]),s._v("写在脚本内部的例子。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /bin/bash -x")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# trouble: script to demonstrate common errors")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$number")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Number is equal to 1."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Number is not equal to 1."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("p",[s._v("上面的脚本执行之后，会输出每一行命令。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ trouble\n+ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n+ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'['")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("']'")]),s._v("\n+ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Number is equal to 1.'")]),s._v("\nNumber is equal to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".\n")])])]),t("p",[s._v("输出的命令之前的"),t("code",[s._v("+")]),s._v("号，是由系统变量"),t("code",[s._v("PS4")]),s._v("决定，可以修改这个变量。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS4")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$LINENO + '")]),s._v("\n$ trouble\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'['")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("']'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Number is equal to 1.'")]),s._v("\nNumber is equal to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".\n")])])]),t("p",[s._v("另外，"),t("code",[s._v("set")]),s._v("命令也可以设置 Shell 的行为参数，有利于脚本除错，详见《set 命令》一章。")]),s._v(" "),t("h2",{attrs:{id:"环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),t("p",[s._v("有一些环境变量常用于除错。")]),s._v(" "),t("h3",{attrs:{id:"lineno"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lineno"}},[s._v("#")]),s._v(" LINENO")]),s._v(" "),t("p",[s._v("变量"),t("code",[s._v("LINENO")]),s._v("返回它在脚本里面的行号。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is line '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LINENO")]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("执行上面的脚本"),t("code",[s._v("test.sh")]),s._v("，"),t("code",[s._v("$LINENO")]),s._v("会返回"),t("code",[s._v("3")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./test.sh\nThis is line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])])]),t("h3",{attrs:{id:"funcname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#funcname"}},[s._v("#")]),s._v(" FUNCNAME")]),s._v(" "),t("p",[s._v("变量"),t("code",[s._v("FUNCNAME")]),s._v("返回一个数组，内容是当前的函数调用堆栈。该数组的0号成员是当前调用的函数，1号成员是调用当前函数的函数，以此类推。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: FUNCNAME0 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: FUNCNAME1 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: FUNCNAME2 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  func2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: FUNCNAME0 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: FUNCNAME1 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: FUNCNAME2 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nfunc1\n")])])]),t("p",[s._v("执行上面的脚本"),t("code",[s._v("test.sh")]),s._v("，结果如下。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./test.sh\nfunc1: FUNCNAME0 is func1\nfunc1: FUNCNAME1 is main\nfunc1: FUNCNAME2 is\nfunc2: FUNCNAME0 is func2\nfunc2: FUNCNAME1 is func1\nfunc2: FUNCNAME2 is main\n")])])]),t("p",[s._v("上面例子中，执行"),t("code",[s._v("func1")]),s._v("时，变量"),t("code",[s._v("FUNCNAME")]),s._v("的0号成员是"),t("code",[s._v("func1")]),s._v("，1号成员是调用"),t("code",[s._v("func1")]),s._v("的主脚本"),t("code",[s._v("main")]),s._v("。执行"),t("code",[s._v("func2")]),s._v("时，变量"),t("code",[s._v("FUNCNAME")]),s._v("的0号成员是"),t("code",[s._v("func2")]),s._v("，1号成员是调用"),t("code",[s._v("func2")]),s._v("的"),t("code",[s._v("func1")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"bash-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-source"}},[s._v("#")]),s._v(" BASH_SOURCE")]),s._v(" "),t("p",[s._v("变量"),t("code",[s._v("BASH_SOURCE")]),s._v("返回一个数组，内容是当前的脚本调用堆栈。该数组的0号成员是当前执行的脚本，1号成员是调用当前脚本的脚本，以此类推，跟变量"),t("code",[s._v("FUNCNAME")]),s._v("是一一对应关系。")]),s._v(" "),t("p",[s._v("下面有两个子脚本"),t("code",[s._v("lib1.sh")]),s._v("和"),t("code",[s._v("lib2.sh")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lib1.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: BASH_SOURCE0 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: BASH_SOURCE1 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: BASH_SOURCE2 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  func2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lib2.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: BASH_SOURCE0 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: BASH_SOURCE1 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: BASH_SOURCE2 is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("然后，主脚本"),t("code",[s._v("main.sh")]),s._v("调用上面两个子脚本。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# main.sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" lib1.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" lib2.sh\n\nfunc1\n")])])]),t("p",[s._v("执行主脚本"),t("code",[s._v("main.sh")]),s._v("，会得到下面的结果。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./main.sh\nfunc1: BASH_SOURCE0 is lib1.sh\nfunc1: BASH_SOURCE1 is ./main.sh\nfunc1: BASH_SOURCE2 is\nfunc2: BASH_SOURCE0 is lib2.sh\nfunc2: BASH_SOURCE1 is lib1.sh\nfunc2: BASH_SOURCE2 is ./main.sh\n")])])]),t("p",[s._v("上面例子中，执行函数"),t("code",[s._v("func1")]),s._v("时，变量"),t("code",[s._v("BASH_SOURCE")]),s._v("的0号成员是"),t("code",[s._v("func1")]),s._v("所在的脚本"),t("code",[s._v("lib1.sh")]),s._v("，1号成员是主脚本"),t("code",[s._v("main.sh")]),s._v("；执行函数"),t("code",[s._v("func2")]),s._v("时，变量"),t("code",[s._v("BASH_SOURCE")]),s._v("的0号成员是"),t("code",[s._v("func2")]),s._v("所在的脚本"),t("code",[s._v("lib2.sh")]),s._v("，1号成员是调用"),t("code",[s._v("func2")]),s._v("的脚本"),t("code",[s._v("lib1.sh")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"bash-lineno"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-lineno"}},[s._v("#")]),s._v(" BASH_LINENO")]),s._v(" "),t("p",[s._v("变量"),t("code",[s._v("BASH_LINENO")]),s._v("返回一个数组，内容是每一轮调用对应的行号。"),t("code",[s._v("${BASH_LINENO[$i]}")]),s._v("跟"),t("code",[s._v("${FUNCNAME[$i]}")]),s._v("是一一对应关系，表示"),t("code",[s._v("${FUNCNAME[$i]}")]),s._v("在调用它的脚本文件"),t("code",[s._v("${BASH_SOURCE[$i+1]}")]),s._v("里面的行号。")]),s._v(" "),t("p",[s._v("下面有两个子脚本"),t("code",[s._v("lib1.sh")]),s._v("和"),t("code",[s._v("lib2.sh")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lib1.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: BASH_LINENO is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_LINENO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: FUNCNAME is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func1: BASH_SOURCE is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n\n  func2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lib2.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: BASH_LINENO is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_LINENO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: FUNCNAME is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FUNCNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"func2: BASH_SOURCE is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("然后，主脚本"),t("code",[s._v("main.sh")]),s._v("调用上面两个子脚本。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# main.sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" lib1.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" lib2.sh\n\nfunc1\n")])])]),t("p",[s._v("执行主脚本"),t("code",[s._v("main.sh")]),s._v("，会得到下面的结果。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./main.sh\nfunc1: "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_LINENO")]),s._v(" is "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\nfunc1: FUNCNAME is func1\nfunc1: "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),s._v(" is main.sh\nfunc2: "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_LINENO")]),s._v(" is "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\nfunc2: FUNCNAME is func2\nfunc2: "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH_SOURCE")]),s._v(" is lib1.sh\n")])])]),t("p",[s._v("上面例子中，函数"),t("code",[s._v("func1")]),s._v("是在"),t("code",[s._v("main.sh")]),s._v("的第7行调用，函数"),t("code",[s._v("func2")]),s._v("是在"),t("code",[s._v("lib1.sh")]),s._v("的第8行调用的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);