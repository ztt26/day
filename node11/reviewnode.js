const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
  if(req.url=='/favicon.ico'){
    return
  }
  //  /user?act=add&username=xxx&password=xxx
  console.log(req.url)
  switch (req.url) {//就是端口后的'/index.html'
    case '/index.html':
        fs.readFile('index.html',(error,data)=>{
          res.write(data);
          res.end();
        })
    break;
    case '/user':
          res.write('{"name":"han"}');//发送给前端的字符串
          res.end();
    break;
    default:res.write('404');
          res.end();
    break;

  }
})
server.listen(4383);
