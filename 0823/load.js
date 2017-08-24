const http=require('http');
const fs=require('fs');
const arr=[{username:'小管管',password:123456},
          {username:'小秦秦',password:54321},
          {username:'大仙仙',password:123456}]
http.createServer((req,res)=>{
  if(req.url!=='/favicon.ico'){
    if(req.url.includes('user')){
      let json={};
      let obj={};
      let arrData=req.url.split('?')[1];
      let arrData2=arrData.split('&');
      arrData2.forEach(e=>{
        let arr2=e.split('=');
        json[arr2[0]]=arr2[1];
      });
      if(!json.act){
        obj.code=1;
        obj.msg='参数错误';
      }else{
        switch (json.act) {
          case 'add':
            if(arr.find(e=>e.username==json.username)){
              obj.code=2;
              obj.msg='已注册';
            }
            else{
              arr.push({
                username:json.username,
                password:json.password
              })
              obj.code=0;
              obj.msg='注册成功';
              obj.users = json.username;
            }
            break;
          case 'login':
              break;
          default:
            obj.code=1;
            obj.msg='参数错误';
        }
        res.write(JSON.stringify(obj));
        res.end();
      }
    }else{
      let fileName='www';
     req.url=(req.url==='/'?'/index.html':req.url);
     fs.readFile(fileName+req.url,(error,data)=>{
      // res.write(data);
       //res.end();
     });
    }
  }
  //  /user?act=add&username=xxx&password=xxx

}).listen(3200);
