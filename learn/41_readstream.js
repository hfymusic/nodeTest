/**
 * Created by huangfy on 2018/3/4.
 */
const fs = require('fs');

const rs = fs.createReadStream('./41_readstream.js');

rs.pipe(process.stdout); // 输出到控制台