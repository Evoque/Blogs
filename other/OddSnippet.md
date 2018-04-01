

### `constructor` vs `Object.create`

通过这两种方法创建对象并实现继承时， `prototype`为null时， 结果会不同：

``` javascript

    var obj = Object.create(null); // obj没有`__proto__`属性

    var Cloner = function(){};
    Cloner.prototype = null;
    var objPro = new Cloner(); // objPro.__proto__ === Object.prototype;

```