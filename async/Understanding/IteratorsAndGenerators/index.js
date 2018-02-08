



function run(taskDef){
    let task = taskDef();
    let result = task.next();

    function step(){
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function(err, data){
                    if (err) {
                        result = task.throw(err);
                        return;
                    } 
                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }  
    step();
}  
let fs = require("fs");  
/**
 *  把要调用的函数改为Thunk函数的写法：
 *      只接收一个参数；
 *      返回返回一个执行回调函数的函数
 */
function readFile(fileName){
    return function(callback){
        fs.readFile(fileName, callback);
    };
}

const fileName = './async/Understanding/IteratorsAndGenerators/data.json';

run(function*(){
    let contents = yield readFile(fileName);
    // console.dir(contents);
    console.log('Done!');
});
 