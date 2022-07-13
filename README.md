# learning_angular_js

## 启动

1. `npm i` 安装依赖
2. `npm run start` 启动本地，浏览器访问http://localhost:1002/

## 学习资料

1. HTML基础教程: <https://www.w3school.com.cn/html/index.asp>
2. angularjs: <https://code.angularjs.org/1.6.0/docs/guide>
3. angular-ui-router: <https://github.com/angular-ui/ui-router/tree/0.4.3>
4. bootstrap: <https://getbootstrap.com/docs/3.4/#>
5. angular-ui-bootstrap: <https://angular-ui.github.io/bootstrap/#!#top>
6. html 语义化

## Requirements

1. 默认导航到repo, 已经实现
2. 添加弹窗，编辑内容
    1. 根据repo数据结构，自行设计弹窗页面，可以参考bootstrap样式
    2. 弹窗至少有`提交/取消`2个按钮
    3. 约定提交repo提交的后端接口为`/api/repos/:id`, http method为PATCH
3. 提交内容，跳转到详情
    1. 约定repo详情页为`/repos/:id`
    2. 需要显示repo所有字段, 页面结构自行设计，显示完所有字段即可
    3. 详情页有返回到repo页的按钮

> 以上已经完成(2022-07-10)
-------------------

4. 新增了date字段，需要使用filter将该字段显示成可读的时间字符串如`Wed Jul 13 2022 15:39:33 GMT+0800 (China Standard Time)`
5. 新增了stars字段，在表格显示中，需要针对这个字段做如下变化，需要使用directive来实现
   1. stars=0, 文字背景为灰色
   2. 100>stars>0, 文字背景为绿色
   3. 1000>stars>=100, 文字背景为橙色
   4. stars>=1000, 文字背景为红色

## TBC

1. test framework? karma
