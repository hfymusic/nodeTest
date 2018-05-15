/**
 * Created by huangfy on 2018/2/28.
 */
const fs = require('fs');

// 编码为对象
/*fs.writeFile('./text', 'This is a test.', {encoding: 'utf8'}, (err) => {
    if(err) throw err;
    console.log('done!');
});*/

// 编码为字符串
/*fs.writeFile('./text', 'This is a test.', 'utf8', (err) => {
    if(err) throw err;
    console.log('done!');
});*/

// 写入的内容为buffer，此时编码可不传，因为buffer本身就是字符串
const content = Buffer.from('This is a test!');
fs.writeFile('./text', content, (err) => {
    if(err) throw err;
    console.log('done!');
});