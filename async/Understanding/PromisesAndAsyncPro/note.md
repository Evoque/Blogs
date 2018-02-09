

# Promises And Asynchronous Programming


events and callbacks weren't powerful enough to support everything developers wanted to do. `Promises` are the solution to this problem.


For a complete understanding, it's important to understand some of the basic concepts upon which promises are built.


**Always attach a rejection handler, even if the handler just logs the failure.**

**A fulfillment or rejection handler will still be executed even if it is added to the job queue after the promises is already settled.** This allows you to add new fulfillment and rejection handlers at any time and guarantee that they will be called.



Each call to `then()` or `catch()` creates a new job to be executed when the promise is `resolved`. But these jobs end up in a separate job queue that is reserved strictly for promises.


When either `resolve()` or `reject()` is called inside the executor, a job is added to the job queue to resolve the promise. This is called `job scheduling`, like the `setTimeout()` or `setInterval()` functions.


LIKE:
``` javascript
    // add this function to the job queue after 500ms 
    setTimeout(function(){
        console.log("Timeout");
    }, 500);

    console.log("H1!");

```
> This code schedules a `job` to be added to the `job queue` after 500 ms.


the ability to convert thenables into formal promises is important for backward compatibility with previously existing libraries.

When you're unsure whether an object is a promise, passing the object through `Promise.resolve()` or `Promise.reject()` is the best way to find out because promises just pass through unchanged.

An **implicit** `try-catch` is inside every executor so that the error is caught and then passed to the rejection handler.
``` javascript
    new Promise((resolve, reject) => {
        try{
            throw new Error("Explosion!");
        } catch(ex){
            reject(ex);
        }
    });

```
The executor catches any thrown errors to simplify this common use case, *but an error thrown in the executor is only reported when a rejection handler is present.*






