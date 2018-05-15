/**
 * Created by huangfy on 2018/2/27.
 */
setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(() => {
    console.log('setTimeout');
},0);

process.nextTick(() => {
    console.log('nextTick');
    process.nextTick(() => {
        console.log('nextTick');
    });
});