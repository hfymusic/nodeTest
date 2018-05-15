/**
 * Created by huangfy on 2018/2/26.
 */
console.log('this is a module');

const testVal = 100;

function test(){
    console.log(testVal);
}

module.exports.testVal = testVal;
module.exports.testFn = test;