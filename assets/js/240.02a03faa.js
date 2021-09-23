(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{680:function(t,a,s){"use strict";s.r(a);var n=s(76),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"offline-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offline-应用"}},[t._v("#")]),t._v(" Offline 应用")]),t._v(" "),s("p",[t._v("Web 应用不仅可以在浏览器缓存资源文件（HTML、CSS、JS 脚本、图片等），还可以把应用本身储存到浏览器。")]),t._v(" "),s("p",[t._v("缓存的资源文件必须在线使用，只有先从服务器加载网页，然后才能使用本地缓存；但是，应用一旦储存，就可以离线使用。另外，用户常规性地清除浏览器缓存，并不会清除储存的应用，除非用户显式地卸载或删除它们。")]),t._v(" "),s("p",[t._v("为了开启离线储存，必须创建一个 manifest 文件。该文件列出了所有需要储存的文件。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("CACHE MANIFEST\nmyapp.html\nmyapp.js\nmyapp.css\nimages/background.png\n")])])]),s("p",[t._v("Manifest 文件的第一行必须是"),s("code",[t._v("CACHE MANIFEST")]),t._v("。然后，每一行列出一个需要储存的文件，它们的位置都是相对于 Manifest 文件的位置。空行会被忽略，以"),s("code",[t._v("#")]),t._v("开头的行是注释，也会被忽略。")]),t._v(" "),s("p",[t._v("这个文件的后缀名一般是"),s("code",[t._v(".appcache")]),t._v("。它的 MIME 类型必须是"),s("code",[t._v("text/cache-manifest")]),t._v("，如果服务器将其设为其他类型，就不会被浏览器缓存。")]),t._v(" "),s("p",[t._v("编写完这个文件以后，要将"),s("code",[t._v("<html>")]),t._v("元素的"),s("code",[t._v("manifest")]),t._v("属性指向它。浏览器加载这个网页的时候，就会读取这个 Manifest 文件，离线储存这个网页和相关的资源。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("HTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("manifest")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myapp.appcache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果一个 Web 应用有多个网页需要离线储存，那么每个网页都应该将"),s("code",[t._v("manifest")]),t._v("属性指向这个文件。一旦被储存，以后加载该网页的时候，就会从缓存里面加载。这时，只有 Manifest 文件里面列出的文件会被加载，其他文件不会。如果这时浏览器在线，浏览器就会去检查 Manifest 文件是否有新版本，如果有新版本，就会重新储存和更新该文件列出的资源。最方便的办法是在 Manifest 文件里面用注释列出版本号。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("CACHE MANIFEST\n# MyApp version 1\nMyApp.html\nMyApp.js\n")])])]),s("p",[t._v("如果需要删除离线储存，只要删除 Manifest 文件，让其返回 404 状态码即可。")]),t._v(" "),s("p",[t._v("离线储存更新完成，会触发浏览器的"),s("code",[t._v("updateready")]),t._v("事件，可以对这个事件指定监听函数。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationCache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onupdateready")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新版本下载完成。是否需要重新加载？'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("脚本可以注册"),s("code",[t._v("online")]),t._v("和"),s("code",[t._v("offline")]),t._v("事件的监听函数，通过"),s("code",[t._v("navigator.onLine")]),t._v("属性，判断浏览器是否在线从而进行数据同步。")]),t._v(" "),s("p",[t._v("每次浏览器加载一个具有"),s("code",[t._v("manifest")]),t._v("属性的网页，浏览器就会触发一个"),s("code",[t._v("checking")]),t._v("事件，然后去加载 Manifest 文件。")]),t._v(" "),s("ul",[s("li",[t._v("如果应用已经储存，并且 Manifest 文件没有变化，那么触发"),s("code",[t._v("noupdate")]),t._v("事件。")]),t._v(" "),s("li",[t._v("如果应用已经储存，并且 Manifest 文件有变化，那么触发"),s("code",[t._v("downloading")]),t._v("事件，浏览器重新下载所有离线资源。下载过程中，触发"),s("code",[t._v("progress")]),t._v("事件，下载结束触发"),s("code",[t._v("updateready")]),t._v("事件。")]),t._v(" "),s("li",[t._v("如果应用没有储存，下载结束将触发"),s("code",[t._v("cached")]),t._v("事件。")]),t._v(" "),s("li",[t._v("如果离线，无法检查 Manifest 文件，浏览器会触发一个"),s("code",[t._v("error")]),t._v("事件。")]),t._v(" "),s("li",[t._v("如果浏览器在线，而且应用已经储存，但是 Manifest 文件返回 404，浏览器触发"),s("code",[t._v("obsolete")]),t._v("事件，将储存的应用移除。")])]),t._v(" "),s("p",[t._v("所有这些事件都是可以取消的。监听函数可以返回"),s("code",[t._v("false")]),t._v("，取消这些事件的默认动作。")]),t._v(" "),s("p",[s("code",[t._v("applicationCache. status")]),t._v("属性返回离线储存的状态。")]),t._v(" "),s("ul",[s("li",[t._v("ApplicationCache.UNCACHED (0)\nThis application does not have a manifest attribute: it is not cached.")]),t._v(" "),s("li",[t._v("ApplicationCache.IDLE (1)\nThe manifest has been checked and this application is cached and up to date.")]),t._v(" "),s("li",[t._v("ApplicationCache.CHECKING (2)\nThe browser is checking the manifest file.")]),t._v(" "),s("li",[t._v("ApplicationCache.DOWNLOADING (3)\nThe browser is downloading and caching files listed in the manifest.")]),t._v(" "),s("li",[t._v("ApplicationCache.UPDATEREADY (4)\nA new version of the application has been downloaded and cached.")]),t._v(" "),s("li",[t._v("ApplicationCache.OBSOLETE (5)\nThe manifest no longer exists and the cache will be deleted.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);