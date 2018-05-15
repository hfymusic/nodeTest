/**
 * Created by huangfy on 2018/2/27.
 */
const {parse, format} = require('path');

const filePath = '/usr/local/bin/no.txt';
const ret = parse(filePath);

console.log(ret);
console.log(format(ret));