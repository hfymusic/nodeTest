/**
 * Created by huangfy on 2018/3/4.
 */
const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');

const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    console.log(num);
    if(num < 7){
        ws.write(num + ''); // 写入的流需要是字符串或者buffer类型，否则会报错
    }else{
        clearInterval(tid);
        ws.end();
    }
}, 200);

ws.on('finish', () => {
    console.log('done.');
});