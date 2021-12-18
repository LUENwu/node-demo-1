# 请求与响应
> HTTP 的请求与响应:  
HTTP 通信由两部分组成： 客户端请求消息 与 服务器响应消息

> 浏览器发送 HTTP 请求的过程：  
当用户在浏览器的地址栏中输入一个 URL 并按回车键之后， 浏览器会向 HTTP 服务器发送 HTTP 请求。 HTTP 请求主要分为“Get”和“Post”两种方法。 当我们在浏览器输入URL http://www.baidu.com 的 时 候 ， 浏 览 器 发 送 一 个 Request 请 求 去 获取 http://www.baidu.com 的 html 文件， 服务器把 Response 文件对象发送回给浏览器。  
浏览器分析 Response 中的 HTML， 发现其中引用了很多其他文件， 比如 Images 文件，CSS 文件， JS 文件。 浏览器会自动再次发送 Request 去获取图片， CSS 文件， 或者 JS 文件。
当所有的文件都下载成功后， 网页会根据 HTML 语法结构， 完整的显示出来了。  
————————————————  
  
原文链接：https://blog.csdn.net/wapecheng/article/details/93522153  

## 1. 请求
* 请求动词: 路径参数与查询参数 协议名/版本 -- 请求行
* host: 域名或IP 端口号 -- 请求头
* Accept: 传输文件类型 比如:text/html;text/css; text/javascript; -- 请求头 
* Content-Type: 请求体的格式[类型/语法] -- 请求头
* 请求体: 既是上传的内容  / * 请求体在'GET'请求下一般为空 * /

典型且简单的请求实例![典型且简单的请求实例](/image/http请求实例.jpg)

## 总结:
1. 请求可分三部分:请求行 请求头 请求体
2. 请求动词一般有GET/POST/PUT/PITCH/DELETE
3. 请求体在'GET'请求下一般为空
4. 目前http主要使用的2种请求方式为 GET 与 POST ,GET从服务器上获取数据,POST则向服务器传输数据.

# 扩展
##  如何使用curl命令行构造请求? 
1. 设置请求动词
```
curl -v http://localhost:8888/ -- GET

curl -X POST --data '内容' http://localhost:8888/ -- POST 
```

2. 设置请求头: -H 'Name:Value' 或者 --header 'Name:Value'
```
curl -v -H 'Accept: text/xml' http:http://localhost:8888/

curl -v -X POST -H 'Accept: text/xml' --data '内容' http:http://localhost:8888/

```
图示 ![例子](/image/修改请求头后curl显示的例子185045.jpg)  

3. 这是请求体:也就是上传的内容--请求体在GET请求中一般为空
```
设置请求体:-d '内容' 或--data '内容'
```
  
4. 设置路径与查询参数:直接在url后边添加路径或查询参数

## 响应
1. 响应也可分为三部分: 状态行  响应头  响应体
* 协议名/版本  状态码 状态字符串
* Content-Type:响应体的格式
* 回车
* 响应体:你需要响应的内容
```
响应状态代码有三位数字组成， 第一个数字定义了响应的类别， 且有五种可能取值。
常见状态码：
100~199： 表示服务器成功接收部分请求， 要求客户端继续提交其余请求才能完成整个处理过程。
200~299： 表示服务器成功接收请求并已完成整个处理过程。 常用 200（OK 请求成功）。
300~399： 为完成请求， 客户需进一步细化请求。 例如： 请求的资源已经移动一个新地址、 常用 302（所请求的页面已经临时转移至新的 url） 、 307 和 304（使用缓存资源） 。
400~499： 客户端的请求有错误， 常用 404（服务器无法找到被请求的页面） 、 403（服务器拒绝访问， 权限不够） 。
500~599： 服务器端出现错误， 常用 500（请求未完成。 服务器遇到不可预知的情况）。

原文链接：https://blog.csdn.net/wapecheng/article/details/93522153
```
## 用Node.js 读取请求
* 获取请求动词
```
var method = request.method
console.log('method:')
console.log(method)
```
* 读取路径
```
var pathWithQuery = request.url 路径带查询参数
path 纯路径,不带查询参数
query 只有查询参数
```
* 读取请求头
```
request.headers['Accept']
console.log("请求头:" )
console.log(request.headers)
```
* 设置响应状态码 ` response.statusCode = number `
* 设置响应头 `response.setHeader('Content-Type','text/html');`
* 响应体  `response.write('内容') -- 可追加内容 `