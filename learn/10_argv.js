/**
 * Created by huangfy on 2018/2/27.
 */
const {argv,argv0,execArgv,execPath} = process;

argv.forEach(item => {
    console.log(item);
});

console.log(argv0);
console.log(execArgv);
console.log(execPath);