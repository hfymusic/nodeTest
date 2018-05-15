/**
 * Created by huangfy on 2018/2/28.
 */
const fs = require('fs');

fs.watch('./',{
    recursive: true
}, (eventType, filename) => {
    console.log(eventType, filename);
});
