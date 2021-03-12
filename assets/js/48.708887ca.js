(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{252:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rem","aria-hidden":"true"}},[e._v("#")]),e._v(" rem")]),e._v(" "),r("h2",{attrs:{id:"什么是rem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是rem","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是rem")]),e._v(" "),r("p",[e._v("rem和em都是相对单位，CSS3引入rem。")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("em作为font-size的单位时，代表父元素的字体大小。"),r("strong",[e._v("em作为其他属性的单位时，代表自身字体大小。")])])]),e._v(" "),r("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"css-em",src:"https://codepen.io/llccing/embed/zYYZKVE?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),r("a",{attrs:{href:"https://codepen.io/llccing/pen/zYYZKVE"}},[e._v("css-em")]),e._v(" by llccing\n  ("),r("a",{attrs:{href:"https://codepen.io/llccing"}},[e._v("@llccing")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),r("p",[e._v("使用em做弹性布局时，有两个缺点:")]),e._v(" "),r("ul",[r("li",[e._v("层层嵌套，导致计算复杂。")]),e._v(" "),r("li",[e._v("牵一发而动全身，一旦某个节点字体大小变化，后代元素都得重新计算。")])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素时，相对于其初始字体大小。")])]),e._v(" "),r("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"css-em",src:"https://codepen.io/llccing/embed/mddWObg?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),r("a",{attrs:{href:"https://codepen.io/llccing/pen/mddWObg"}},[e._v("css-em")]),e._v(" by llccing\n  ("),r("a",{attrs:{href:"https://codepen.io/llccing"}},[e._v("@llccing")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),r("h2",{attrs:{id:"rem布局原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rem布局原理","aria-hidden":"true"}},[e._v("#")]),e._v(" rem布局原理")]),e._v(" "),r("p",[e._v("rem布局的本质是什么？是等比缩放，一般是基于宽度。")]),e._v(" "),r("p",[e._v("使用sass来写rem布局。\n"),r("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"css-em",src:"https://codepen.io/llccing/embed/Vwwpmag?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\nSee the Pen "),r("a",{attrs:{href:"https://codepen.io/llccing/pen/Vwwpmag"}},[e._v("css-em")]),e._v(" by llccing\n("),r("a",{attrs:{href:"https://codepen.io/llccing"}},[e._v("@llccing")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")])]),e._v(" "),r("p",[e._v("颜海镜大佬的demo中用的是scss语法，sass语法是没有分号、大括号的。")]),e._v(" "),r("h2",{attrs:{id:"比rem更好的布局方案-vw-vh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#比rem更好的布局方案-vw-vh","aria-hidden":"true"}},[e._v("#")]),e._v(" 比rem更好的布局方案 vw/vh")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("vw -- 视口宽度的1/100；vh -- 视口高度的1/100。")])]),e._v(" "),r("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"css-vw-vh",src:"https://codepen.io/llccing/embed/xxxqdKW?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),r("a",{attrs:{href:"https://codepen.io/llccing/pen/xxxqdKW"}},[e._v("css-vw-vh")]),e._v(" by llccing\n  ("),r("a",{attrs:{href:"https://codepen.io/llccing"}},[e._v("@llccing")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),r("h3",{attrs:{id:"rem-vw兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rem-vw兼容性","aria-hidden":"true"}},[e._v("#")]),e._v(" rem/vw兼容性")]),e._v(" "),r("p",[e._v("rem ios@4.1+ android@2.1+")]),e._v(" "),r("p",[e._v("vw  ios@6.1+ android@4.4+")]),e._v(" "),r("h2",{attrs:{id:"rem使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rem使用场景","aria-hidden":"true"}},[e._v("#")]),e._v(" rem使用场景")]),e._v(" "),r("blockquote",[r("p",[e._v("内容型的网站不适合rem，比如百度知道、百度经验。偏app类、图标类、图片类，如淘宝、活动页面，比较适合rem。")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/twbs/bootstrap/issues/19943",target:"_blank",rel:"noopener noreferrer"}},[e._v("但是有个问题是bootstrap4默认采用了rem布局"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"rem的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rem的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" rem的问题")]),e._v(" "),r("ul",[r("li",[e._v("字体大小不能用rem。由于设置了根元素的字体和大小，会影响所有没有设置字体的元素，因为字体大小会被继承。所以我们可以再body元素上做修正")])]),e._v(" "),r("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"css-rem-fix-body",src:"https://codepen.io/llccing/embed/BaaWZvx?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),r("a",{attrs:{href:"https://codepen.io/llccing/pen/BaaWZvx"}},[e._v("css-rem-fix-body")]),e._v(" by llccing\n  ("),r("a",{attrs:{href:"https://codepen.io/llccing"}},[e._v("@llccing")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),r("ul",[r("li",[e._v("如果PC端浏览，页面过宽需要再次修正。")])]),e._v(" "),r("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"css-rem-max-width",src:"https://codepen.io/llccing/embed/wvvJeOx?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),r("a",{attrs:{href:"https://codepen.io/llccing/pen/wvvJeOx"}},[e._v("css-rem-max-width")]),e._v(" by llccing\n  ("),r("a",{attrs:{href:"https://codepen.io/llccing"}},[e._v("@llccing")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://yanhaijing.com/css/2017/09/29/principle-of-rem-layout/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rem布局原理解析"),r("OutboundLink")],1),e._v(" - 颜海镜")])])])}),[],!1,null,null,null);t.default=a.exports}}]);