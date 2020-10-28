
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


Elements are the smallest building blocks of React apps.

Unlike browser DOM elements, React elements are plain object, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

React elements are immutable. Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

'function components' and 'class component'(ES6) are equivalent from React's point of view.

A good rule of thumb is that if part of your UI is used several times(Button, Panel, Avatar), or is complex enough on its own(App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.

React may batch multiple `setState()` calls into a single update for performance.

**A difference is that you cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly.**

In events, `e` is a synthetic event. React defines these synthetic events according to the [W3C](https://www.w3.org/TR/DOM-Level-3-Events/).

using the experimental [public class fields syntax](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

**as a last resort**: 万不得已(作为最后手段)
> `resort`: n. 凭借、手段；常去之地；vi. 求助、采用手段
 
`TL;DR`: Too long; Don't read.

```html
<form>
  <label>
    Name: 
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit">
</form>
```
This form has the default HTML form behavior of browsing to a new page when the user submits the form.


**The file input Tag**
In HMTL, an `<input type="file">` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JS via the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
Because its value is read-only, it is an **uncontrolled** component in React. 

**Fully-Fledged**: adj. 羽毛丰满的；发育全的；

**when and why you should use currying**:
1. A curried function takes multiple arguments, one at a time.
2. Each time an argument is passed to it, it returns a new function that accepts the next argument. It does this until all arguments have been passed where it then returns the final output.
```javascript
const curried = arg1 => arg2 => arg3 => { /** ... */ }
```
3. A curried function that has only had **some** of its arguments passed, is incomplete and called a partial application.
4. Access the closure scope of the function.
> It's all about composition.
**Use Cases**
1. Remove repetition
2. Isolate expensive processes
**Bad Parts**
1. The syntax is harder to read than traditional functions.
2. It's easy to abuse

Lessons Learned: 经验教训

Lifting state is involves writing more "boilerplate" code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs.

If something can be derived from either props or state, it probably shouldn't be in the state; but large list calcs should use cache.


**slots** in other libraries
```javascript
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```





