const fs=require('fs');
/*
readFile:读取文件(静态文件)
readFile(path,回调(erro,data))
*/

fs.readFile('1.txt',(error,data)=>{
  if(error){
    console.log('真没有这个文件')
  }else{
    console.log(data);
  }
})
