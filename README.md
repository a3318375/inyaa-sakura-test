# vue3 + vite2 + ts + ssr + sakura
这是一个后端人员写的sakura主题的vue3 + ts实现

## 前言

一直很喜欢wordpress的sakura主题，但是我本人是做java的，所以很想要一套java的东西。
对于博客前端，所以自己仿照写了一套。

## 项目组成

项目是由七拼八凑组成的：
首先是首页和菜单，都是采用的Sakura改版的项目：[Sakurairo](https://gitee.com/mirai-mamori/Sakurairo)

其他的，都属于开发中的东西：

评论：由于还用了antdv，所以评论区的风格，之后打算采用antdv的样式。可以去antdv看一下，还是很清爽的。

归档：这里同样采用了antdv的timeline组件，antdv都是蓝白风，我个人觉得还是挺搭配的，

关于我：这个是写死的，后期打算提到后端

## 项目后端

[inyaa](https://gitee.com/yxhao/inyaa) 这个项目我会打算做成微服务，所以会上很多东西，防火墙啊，断流器啊之类的。

但是我的接口数据都比较简单，能用这套方案的，前端肯定比我好的多，我是后端啊。
所以可以尝试自己写一个，总共也没几个接口。

## 项目运行

```
yarn

yarn dev

yarn build

#ssr启动
yarn serve
```

