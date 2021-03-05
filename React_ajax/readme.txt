React 本身只关注界面, 并没有包含ajax请求, 所以在React中需要使用第三方ajax库,或者自己封装

常见的ajax库:
    JQuery -> 比较重, 且需要操作真是DOM所以不建议在React中使用
    axios -> 轻量级, 建议使用
        1) 封装XmlHttpRequest 对象的ajax
        2) promise风格
        3) 可以用于浏览器端和node服务器端