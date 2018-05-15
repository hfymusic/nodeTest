/**
 * Created by huangfy on 2018/2/27.
 */
const {normalize} = require('path');

console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));