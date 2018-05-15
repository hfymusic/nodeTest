/**
 * Created by huangfy on 2018/2/28.
 */
const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();

ce.on('test', () => {
    console.log('This is a test.');
});

setInterval(() => {
    ce.emit('test');
},2000);