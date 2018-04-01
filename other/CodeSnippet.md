


## Unique Key  in JS
``` javascript

    Number.prototype.toString.call(Math.random(), 36);

```




## 判断构造函数是否正确调用 —— 用`new`调用
``` javascript

    // new 时 `this` 指代一个新的 `Construct`实例；直接调用时指代调用者的引用。
    function Construct(){
        let useNew = this instanceof Construct;
    }

```

