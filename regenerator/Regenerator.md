# Regenerator



> 仓库地址: https://github.com/facebook/regenerator

 

### 前言 & 准备

Regenerator 是 Facebook 基础架构团队出的一个babel插件，作用是把ES6的`Generator/GeneratorFunction` 代码转换成ES5代码，然后在所有的JS环境中运行(当时还没有ES6的普遍支持)。



所以， 首先明确ES6中`Generator` 和`GeneratorFunction`的标准定义。 在ECMA规范文档中找到一张比较权威的图：

![Figure 2 (Informative): Generator Objects Relationships](http://www.ecma-international.org/ecma-262/7.0/img/figure-2.png)

ECMA说明的地址是：http://www.ecma-international.org/ecma-262/7.0/#sec-generatorfunction-constructor。 有兴趣并且耐得住寂寞的可以去读读。



另外关于`Generator`和`GeneratorFunction`的用法和意义，每本讲ES6的书都会有涉及，比较知名的几本都讲的不错， 这里就不再赘述。



### 正文 

源码读了几遍， 其中有些真的是硬着头皮读的， 因为其中涉及的几乎都是`babel`插件写法以及`AST`的知识； 在这方面自己的积累几乎为零， 所以根本不得其所以然。 



**SO**， 这里先占个坑， 等以后有机会接触`babel plugin` 和 `AST`的时候再填。

















