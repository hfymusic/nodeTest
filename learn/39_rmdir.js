/**
 * Created by huangfy on 2018/2/28.
 */
const fs = require('fs');

fs.rmdir('./test', err => {
    if(err) throw err;
    console.log('删除文件夹成功');
});