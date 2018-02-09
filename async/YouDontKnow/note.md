

## 在递归中的应用
``` javascript

    function *foo(x){
        if(x < 3) {
            x = yield *foo(x+1);
        }
        return x * 2;
    }

    var result = foo(1);
    result.next(); // {value: 24, done: false}

```

The result from `foo(1)` and then calling the iterator's `next()` to run it through its recursive steps will be `24`. 
- 1. The first `*foo()` run has x at value `1`
- 2. which is `x < 3`, `x` is then `2`
- 3. One more recursive call results in `x` of `3`
- 4. since `x < 3` fails, the recursion stops, and `return 3 * 2` gives `6` back to the previous(3) call's `yield *` expression. 
- 5. Another `return 6*2, returns 12` back to the previous(2) call's `x`, 
- 6. Finally `12 * 2` is returned from the completed run of the `*foo()` generator.



#### **`generators` are controlled by `iterators`**


