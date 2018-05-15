/**
 * Created by huangfy on 2018/2/28.
 */
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{}

const ce = new CustomEmitter();

ce.once('test', () => {
    console.log('test event once');
});

setInterval(() => {
    ce.emit('test');
}, 2000);