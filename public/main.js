

getCss.onclick=()=>{
  const request= new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onload=()=>{
    const style = document.createElement('style')
    style.innerHTML = request.response
    document.head.appendChild(style)
  }
  request.send()
}
getJs.onclick=()=>{
  const request=new XMLHttpRequest()//创建请求
  request.open('GET','/2.js')
  request.onload=()=>{
    //创建script标签,成功收到响应(request.response),插入到body里.
    const script= document.createElement('script')
    script.innerHTML=request.response
    document.body.appendChild(script)
  }
  request.send()
}
getHtml.onclick=()=>{
  const request=new XMLHttpRequest()//创建请求
  request.open('GET','/2.html')
  request.onreadystatechange=()=>{
    if(request.readyState === 4 && request.status === 200 
      ){
      /* request.status得知返回的状态码 */
        const div =document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      
    }else if(request.status > 300){
      alert('加载失败')
    }
  }
  request.send()
}
getXml.onclick=()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/2.xml')
  request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status ===200){
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }else if(request.status>300){
      alert('加载失败')
    }
  }
  request.send()
}
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
