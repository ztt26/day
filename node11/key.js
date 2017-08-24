const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
  if(req.url=='/favicon.ico'){
    return
  }
  switch (req.url) {
    case '/1.txt':
        fs.readFile('index.html',(error,data)=>{
          res.write(data);
          res.end();
        })
    break;
    case '/user':
          res.write('{"name":"han"}');
          res.end();
    break;
    default:res.write('404');
          res.end();
    break;

  }
})
if(req.url!='/favicon.ico'){
  let url='www'+(req.url=(req.url=='/'?'/index.html':req.url)
  if(/user/.text(req.url)){
    res.write('{"name":"han"}');
    res.end();
  }else{
    fs.readFile(url,(error,data)=>{
      res.write(data);
      res.end();
    });
  }
}
server.listen(4383);
