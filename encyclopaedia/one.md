> 2018年4月22日 http://www.ruanyifeng.com/blog/2018/04/weekly-issue-1.html

**蚂蚁金服CTO书单**：《刻意练习》、《商业的本质》、《解释的工具》、《论中国》、《失控》、[《众病之王-癌症传》](https://book.douban.com/subject/20507206/)、[《基因传》](https://book.douban.com/subject/27168433/)、[《人性中的善良天使》](https://book.douban.com/subject/26150549/)、《原则 PRINCIPLES》、《激荡十年、水大鱼大》、《中国科学技术史》

- [Low Level Bit Hacks You Absolutely Must Know](https://catonmat.net/low-level-bit-hacks): 位运算(bit operation)的用途，有很多例子；
    1. Check if the integer is even or odd:  (x & 1) ==0 -> even; 奇数的末尾是1， &1也为1
    2. Test if the h-th bit is set: 1的扩展, x & (1<<n) -> n-th bit is set;  检测第n位是不是1
    3. Set the n-th bit:  y = x | (1<<n)
    4. Unset the n-th bit: y = x & ~(1<<n): 第n位置0
      a. ~(1<<n): it turns on all the bits except n-th; turn all bit flip -> 111101111
    5. Toggle the n-th bit: y = x ^ (1<<n), 关键理解 ^ , bit is the same, result is 0, otherwise it's 1.
    6. Turn off the rightmost 1-bit: y = x & (x - 1): 00101010 => 00101000; 00010000 => 00000000
       a. 00000000 - 1 = 11111111
    7. Isolate the rightmost 1-bit: 01010100 -> 00000100,  y = x & (-x)
       a. In two's complement system -x is the same as ~x + 1;
    8. Right propagate the rightmost 1-bit: y = x | (x-1),  01010000 => 01011111

| Symbol |        Desc         |
| :----: | :-----------------: |
|   &    |     bitwise and     |
|   \|   |     bitwise or      |
|   ^    |     bitwise xor     |
|   ~    |     bitwise not     |
|   <<   | bitwise shift left  |
|   >>   | bitwise shift right |

- [React - Basic Theoretical Concepts](https://github.com/reactjs/react-basic):React 官方关于React原始设计思想的解释；
       The intention is to describe this in terms of deductive reasoning that lead us to this design.
       bugs and gaps: 缺陷和漏洞; gaps: 差异、缺口、缝隙、隔阂
   
   ​	The actual implementation of React.js if full of: **pragmatic solutions**, **incremental steps**, **algorithmic optimizations**, **legacy code**, **debug tooling** and **things** you need to make it actually useful. The actual implementation is much more difficult to reason about.
   
   ​	The core premise for React is that UIs are simple a projection of data into a different form of data. The same input gives the same output. A simple pure function.
   
   **Composition**
   
   They're combining two or more different abstractions into a new one.
   
   **State**
   
   We tend to prefer our data model to be immutable. We thread functions through that can update state as a single atom at the top.
   
   >  🎃: **Not fully understand!! Read ten times more!**
   
- [Google面试自学手册](https://github.com/jwasham/coding-interview-university/blob/master/translations/README-cn.md): 一份爱好者整理的Google面试准备指南;

   > 🎃:  **Quick scan, should study in depth one by one.**

- [Color](http://jamie-wong.com/post/color/): From Hexcodes to Eyeballs: 人眼如何感受到色彩，读懂这篇文章需要一点物理知识；

- [做开发十年，我总结出了这些开发经验](https://cloud.tencent.com/developer/article/1004735): 2011年在百度浏览器团队时遇到几件让人影响深刻的事情；

- [Why SQLite Does Not Use Git](https://sqlite.org/whynotgit.html): 为什么SQLite不使用Git，而是使用Fossil;

- [美国的数据真相](https://mp.weixin.qq.com/s?__biz=MzI2NjA3ODk2MA%3D%3D&from=1084195010&idx=4&mid=2650848195&sn=7399ea1a80effc77cd2f788373b412d4&weiboauthoruid=5493934570&wm=9006_2001)：美国人均预期寿命连续两年下降 & 美国人到底有多穷；

- [《环球时报》：发展国产芯片，这事不能再拖了](http://finance.sina.com.cn/stock/y/2018-04-18/doc-ifzfkmth6405788.shtml):  从2018年就开始喊
       
### 工具
- [Spectrum](https://github.com/withspectrum/spectrum): Simple, powerful online communities
- [Merge-images](https://github.com/lukechilds/merge-images): Easily compose images together without messing around with canvas; 多张图片合成一张图片的浏览器JS库、使用了Canvas
- [Tabler](https://github.com/tabler/tabler): 一个基于Bootstrap4的面板(dashboard)组件库
- [Etherpad](https://etherpad.org/): 老牌的多人实时编辑协同工具; Etherpad is a highly customizable Open Source online editor providing collaborative editing in really real-time.
         

### 新奇
- [Macbook一美元改成触摸屏](https://github.com/bijection/sistine): 一个非常牛的项目，作者在Macbook的摄像头上面，架了一块镜子。然后自动捕捉并识别手指的坐标。
- [Jelly Mario Bros](https://jellymar.io/): 水母版《超级马里奥》网页游戏，所有东西都会像水母一样升缩；
       

### 本周金句
   ❤️ **人生就像玻璃窗上的苍蝇，前途一片光明，却找不到出路。**
