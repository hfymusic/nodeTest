/**
 * Created by huangfy on 2018/2/26.
 */
module.exports.test = 'A';

const modB = require('./05_modB');
console.log('modA: ',modB.test);

module.exports.test = 'AA';