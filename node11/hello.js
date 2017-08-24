let http=require('http');
//创建一个服务器
const server=http.createServer((request,response)=>{
  /*
  request请求  可以访问到浏览器发送的信息
  response响应  向浏览器发送信息
  */
  console.log(request.url);
  response.write('hehe');
  response.end();


});
server.listen(8888);
