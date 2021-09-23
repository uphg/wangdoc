(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{493:function(s,a,t){"use strict";t.r(a);var n=t(76),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"标准i-o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标准i-o"}},[s._v("#")]),s._v(" 标准I/O")]),s._v(" "),t("h2",{attrs:{id:"echo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#echo"}},[s._v("#")]),s._v(" echo")]),s._v(" "),t("p",[t("code",[s._v("echo")]),s._v("命令用于将指定内容输出到显示屏（标准输出）。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" this is a "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nthis is a "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("p",[s._v("它的参数如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-e")]),s._v(" 解释转义字符。")]),s._v(" "),t("li",[t("code",[s._v("-n")]),s._v(" 不输出行尾的换行符")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('b"')]),s._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nb\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('b"')]),s._v("\na\nb\n")])])]),t("p",[s._v("上面代码中，如果不加"),t("code",[s._v("-e")]),s._v("参数，"),t("code",[s._v("\\n")]),s._v("就会按字面形式输出；加了以后，就被解释成了换行符。")]),s._v(" "),t("p",[s._v("引号之中可以包括多个换行符，即可以输出多行文本。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<HTML>\n    <HEAD>\n          <TITLE>Page Title</TITLE>\n    </HEAD>\n    <BODY>\n          Page body.\n    </BODY>\n</HTML>"')]),s._v("\n")])])]),t("p",[s._v("echo '"),t("HTML",[t("HEAD",[t("TITLE",[s._v("Page Title")])],1),s._v(" "),t("BODY",[s._v("\nPage body.\n")])],1),s._v("'")],1),s._v(" "),t("h2",{attrs:{id:"read"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[s._v("#")]),s._v(" read")]),s._v(" "),t("p",[t("code",[s._v("read")]),s._v("命令被用来从标准输入读取单行数据。这个命令可以用来读取键盘输入，当使用重定向的时候，读取文件中的一行数据。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("variable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("上面的 variable 用来存储输入数值的一个或多个变量名。如果没有提供变量名，shell 变量"),t("code",[s._v("REPLY")]),s._v("会包含数据行。")]),s._v(" "),t("p",[s._v("基本上，read 会把来自标准输入的字段赋值给具体的变量。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Please enter an integer -> "')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" int\n")])])]),t("p",[t("code",[s._v("read")]),s._v("可以给多个变量赋值。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# read-multiple: read multiple values from keyboard")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter one or more values > "')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" var1 var2 var3 var4 var5\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"var1 = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var1")]),s._v("'\"")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"var2 = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var2")]),s._v("'\"")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"var3 = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var3")]),s._v("'\"")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"var4 = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var4")]),s._v("'\"")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"var5 = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var5")]),s._v("'\"")]),s._v("\n")])])]),t("p",[s._v("上面脚本的用法如下。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ read-multiple\nEnter one or "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" values "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a b c d e\nvar1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\nvar2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v("\nvar3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),s._v("\nvar4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'d'")]),s._v("\nvar5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'e'")]),s._v("\n\n$ read-multiple\nEnter one or "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" values "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a\nvar1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\nvar2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\nvar3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\nvar4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\nvar5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n\n$ read-multiple\nEnter one or "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" values "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a b c d e f g\nvar1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\nvar2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v("\nvar3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),s._v("\nvar4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'d'")]),s._v("\nvar5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'e f g'")]),s._v("\n")])])]),t("p",[s._v("如果 read 命令接受到变量值数目少于期望的数字，那么额外的变量值为空，而多余的输入数据则会 被包含到最后一个变量中。")]),s._v(" "),t("p",[s._v("如果 read 命令之后没有列出变量名，则一个 shell 变量"),t("code",[s._v("REPLY")]),s._v("，将会包含所有的输入。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# read-single: read multiple values into default variable")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter one or more values > "')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"REPLY = '"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v("'\"")]),s._v("\n")])])]),t("p",[s._v("上面脚本的输出结果如下。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ read-single\nEnter one or "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" values "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a b c d\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("REPLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a b c d'")]),s._v("\n")])])]),t("p",[s._v("read命令的参数如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-a array")]),s._v("\t把输入赋值到数组 array 中，从索引号零开始。")]),s._v(" "),t("li",[t("code",[s._v("-d delimiter")]),s._v("\t用字符串 delimiter 中的第一个字符指示输入结束，而不是一个换行符。")]),s._v(" "),t("li",[t("code",[s._v("-e")]),s._v("\t使用 Readline 来处理输入。这使得与命令行相同的方式编辑输入。")]),s._v(" "),t("li",[t("code",[s._v("-n num")]),s._v("\t读取 num 个输入字符，而不是整行。")]),s._v(" "),t("li",[t("code",[s._v("-p prompt")]),s._v("\t为输入显示提示信息，使用字符串 prompt。")]),s._v(" "),t("li",[t("code",[s._v("-r")]),s._v("\tRaw mode. 不把反斜杠字符解释为转义字符。")]),s._v(" "),t("li",[t("code",[s._v("-s")]),s._v("\tSilent mode. 不会在屏幕上显示输入的字符。当输入密码和其它确认信息的时候，这会很有帮助。")]),s._v(" "),t("li",[t("code",[s._v("-t seconds")]),s._v("\t超时. 几秒钟后终止输入。read 会返回一个非零退出状态，若输入超时。")]),s._v(" "),t("li",[t("code",[s._v("-u fd")]),s._v(" \t使用文件描述符 fd 中的输入，而不是标准输入。")])]),s._v(" "),t("p",[t("code",[s._v("-p")]),s._v("的例子。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter one or more values > "')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"REPLY = '"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v("'\"")]),s._v("\n")])])]),t("p",[t("code",[s._v("-t")]),s._v("和"),t("code",[s._v("-s")]),s._v("的例子。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -sp "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter secret pass phrase > "')]),s._v(" secret_pass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("Secret pass phrase = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$secret_pass")]),s._v("'\"")]),s._v("\n")])])]),t("p",[s._v("上面这个脚本提示用户输入一个密码，并等待输入10秒钟。如果在特定的时间内没有完成输入， 则脚本会退出并返回一个错误。因为包含了一个 -s 选项，所以输入的密码不会出现在屏幕上。")]),s._v(" "),t("p",[s._v("Shell的内部变量"),t("code",[s._v("IFS")]),s._v("可以控制输入字段的分离。例如，这个 /etc/passwd 文件包含的数据行 使用冒号作为字段分隔符。通过把 IFS 的值更改为单个冒号，我们可以使用 read 读取 /etc/passwd 中的内容，并成功地把字段分给不同的变量。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# read-ifs: read fields from a file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/passwd\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter a user name > "')]),s._v(" user_name\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file_info")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user_name")]),s._v(':"')]),s._v(" $FILE"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_info")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" user pw uid gid name home shell "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_info")]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"User = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("'\"")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"UID = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uid")]),s._v("'\"")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"GID = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gid")]),s._v("'\"")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Full Name = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v("'\"")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Home Dir. = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$home")]),s._v("'\"")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Shell = '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$shell")]),s._v("'\"")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"No such user '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user_name")]),s._v("'\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("p",[s._v("Shell 允许在一个命令之前立即发生一个或多个变量赋值。这些赋值为跟随着的命令更改环境变量。 这个赋值的影响是暂时的；只是在命令存在期间改变环境变量。")]),s._v(" "),t("p",[s._v("虽然通常 read 命令接受标准输入，但是你不能这样做：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" “foo” "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("\n")])])]),t("p",[s._v("我们期望这个命令能生效，但是它不能。这个命令将显示成功，但是 REPLY 变量 总是为空。为什么会这样？")]),s._v(" "),t("p",[s._v("答案与 shell 处理管道线的方式有关系。在 bash（和其它 shells，例如 sh）中，管道线 会创建子 shell。它们是 shell 的副本，且用来执行命令的环境变量在管道线中。 上面示例中，read 命令将在子 shell 中执行。")]),s._v(" "),t("p",[s._v("在类 Unix 的系统中，子 shell 执行的时候，会为进程创建父环境的副本。当进程结束 之后，环境副本就会被破坏掉。这意味着一个子 shell 永远不能改变父进程的环境。read 赋值变量， 然后会变为环境的一部分。在上面的例子中，read 在它的子 shell 环境中，把 foo 赋值给变量 REPLY， 但是当命令退出后，子 shell 和它的环境将被破坏掉，这样赋值的影响就会消失。")]),s._v(" "),t("p",[s._v("使用 here 字符串是解决此问题的一种方法。")]),s._v(" "),t("p",[s._v("下面是生成菜单的一个例子。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# read-menu: a menu driven system information program")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nPlease Select:\n\n    1. Display System Information\n    2. Display Disk Space\n    3. Display Home Space Utilization\n    0. Quit\n"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter selection [0-3] > "')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),s._v(" ^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Program terminated."')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hostname: '),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOSTNAME")]),s._v('"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$REPLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Home Space Utilization (All Users)"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh /home/*\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Home Space Utilization ('),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(')"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Invalid entry."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);