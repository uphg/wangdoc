(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{450:function(t,a,s){"use strict";s.r(a);var n=s(76),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"归档和备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#归档和备份"}},[t._v("#")]),t._v(" 归档和备份")]),t._v(" "),s("h2",{attrs:{id:"gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[t._v("#")]),t._v(" gzip")]),t._v(" "),s("p",[t._v("gzip 程序用来压缩文件，原文件的压缩版（添加"),s("code",[t._v("gz")]),t._v("后缀名）会替代原文件。gunzip 程序用来还原压缩版本。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" foo.txt\n$ gunzip foo.txt.gz\n")])])]),s("p",[s("code",[t._v("gzip")]),t._v("的参数如下。")]),t._v(" "),s("ul",[s("li",[t._v("-c\t把输出写入到标准输出，并且保留原始文件。也有可能用--stdout 和--to-stdout 选项来指定。")]),t._v(" "),s("li",[t._v("-d\t解压缩。正如 gunzip 命令一样。也可以用--decompress 或者--uncompress 选项来指定.")]),t._v(" "),s("li",[t._v("-f\t强制压缩，即使原始文件的压缩文件已经存在了，也要执行。也可以用--force 选项来指定。")]),t._v(" "),s("li",[t._v("-h\t显示用法信息。也可用--help 选项来指定。")]),t._v(" "),s("li",[t._v("-l\t列出每个被压缩文件的压缩数据。也可用--list 选项。")]),t._v(" "),s("li",[t._v("-r\t若命令的一个或多个参数是目录，则递归地压缩目录中的文件。也可用--recursive 选项来指定。")]),t._v(" "),s("li",[t._v("-t\t测试压缩文件的完整性。也可用--test 选项来指定。")]),t._v(" "),s("li",[t._v("-v\t显示压缩过程中的信息。也可用--verbose 选项来指定。")]),t._v(" "),s("li",[t._v("-number\t设置压缩指数。number 是一个在1（最快，最小压缩）到9（最慢，最大压缩）之间的整数。 数值1和9也可以各自用--fast 和--best 选项来表示。默认值是整数6。")])]),t._v(" "),s("p",[t._v("下面是一些例子。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看解压缩后的内容")]),t._v("\n$ gunzip -c foo.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v("\n")])])]),s("p",[s("code",[t._v("zcat")]),t._v("程序等同于带有-c 选项的 gunzip 命令。它可以像"),s("code",[t._v("cat")]),t._v("命令那样，用来查看"),s("code",[t._v("gzip")]),t._v("压缩文件。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ zcat foo.txt.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v("\n")])])]),s("h2",{attrs:{id:"bzip2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bzip2"}},[t._v("#")]),t._v(" bzip2")]),t._v(" "),s("p",[s("code",[t._v("bzip2")]),t._v("程序与"),s("code",[t._v("gzip")]),t._v("程序相似，但是使用了不同的压缩算法，舍弃了压缩速度，实现了更高的压缩级别。在大多数情况下，它的工作模式等同于"),s("code",[t._v("gzip")]),t._v("。 由"),s("code",[t._v("bzip2")]),t._v("压缩的文件，用扩展名"),s("code",[t._v(".bz2")]),t._v("表示。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" foo.txt\n$ bunzip2 foo.txt.bz2\n")])])]),s("p",[t._v("gzip程序的所有选项（除了"),s("code",[t._v("-r")]),t._v("），bzip2 程序同样也支持。同样有 bunzip2 和 bzcat 程序来解压缩文件。bzip2 文件也带有 bzip2recover 程序，其会 试图恢复受损的 .bz2 文件。")]),t._v(" "),s("h2",{attrs:{id:"zip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zip"}},[t._v("#")]),t._v(" zip")]),t._v(" "),s("p",[s("code",[t._v("zip")]),t._v("程序既是压缩工具，也是一个打包工具，读取和写入.zip文件。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" options zipfile file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("它的用法如下。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将指定目录压缩成zip文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" -r playground.zip playground\n")])])]),s("p",[s("code",[t._v("zip")]),t._v("与"),s("code",[t._v("tar")]),t._v("命令有一个相反之处。如果压缩文件已存在，其将被更新而不是被替代。这意味着会保留此文件包，但是会添加新文件，同时替换匹配的文件。")]),t._v(" "),s("p",[t._v("解压使用"),s("code",[t._v("unzip")]),t._v("命令。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/playground.zip\n")])])]),s("p",[s("code",[t._v("unzip")]),t._v("命令的参数如下。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-l")]),t._v(" 列出文件包中的内容而不解压")]),t._v(" "),s("li",[s("code",[t._v("-v")]),t._v(" 显示冗余信息")]),t._v(" "),s("li",[s("code",[t._v("-p")]),t._v(" 输出发送到标准输出")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -p ls-etc.zip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v("\n")])])]),s("h2",{attrs:{id:"tar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[t._v("#")]),t._v(" tar")]),t._v(" "),s("p",[s("code",[t._v("tar")]),t._v("是tape archive的简称，原来是一款制作磁带备份的工具，现在主要用于打包。一个 tar 包可以由一组独立的文件，一个或者多个目录，或者两者混合体组成。")]),t._v(" "),s("p",[s("code",[t._v("tar")]),t._v("程序的语法如下。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pathname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("tar支持以下模式。")]),t._v(" "),s("ul",[s("li",[t._v("c 表示create，为文件和／或目录列表创建归档文件。")]),t._v(" "),s("li",[t._v("x 抽取归档文件。")]),t._v(" "),s("li",[t._v("r 追加具体的路径到归档文件的末尾。")]),t._v(" "),s("li",[t._v("t 列出归档文件的内容。")])]),t._v(" "),s("p",[t._v("支持的参数如下。")]),t._v(" "),s("ul",[s("li",[t._v("f 表示file，用来指定生成的文件。")])]),t._v(" "),s("p",[t._v("模式和参数可以写在一起，而且不需要开头的短横线。注意，必须首先指定模式，然后才是其它的选项。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建子目录的tar包")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" cf playground.tar playground\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tar包内容")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" tf playground.tar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看更详细的列表信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" tvf playground.tar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 还原归档文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf playground.tar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 还原单个文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf archive.tar pathname\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 还原文件到指定目录")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvf archive.tar -C /home/me/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追加文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" rf archive.tar file.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证归档文件内容是否正确")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" tvfW archive.tar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 支持通配符")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/playground2.tar --wildcards "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home/me/playground/\\*.txt'")]),t._v("\n")])])]),s("p",[t._v("注意，"),s("code",[t._v("tar")]),t._v("命令还原的时候，总是还原为相对路径。如果归档的时候，保存的是绝对路径，那么还原的时候，这个绝对路径会整个变成相对路径。")]),t._v(" "),s("p",[s("code",[t._v("find")]),t._v("命令可以与"),s("code",[t._v("tar")]),t._v("命令配合使用。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" playground -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file.txt'")]),t._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" rf playground.tar "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),t._v("\n")])])]),s("p",[t._v("上面的命令先用"),s("code",[t._v("find")]),t._v("程序找到所有名为"),s("code",[t._v("file.txt")]),t._v("的文件，然后使用追加模式（"),s("code",[t._v("r")]),t._v("）的"),s("code",[t._v("tar")]),t._v("命令，把匹配的文件添加到归档文件"),s("code",[t._v("playground.tar")]),t._v("里面。")]),t._v(" "),s("p",[t._v("这种"),s("code",[t._v("tar")]),t._v("和"),s("code",[t._v("find")]),t._v("的配合使用，可以创建逐渐增加的目录树或者整个系统的备份。通过"),s("code",[t._v("find")]),t._v("命令匹配新于某个时间戳的文件，我们就能够创建一个归档文件，其只包含新于上一个 tar 包的文件。")]),t._v(" "),s("p",[t._v("tar支持压缩功能。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打成gzip压缩包")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" czvf assets.tar.gz dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打成bz2压缩包")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" cvfj assets.tar.bz2 dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压 tar.gz 文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xzv archive.tar.gz\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvf archive.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压bz2压缩包")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvf archive.tar.bz2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示gzip压缩包内容")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" tvf archive.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示bz2压缩包内容")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" tvf archive.tar.bz2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从gzip压缩包取出单个文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf archive.tar.gz file.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从bz2压缩包取出单个文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" jxvf archive.tar.bz2 file.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按通配符取出文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf archive.tar.gz --wildcards "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.php'")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" jxvf archive.tar.bz2 --wildcards "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.php'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追加文件到压缩包")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" rvf archive.tar.gz xyz.txt\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" rvf archive.tar.bz2 xyz.txt\n")])])]),s("h2",{attrs:{id:"rsync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rsync"}},[t._v("#")]),t._v(" rsync")]),t._v(" "),s("p",[s("code",[t._v("rsync")]),t._v("命令用于在多个目录之间、或者本地与远程目录之间同步。字母"),s("code",[t._v("r")]),t._v("表示"),s("code",[t._v("remote")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" destination\n")])])]),s("p",[t._v("source 和 destination 是下列选项之一：")]),t._v(" "),s("ul",[s("li",[t._v("一个本地文件或目录")]),t._v(" "),s("li",[t._v("一个远端文件或目录，以"),s("code",[t._v("[user@]host:path")]),t._v("的形式存在")]),t._v(" "),s("li",[t._v("一个远端 rsync 服务器，由"),s("code",[t._v("rsync://[user@]host[:port]/path")]),t._v("指定")])]),t._v(" "),s("p",[t._v("注意 source 和 destination 两者之一必须是本地文件。rsync 不支持远端到远端的复制。")]),t._v(" "),s("p",[s("code",[t._v("rsync")]),t._v("命令的参数如下。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-a")]),t._v(" 递归和保护文件属性")]),t._v(" "),s("li",[s("code",[t._v("-v")]),t._v(" 冗余输出")]),t._v(" "),s("li",[s("code",[t._v("--delete")]),t._v(" 删除可能在备份设备中已经存在但却不再存在于源设备中的文件")]),t._v(" "),s("li",[s("code",[t._v("--rsh=ssh")]),t._v(" 使用 ssh 程序作为远程 shell，目的地必须标注主机名。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步两个本地目录")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -av playground foo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除源设备不存在的文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -av --delete /etc /home /usr/local /media/BigDisk/backup\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 远程同步")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -av --delete --rsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssh /etc /home /usr/local remote-sys:/backup\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与远程rsync主机同步")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -av -delete rsync://rsync.gtlib.gatech.edu/path/to/oss fedora-devel\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);