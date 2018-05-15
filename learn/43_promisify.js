/**
 * Created by huangfy on 2018/3/4.
 */
const fs = require('fs');
const promisify = require('util').promisify;
const read = promisify(fs.readFile);

// read('./43_promisify.js').then(data => {
//     console.log(data.toString());
// }).catch(ex => {
//     console.log(ex);
// });

async function test() {
    try{
        const content = await read('./443_promisify.js');
        console.log(content.toString());
    }catch(ex){
        console.log(ex);
    }
}

test();