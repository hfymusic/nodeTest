/**
 * Created by huangfy on 2018/2/26.
 */
module.exports.test = 'B';

const modA = require('./05_modA');
console.log('modB: ',modA.test);

module.exports.test = 'BB';