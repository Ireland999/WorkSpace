static-html-builder
===================

这个工具帮助用户编写静态 HTML 文件。

特点：

1. 使用less
2. 使用bower


安装方法
----

安装之前确保已经有 git 和 node.js 环境。node.js 需要 bower 与 grunt-cli。

执行以下命令：
```
git clone https://github.com/gengen1988/static-html-builder.git
cd static-html-builder
npm install
bower install
```

跨域
----
考虑到 IE 8 的兼容性调整，之后的版本统一去除对跨域的支持。如需在开发过程中访问其他域中的 API Server 时，请在 grunt 加入开发时的代理。在部署生产环境的应用时，使用反向代理将静态文件和 API 置于同一域中。
