(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{505:function(s,a,t){"use strict";t.r(a);var e=t(76),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"用户管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[s._v("#")]),s._v(" 用户管理")]),s._v(" "),t("h2",{attrs:{id:"id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[s._v("#")]),s._v(" id")]),s._v(" "),t("p",[t("code",[s._v("id")]),s._v("命令用于查看指定用户的用户名和组名。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("me"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("me"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("groups")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("me"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[t("code",[s._v("id")]),s._v("输出结果分为三个部分，分别是UID（用户编号和用户名）、GID（组编号和组名），groups（用户所在的所有组）。")]),s._v(" "),t("p",[s._v("用户帐户的信息，存放在"),t("code",[s._v("/etc/passwd")]),s._v("文件里面；用户组的信息，存放在"),t("code",[s._v("/etc/group")]),s._v("文件里面。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回UID")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("UserName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回GID")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("UserName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回用户名")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -un "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("UserName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回组名")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -gn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("UserName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("上面的命令，如果省略用户名，则返回当前用户的信息。")]),s._v(" "),t("h2",{attrs:{id:"su"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#su"}},[s._v("#")]),s._v(" su")]),s._v(" "),t("p",[t("code",[s._v("su")]),s._v("命令允许你以另一个用户的身份，启动一个新的 shell 会话，或者是以这个用户的身份来发布一个命令。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" otherUser\n")])])]),t("p",[s._v("执行上面的命令以后，系统会提示输入密码。通过以后，就以另一个用户身份在执行命令了。")]),s._v(" "),t("p",[s._v("如果不加用户名，则表示切换到root用户。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\n")])])]),t("p",[t("code",[s._v("-l")]),s._v("参数表示启动一个需要登录的新的Shell，这意味着工作目录会切换到该用户的主目录。它的缩写形式是"),t("code",[s._v("-")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -\n")])])]),t("p",[s._v("上面命令表示，切换到root用户的身份，且工作目录也切换到root用户的主目录。")]),s._v(" "),t("p",[t("code",[s._v("-c")]),s._v("参数表示只以其他用户的身份，执行单个命令，而不是启动一个新的Session。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'command'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实例")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -l /root/*'")]),s._v("\n")])])]),t("h2",{attrs:{id:"sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sudo"}},[s._v("#")]),s._v(" sudo")]),s._v(" "),t("p",[t("code",[s._v("sudo")]),s._v("命令很类似"),t("code",[s._v("su")]),s._v("命令，但有几点差别。")]),s._v(" "),t("ul",[t("li",[s._v("对于管理员来说，"),t("code",[s._v("sudo")]),s._v("命令的可配置性更高")]),s._v(" "),t("li",[t("code",[s._v("sudo")]),s._v("命令通常只用于执行单个命令，而不是开启另一个Session。")]),s._v(" "),t("li",[t("code",[s._v("sudo")]),s._v("命令不要求超级用户的密码，而是用户使自己的密码来认证。")])]),s._v(" "),t("p",[t("code",[s._v("sudo")]),s._v("的设置在文件"),t("code",[s._v("/etc/sudoers")]),s._v("之中。")]),s._v(" "),t("p",[t("code",[s._v("-l")]),s._v("参数列出用户拥有的所有权限。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -l\n")])])]),t("h2",{attrs:{id:"chown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chown"}},[s._v("#")]),s._v(" chown")]),s._v(" "),t("p",[t("code",[s._v("chown")]),s._v("命令用来更改文件或目录的所有者和用户组。使用这个命令需要超级用户权限。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("owner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])])]),t("p",[s._v("下面是一些例子。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改文件所有者")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" bob foo.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改文件所有者和用户组")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" bob:users foo.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改用户组")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" :admins foo.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改文件所有者和用户组（用户 bob 登录系统时，所属的用户组）")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" bob: foo.txt\n")])])]),t("h2",{attrs:{id:"chgrp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chgrp"}},[s._v("#")]),s._v(" chgrp")]),s._v(" "),t("p",[t("code",[s._v("chgrp")]),s._v("命令更改用户组，用法与"),t("code",[s._v("chown")]),s._v("命令类似。")]),s._v(" "),t("h2",{attrs:{id:"useradd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useradd"}},[s._v("#")]),s._v(" useradd")]),s._v(" "),t("p",[t("code",[s._v("useradd")]),s._v("命令用来新增用户。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -G admin -d /home/bill -s /bin/bash -m bill\n")])])]),t("p",[s._v("上面命令新增用户"),t("code",[s._v("bill")]),s._v("，参数"),t("code",[s._v("-G")]),s._v("指定用户所在的组，参数"),t("code",[s._v("d")]),s._v("指定用户的主目录，参数"),t("code",[s._v("s")]),s._v("指定用户的 Shell，参数"),t("code",[s._v("m")]),s._v("表示如果该目录不存在，则创建该目录。")]),s._v(" "),t("h2",{attrs:{id:"usermod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usermod"}},[s._v("#")]),s._v(" usermod")]),s._v(" "),t("p",[t("code",[s._v("usermod")]),s._v("命令用来修改用户的各项属性。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -g sales jerry\n")])])]),t("p",[s._v("上面的命令修改用户"),t("code",[s._v("jerry")]),s._v("属于的主要用户组为"),t("code",[s._v("sales")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G sales jerry\n")])])]),t("p",[s._v("上面的命令修改用户"),t("code",[s._v("jerry")]),s._v("属于的次要用户组为"),t("code",[s._v("sales")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"adduser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adduser"}},[s._v("#")]),s._v(" adduser")]),s._v(" "),t("p",[t("code",[s._v("adduser")]),s._v("命令用来将一个用户加入用户组。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" adduser username grouptoadd\n")])])]),t("h2",{attrs:{id:"groupadd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#groupadd"}},[s._v("#")]),s._v(" groupadd")]),s._v(" "),t("p",[t("code",[s._v("groupadd")]),s._v("命令用来新建一个用户组。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" group1\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" adduser foobar group1\n")])])]),t("h2",{attrs:{id:"groupdel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#groupdel"}},[s._v("#")]),s._v(" groupdel")]),s._v(" "),t("p",[t("code",[s._v("groupdel")]),s._v("命令用来删除一个用户组。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupdel")]),s._v(" group1\n")])])]),t("h2",{attrs:{id:"passwd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#passwd"}},[s._v("#")]),s._v(" passwd")]),s._v(" "),t("p",[t("code",[s._v("passwd")]),s._v("命令用于修改密码。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改自己的密码")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改其他用户的密码")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);