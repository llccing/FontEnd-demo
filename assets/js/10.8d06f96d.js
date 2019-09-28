(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{207:function(t,e,i){"use strict";i.r(e);var n=i(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("@(out)[知识点, , Markdown]")]),t._m(1),i("p",[t._v("[TOC]")]),t._m(2),t._m(3),i("p",[t._v("nginx开启压缩选项，将“#”注释去掉即可。")]),t._m(4),t._m(5),t._m(6),t._m(7),i("ul",[i("li",[i("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24764131",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的了解gzip吗"),i("OutboundLink")],1)]),i("li",[i("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Gzip",target:"_blank",rel:"noopener noreferrer"}},[t._v("gzip"),i("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("gzip")]),this._v("是一种文件格式，也是用来压缩、解压文件的应用程序。这个程序是Jean-loup Gailly和Mark Adler创建的，它被用来替代早期Unix系统上的压缩工具，并且计划给GNU（GNU's Not Unix）用，“gzip”中的“g”就是来自GNU。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 工作原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("client请求url，并在request header中设置属性accept-encoding: gzip，告知server，我支持gzip，你可以给我传gzip压缩的内容。")]),e("li",[this._v("server收到请求后，判断client是否支持gzip， 如果支持则向client传送压缩过的内容，并且设置response的首部content-encoding为gzip（这里要说明一下，gzip压缩在nginx server需要手动开启）。")]),e("li",[this._v("浏览器收到压缩内容后，对于使用gzip压缩的资源进行解压操作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\t # gzip_vary on;\n\t # gzip_proxied any;\n\t # gzip_comp_level 6;\n\t # gzip_buffers 16 8k;\n\t # gzip_http_version 1.1;\n\t # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/java    script;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("压缩前\n"),e("img",{attrs:{src:"http://7xst43.com1.z0.glb.clouddn.com/gzip1.png",alt:"Alt text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("压缩后，压缩后的效果改变明显。\n"),e("img",{attrs:{src:"http://7xst43.com1.z0.glb.clouddn.com/gzip2.png",alt:"Alt text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);r.options.__file="gzip.md";e.default=r.exports}}]);