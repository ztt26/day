const querystring = require('querystring');
const url=require('url')
let str='foo=bar&abc=xyz&abc=123'
console.log(querystring.parse(str))
console.log(url.parse(str,true))
/*

query:将字符串？后面的数据截出来
如果parse的第二个参数携程true，那么就解析成对象
parsename就是

post  请求每次都会进on('data')中
write里只能放字符串、send不但可以放字符串还可以放对象
*/
