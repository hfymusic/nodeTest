/**
 * Created by huangfy on 2018/2/28.
 */
const fs = require('fs');

fs.unlink('./test.txt', err => {
    if(err) throw err;
    console.log('文件删除成功');
});