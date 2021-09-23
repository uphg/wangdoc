(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{670:function(e,t,s){"use strict";s.r(t);var a=s(76),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"sftp-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sftp-命令"}},[e._v("#")]),e._v(" sftp 命令")]),e._v(" "),s("p",[s("code",[e._v("sftp")]),e._v("是 SSH 提供的一个客户端应用程序，主要用来安全地访问 FTP。因为 FTP 是不加密协议，很不安全，"),s("code",[e._v("sftp")]),e._v("就相当于将 FTP 放入了 SSH。")]),e._v(" "),s("p",[e._v("下面的命令连接 FTP 主机。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sftp")]),e._v(" username@hostname\n")])])]),s("p",[e._v("执行上面的命令，会要求输入 FTP 的密码。密码验证成功以后，就会出现 FTP 的提示符"),s("code",[e._v("sftp>")]),e._v("，下面是一个例子。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sftp")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v("@penguin.example.com\n"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v("@penguin.example.com's password:\nConnected to penguin.example.com.\nsftp"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("FTP 的提示符下面，就可以输入各种 FTP 命令了，这部分完全跟传统的 FTP 用法完全一样。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ls [directory]")]),e._v("：列出一个远程目录的内容。如果没有指定目标目录，则默认列出当前目录。")]),e._v(" "),s("li",[s("code",[e._v("cd directory")]),e._v("：从当前目录改到指定目录。")]),e._v(" "),s("li",[s("code",[e._v("mkdir directory")]),e._v("：创建一个远程目录。")]),e._v(" "),s("li",[s("code",[e._v("rmdir path")]),e._v("：删除一个远程目录。")]),e._v(" "),s("li",[s("code",[e._v("put localfile [remotefile]")]),e._v("：本地文件传输到远程主机。")]),e._v(" "),s("li",[s("code",[e._v("get remotefile [localfile]")]),e._v("：远程文件传输到本地。")]),e._v(" "),s("li",[s("code",[e._v("help")]),e._v("：显示帮助信息。")]),e._v(" "),s("li",[s("code",[e._v("bye")]),e._v("：退出 sftp。")]),e._v(" "),s("li",[s("code",[e._v("quit")]),e._v("：退出 sftp。")]),e._v(" "),s("li",[s("code",[e._v("exit")]),e._v("：退出 sftp。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);