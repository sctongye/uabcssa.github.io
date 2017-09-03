---
published: true
layout: post
post_author: LY
categories:
  - 工具
title: 如何编辑CSSA网站的文章
---
## CSSA 网站编辑使用教程

### 注册Github加入CSSA网站编辑团队

[Github](https://zh.wikipedia.org/wiki/GitHub)是<del>大型程序员交友网站</del>一个通过 Git 进行版本控制的软件源代码托管服务。GitHub同时提供付费账户和免费账户。这两种账户都可以创建公开的**代码仓库**，但是付费账户还可以创建私有的代码仓库。
UAB CSSA 将自己的官网托管在 Github page上，静态网站，永久免费，多人共同编辑。

加入 CSSA 网站编辑团队（所有的CSSA成员都要加入），首先要注册 Github 账号，然后联系 uabcssa 团队的管理员来邀请成员加入[uabcssa](https://github.com/uabcssa)。

### 连接prose.io你的Github账号

[prose.io](http://prose.io/)是一个在线编辑 Github page 的第三方编辑器。这个编辑器有按钮，方便不会使用[markdown](https://guides.github.com/features/mastering-markdown/)语法的同学们编辑网站。首先我们要连接自己的 Github 账户和 prose.io。当你加入 Github上 的 uabcssa 团队时，你会自动在 prose.io 看到我们的网站源文件。

![prose主页](http://i.imgur.com/eWJMF7G.png)

### 从prose.io 来编辑网站

网站编辑人员主要使用的是我们网站文件目录下的 _draft 和 _post 目录。_draft 目录是放文章草稿，_post 目录放已经发布的文章（所有在_post文件夹里的文章都是可以在网站上显示的，所以刚开始创建新的文章时，请务必选择在 _draft 目录）。

![draft目录](http://i.imgur.com/zmmJ24U.png)

- 新建文档

点击draft目录里绿色的 NEW FILE 按钮，就可以新建一个文档。

![新文档](http://i.imgur.com/mb3T6lO.png)

文档的命名格式是 2017-09-03-sdfsd-sdfsdf-fsdfsd.md 必须以当时的日期作为开头，单词之间用短横线连接。

- 开始编辑文档

我们可以在编辑器中直接写文章，文章格式遵从[markdown](https://guides.github.com/features/mastering-markdown/)文档规则。中文指南在[这里](https://coding.net/help/doc/project/markdown.html)。

文档撰写时要注意每段之间空一行。

- 保存编辑内容

![保存](http://i.imgur.com/aynwFLd.png)

保存编辑的内容，点击右边的保存按钮，需要输入 commit 的内容（文章代码提交信息）。这个commit是记录每一次保存文件时，我们都做了些什么事情，请仔细填写，另外不要每次保存都填写一样的commit，无法方便的回溯历史版本。

当你成功保存后，可以在 Github UABCSSA 群组的代码仓库中看到自己刚刚保存的内容（如下所示）。

![github保存](http://i.imgur.com/BTweyM5.png)

- 在线查看自己的文章在网站中的显示样式

![查看页面](http://i.imgur.com/L9omp8g.png)

右边的眼睛按钮可以在线查看自己写的文章，展示在我们的网站上是什么样子的。

- 文章的metainfo

![metainfo](http://i.imgur.com/2P71iQE.png)

文章的 metainfo 就是头文件，里面包含文章的layout（文章模版），post_author（作者），date（发布时间），category（文章目录），title（文章题目）。


## 网站管理员的工作

1. 帮助维护网站的所有页面，查看并修改成员编写的文章。
2. 帮助成员上传文章所需图片到[imgur](http://imgur.com/)，注意从 imgur 网站上右键，找到图片的地址（一般以 png 结尾），并根据 markdown 语法将图片插入到网站的文章中。
3. 帮助成员按照 markdown 语法修改文章中的连接。
4. 帮助成员填写文章的 metainfo
5. 审核并发布文章
6. 培训成员网站编辑技术。
