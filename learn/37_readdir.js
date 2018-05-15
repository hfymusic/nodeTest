/**
 * Created by huangfy on 2018/2/28.
 */
const fs = require('fs');

fs.readdir('../', (err,files) => {
    if(err) throw err;
    console.log(files);
});