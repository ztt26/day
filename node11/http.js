const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
//  console.log(req.url)
  switch (req.url) {
    case 'index.html':
      fs.readFile('index.html',(error,data)=>{
        res.write(data);
        res.end();
      })
      break;
    default:
      res.write('404');
      
  }
})
server.listen(888);
