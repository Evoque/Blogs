
> **packages/react**
> Contains only the functionality necessary to define React components;
> The renderer is like `react-dom` for the web, or `react-native` for the native envs

🎯：掌握API含义，理解应用场景，举一反三，关键掌握设计和实现思想！

React has been designed from the start for gradual adoption, and **you can use as little or as much React as you need.**
> 像`Grafana`混合了ng, react, jquery, 而性能几乎没受影响，是个特别牛逼的案例.

Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

[CORS settings attributes](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes): The crossorigin attribute valid on the `<audio>`, `<img>`, `<link>`, `<script>`, `<video>` elements, provides support for CORS, defining how the element handles crossorigin requests, 


Adding JSX is a lot like adding a CSS preprocessor. 

**Creating a Toolchain from Scratch**
A JavaScript build toolchain typically consists of:
1. A package manager, such as `Yarn` or `npm`
2. A **bundler**, such as `webpack` or `Parcel`
3. A **compiler** such Babel
> check out [Creating a React App From Scratch](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658) for example


**Why the crossorigin Attribute?**
If you serve React from a CDN, we recommend to keep the `crossorigin` attribute.
We also recommend to verify that the CDN you are using sets the `Access-Control-Allow-Origin: *`


Since JSX is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.

JSX Represents Objects: `React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like:
```javascript
// simplified structure
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen.


## VISC (Verify in source code)
- [ ] curly braces in JSX: how JavaScript expression works in curly braces;
- [ ] embed a JavaScript expression in an attribute;
- [ ] JSX Prevents Injection Attacks
> It is save to embed user input in JSX:
> ``` JSX
> const title = response.potentiallyMaliciousInput;
> const element = <h1>{title}</h1>; // This is safe;
> ```
> By default React DOM escapes(& => `&amp;`, <> => `&lt;&gt;`, " => `&quot;`, ' => `&#39;`) any values embedded in JSX before rendering them 
> This helps prevent XSS(cross-site-scripting).



