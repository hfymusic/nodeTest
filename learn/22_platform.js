/**
 * Created by huangfy on 2018/2/27.
 */
const {sep, delimiter, win32, posix} = require('path');

console.log('sep: ',sep);
console.log('posix sep: ',posix.sep);
console.log('PATH',process.env.PATH);
console.log('delimiter: ',delimiter);
console.log('posix delimiter: ',posix.delimiter);