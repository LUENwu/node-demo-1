# AJAX--Async JavaScript And XML(异步的JavaScript与XML)

## AJAX:既是使用JS发请求和收响应

1. 是浏览器上的功能
2. 浏览器可以发请求与响应
3. 浏览器在window上加了一个XMLHttpRequest的全局函数
4. 这个函数可以构造出一个对象
5. js通过这个对象实现发请求与响应
6.  文档对象模型 (DOM) 是HTML和XML文档的编程接口

```
使用fs.readFileSync加上文件路径,将该文件读成字符串,传给write

response.write(fs.readFileSync('public/index.html'))
```
### 挑战1 使用AJAX加载CSS

* 以往都是使用<link rel = stylesheet href="1.css"/>来加载CSS
* 这次用AJAX加载CSS
## 步骤

1. 在server.js中写入相应的路径,然后使用js创建XMLHttpRequest对象  
`const request = new XMLHttpRequest()`
2. 调用 **open()**,初始化一个请求  
`request.open('GET','url')`
3. 监听成功与失败时执行的函数,如H1标签内的内容变蓝色

```
旧方法:onerror并没有很好的匹配AJAX,最好使用onreadystatechange

request.onload=()=>{
    const style=document.createElement('style')
    style.innerHTML = request.response
    document.head.appendChild(style)
  }
request.onerror=()=>{
  console.log('失败了')
}
```

onreadystatechange监听事件中的request.readyState属性会返回一个XMLHttpRequest代理当前所处的状态.一个XHR代理总是处于以下状态中的一个:
* 0 UNSENT --  XMLHttpRequest代理被创建,但尚未调用open()方法
* 1 OPENED -- open()方法已经被调用
* 2 HEADERS_RECEIVED -- send()方法已经被调用,并且头部和状态已经被获得
* 3 LOADING -- 下载中:responseText 属性已经包含部分数据
* 4 DONE -- 下载操作已完成


代码如下:

```
request.onreadystatechange=()=>{
  if(request.readyState===4){
    /* request.status得知返回的状态码 */
    if(request.status>=200 && request.status<300){
      const style =document.createElement('style')
      style.innerHTML = request.response
      document.head.appendChild(style)
    }
  }else{
    alert('加载失败')
  }
}

```


4. 发送请求  
`request.send()`

## 挑战2 AJAX加载JS
* 以往都是使用<script src="2.js"></script>来加载JS
* 这次用AJAX加载JS

1. 与CSS差不多,在js中创建XMLHttpRequest对象  
`const request = new XMLHttpRequest()`
2. 调用open('method','url'),初始化一个请求  
`request.open('GET','/2.js')`
3. 监听成功事件成功与失败所执行的函数  
   ```
   request.onreadystatechange=()=>{
     if(request.readyState===4){
       if(request.status>=200){
         console.log('真的接收到响应的内容'
         )
       }else if(request.status > 300){
         alert('请求失败')
       }
     }
   }
   ```
4. 发送请求  
`request.send()`

## 挑战3 AJAX加载HTML
>>方法类似挑战2的写法
1. `const request = new XMLHttpRequest()`
2. `request.open('GET','/2.html')`
3. 监听成功事件成功与失败所执行的函数 
     同上挑战1与2
4. `request.send()`

## 挑战4 AJAX加载XML
1. `const request = new XMLHttpRequest()`
2. `request.open('GET','/2.xml')`
3. 监听成功事件成功与失败所执行的函数
* request.responseXML是一个dom对象
```
request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status ===200){
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())

    }
}
```
4. `request.send()`
## 总结
![图片](image/屏幕截图%202022-04-15%20200253.jpg)


# JSON 不是编程语言是标记语言 与HTML XML Markdown一样,用来展示数据
* 支持的数据类型
1. string 只支持双引号
2. number 科学技术法
3. bool true与false
4. null 没有undefined
5. object
6. array
* 只有这6种数据类型,并且不支持函数,不支持变量(即不支持引用)  

## JSON.parse
* 将符合JSON语法的字符串转换成JS对应类型的数据
* JSON字符串=>JS数据
* 由于JS只有6种数据类型,所以转成的数据也只有6种
* 不符合JSON语法的,则直接抛出一个ERROR对象
* 一半用try catch捕获错误
```
try{
  JSON.parse({'name':"frank"})
}catch(error){
  console.log('出错,详情:')
  console.log(error)
}
```
## JSON.stringify
* 是JSON的逆运算
* 把JS数据=>JSON字符串
* JS数据类型比JSON多,不一定能转换成功

## 挑战5 用Ajax加载JSON
```
getJson.onclick=()=>{
  const request= new XMLHttpRequest()
  request.open('GET','/5.json')
  request.onreadystatechange=()=>{
    if(request.readyState===4&& request.status===200){
      console.log(request.response)
      const object = JSON.parse(request.response)
      myName.textContent=object.name
    }
  }
  request.send()
}
```
##  挑战6 加载分页
```
let n =2
next.onclick=()=>{
  const request= new XMLHttpRequest()
  request.open('GET',`/page${n}.json`)
  request.onreadystatechange=()=>{
    if(request.readyState===4&& request.status===200){
      console.log(request.response)
      let array  = JSON.parse(request.response)
      array.forEach(item => {
        let li = document.createElement('li')
        li.textContent=item.id
        x.appendChild(li) 
      });
      n+=1
    }
    
  }
  request.send()
}
```