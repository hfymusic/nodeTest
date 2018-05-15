/**
 * Created by huangfy on 2018/2/27.
 */
const {join} = require('path');

console.log(join('/usr', 'local', 'bin/'));
console.log(join('/usr', '../local', 'bin/'));