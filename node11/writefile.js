const fs=require('fs');
/*
writeFile:写文件
writeFile(文件名,‘内容’，回调(error))
*/

// fs.writeFile('2.txt','我是最美的哈哈',(error)=>{
//   if(error){
//     console.log('创建失败')
//   }else{
//     console.log('ok');
//   }
// })
fs.unlink('2.txt',()=>{
  console.log('删除成功')
})

/*
区别：下面的那个逐条执行，只有第一句对了才会执行第二句
*/
fs.unlinkSync(‘1.txt’);
console.log('删除成功')
