(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{467:function(s,t,a){"use strict";a.r(t);var n=a(76),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[s._v("#")]),s._v(" find")]),s._v(" "),a("p",[a("code",[s._v("find")]),s._v("命令用于寻找文件，会包括当前目录的所有下级目录。")]),s._v(" "),a("p",[s._v("如果不带任何参数，"),a("code",[s._v("find")]),s._v("文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 sort 效果更好。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n./Makefile\n./README\n./build\n./client.c\n./client.h\n./common.h\n./project.c\n./server.c\n./server.h\n./tests\n./tests/suite1.pl\n./tests/suite2.pl\n./tests/suite3.pl\n./tests/suite4.pl\n")])])]),a("p",[s._v("如果想要 ls -l 样式的列表，只要在 find 后面加上 -ls。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -ls\n")])])]),a("p",[s._v("find 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的你可以用以获取某些文件列表的过滤器：")]),s._v(" "),a("ul",[a("li",[s._v("find -name '*.c' —— 查找符合某 shell 式样式的文件名的文件。用 iname 开启大小写不敏感搜索。")]),s._v(" "),a("li",[s._v("find -path '"),a("em",[s._v("test")]),s._v("' —— 查找符合某 shell 式样式的路径的文件。用 ipath 开启大小写不敏感搜索。")]),s._v(" "),a("li",[s._v("find -mtime -5 —— 查找近五天内编辑过的文件。你也可以用 +5 来查找五天之前编辑过的文件。")]),s._v(" "),a("li",[s._v("find -newer server.c —— 查找比 server.c 更新的文件。")]),s._v(" "),a("li",[s._v("find -type d —— 查找所有文件夹。如果想找出所有文件，那就用 -type f；找符号连接就用 -type l。")])]),s._v(" "),a("p",[s._v("要注意，上面提到的这些过滤器都是可以组合使用的，例如找出近两天内编辑过的 C 源码：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.c'")]),s._v(" -mtime -2\n")])])]),a("p",[s._v("默认情况下， find 对搜索结果所采取的动作只是简单地通过标准输出输出一个列表，然而其实还有其他一些有用的后续动作。")]),s._v(" "),a("ul",[a("li",[s._v("-ls —— 如前文，提供了一种类 ls -l 式的列表。")]),s._v(" "),a("li",[s._v("-delete —— 删除符合查找条件的文件。")]),s._v(" "),a("li",[s._v("-exec —— 对搜索结果里的每个文件都运行某个命令， "),a("code",[s._v("{}")]),s._v("会被替换成适当的文件名，并且命令用"),a("code",[s._v("\\;")]),s._v("终结。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.pl'")]),s._v(" -exec perl -c "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("你也可以使用"),a("code",[s._v("+")]),s._v("作为终止符来对所有结果运行一次命令。我还发现一个我经常使用的小技巧，就是用 find 生成一个文件列表，然后在 Vim 的垂直分窗中编辑：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.c'")]),s._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" +\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);