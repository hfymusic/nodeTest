/**
 * Created by huangfy on 2018/2/28.
 */
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{}

const ce = new CustomEmitter();

ce.on('error', (err,time) => {
    console.log(err);
    console.log(time);
});

ce.emit('error', new Error('oops!'), Date.now());