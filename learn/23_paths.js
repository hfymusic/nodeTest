/**
 * Created by huangfy on 2018/2/27.
 */
const path = require('path');
const mod = require('./02_cusmod');

console.log(mod.testVal);
console.log('__dirname      ', __dirname);
console.log('process.cwd()  ', process.cwd());
console.log('./             ', path.resolve('./'));

/**
 * __dirname,__filename总是返回文件的绝对路径
 * process.cwd()总是返回执行 node 命令所在文件夹
 * */