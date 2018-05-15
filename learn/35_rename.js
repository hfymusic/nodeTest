/**
 * Created by huangfy on 2018/2/28.
 */
const fs = require('fs');

fs.rename('./text', 'test.txt', err => {
    if(err) throw err;
    console.log('done!');
});