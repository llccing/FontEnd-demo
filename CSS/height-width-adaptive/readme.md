## 高度、宽度自适应

之前的项目中，做高度自适应是通过js绑定onResize方法来实现的。
这样实现的问题就是在开始页面会有闪屏，从小宽度闪到全屏的宽度。

如果通过css来实现就不会有这样的问题，css页面初始化时就已经加载了，所以不会有闪屏的问题。
而js是在页面载入结束后才开始执行的（也许我应该将js放到head标签中，但是这样不是破坏了代码封装性，内嵌js不太合适吧）。