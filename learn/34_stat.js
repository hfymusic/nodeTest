/**
 * Created by huangfy on 2018/2/28.
 */
const fs = require('fs');

// stat与文件信息有关
fs.stat('./34_stat.js',(err,stats) => {
    //if(err) throw err;
    if(err){
        console.log('文件不存在');
        return;
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats);
});