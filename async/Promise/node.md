

# Promise对象

> 由社区最早提出和实现

## MDN定义
The `Promise` Object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
> Promise 对象用于表示一个异步操作的最终状态(完成或失败)，以及其返回的值。

### Using promises

Essentiall, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. 
本质上，一个Promise是某个函数返回的对象，你可以把回调函数绑定在这个对象上，而不是把回调函数当作参数传进函数。

``` javascript

    function successCallback(result){ /*...*/ }

    function failureCallback(error){ /*...*/ }

    doSomething(successCallback, failureCallback)

```

==> 

``` javascript

    let promise = doSomething();

    promise.then(successCallback, failureCallback);


    // or simply:
    doSomething().then(successCallback, failureCallback);
```

#### Promise advantages

##### Guarantees

1、Callbacks will never be called before the `completion of the current run` of the JavaScript event loop.
> 在当前JS事件队列运行完成之前，回调函数永远不会被调用
    
2、Callbacks added with .then even after the success or failure of the asynchronous operation, will be called, as above.
> 即使是在异步操作完成之后才添加的函数(`.then`)，也会被调用； 如下代码
``` javascript

    const getPromise = function () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('hello');
                }, 1000);
            })
        };

        let then1 = getPromise().then(result => {
            console.log(`This is then1, msg is ${result}`);
            return `then1 ${result}`;
        });

        let then2 = then1.then(result => {
            console.log(`This is then2, msg is ${result}`);
            return `then2 ${result}`;
        }); 
        
        then2.then(result => console.log(`final result: msg ${result}`));

        // 输出
        /*
            This is then1, msg is hello
            This is then2, msg is then1 hello
            final result: msg then2 then1 hello
        */
```

**即：** 在已经`resolved`的Promise函数之后再串联(`.then`), 仍会执行then中的`resolve`回调函数。

3、Multiple callbacks may be added by calling `.then` several times, to be executed independently in insertion order.

> The most immediate benefit of promises is chaining.



#### Chaining

The Chain magic: the `then` function returns a new promise, different from the original:
> then 函数会返回一个新的Promise， 跟原来的不同

Basically, each promise represents the completion of another asynchronous step in the chain.


#### Error propagation
Basically, a promise chain stops if there's an exception, looking down the chain for catch handlers instead.
> 如果the chain中没有异常处理， 异常会被吃掉。

Promise的`then`写法在ECMAScript 2017中用`async/await`实现为:
``` javascript

    async function foo(){
        try {
            let result = await doSomething();
            let newResult = await doSomethingElse(result);
            let finalResult = await doThirdThing(newResult);
            console.log(`Got the final result: ${finalResult}`);

        } catch(error) {
            failureCallback(error);
        }
    }

```


### Creating a Promise around an old callback API

In an ideal world, all asynchronous functions would already return promises.

Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:
> 最佳实践是把会产生问题的函数放在尽可能底层的地方(用Promise包裹), 然后永远不直接调用他们。
``` javascript

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(10000).then(() => saySomething("10 seconds")).catch(failureCallback);

```
上面的代码中：把`setTimeout`装进Promise中，`setTimeout`的回调函数传递给promise的`resolve`函数，可实现回掉函数的串联(`then`)调用以及异常的统一捕获和处理(在最后使用`catch`进行捕获)。 


### Composition

`Promise.resolve()` and `Promise.reject()` are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.
>  手动创建已经`resolve` 或者 `reject`的promise的快捷方法.


`Promise.all()` and `Promise.race()` are two composition tools for running asynchronous operations in parallel.
> 并发执行异步操作的两个组合式工具。


#### Sequential composition is possible using some clever JavaScript;
> 时序组合可以使用一些优雅的javascript形式:
``` javascript

    [func1, func2].reduce((p, f) => p.then(f), Promise.resolve());

    // ==> 

    [func1, func2].reduce((sum, cur) => sum.then(cur), Promise.resolve()); 
```
Basically, we reduce an array of asynchronous functions down to a promise chain equivalent to : `Promise.resolve().then(func1).then(func2)`;



This can also be done with a reusable compose function, which is common in functional programming:
>  我们可以写成可复用的函数形式，这在函数式编程中极为普遍
``` javascript

    let applyAsync = (acc, val) => acc.then(val);
    let composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));

    // the useage is : 
    let transformData = composeAsync(func1, asyncFunc1, asyncFunc2, func2);
    transformData(data);
```
The `composeAsync` function will accept any number of functions as arguments, and will return a new function that accepts an **initial value** to be passed through the composition pipeline. This is beneficial because any or all the functions may be either asynchronous or synchronous, and they are guaranteed to be executed in the correct order;
> 他们被保证按照顺序执行

In ECMAScript 2017, sequential composition can be done more simply with `async/await`:
``` javascript

    for (let f of [func1, func2]){
        await f();
    }

```
上面是 ES7 `async/await`, 简单，易理解。
> 只是原生JS包装(`Thunk函数`)的语法糖。


#### Timing

To avoid surprise, functions passed to `then` will never be called synchronously, even with an `already-resolved` promise:
``` javascript

    Promise.resolve().then(() => console.log(2));
    console.log(1);

    // 1, 2

```

Instead of running immediately, the passed-in function is put on a microtask queue, which means it runs later when the queue is emptied at the end of the current run of the JavaScritp event loop, i.e. pretty soon;
> 微任务队列，当当前event loop执行完毕之后，微任务队列开始执行。
``` javascript

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait().then(() => console.log(4));

    Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
    console.log(1);

    // 结果
    // 1, 2, 3, 4

```
上述输出结果应该为: `1, 2, 3, 4`, 因为(按代码顺序说明):
- `console.log(4)`被wait函数放到了setTimeout的回掉函数中插入eventLoop
- `console.log(2) & console.log(3)`则是插入到当前的**microtask queue**(微任务队列), 微任务队列会在当前主线程执行完之后执行。
- `console.log(1)`处于主线程中；
- So， 执行顺序为: `主线程代码` -> `微任务代码` -> `Event Loop中的代码`。
