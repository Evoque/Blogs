
# Accessibility

Web accessibility also referred to as `a11y`.
Accessibility support is necessary to allow assistive technology to interpret web pages.

**WCAG**
The [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) provides guidelines for creating accessible web sites.

**WAI-ARIA**
The [Web Accessibility Initiative - Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/)

# Code-Splitting

```javascript
import('./math').then(math => {
  console.log(math.add(16, 26));
})
```

When using `Babel`, you'll need to make sure that Babel can parse the dynamic import syntax but is not transforming it. -> `@babel/plugin-syntax-dynamic-import`.

### React.lazy

> `React.lazy` and Suspense are not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we recommend [Loadable Components](https://github.com/gregberge/loadable-components). 

```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```
React.lazy takes a function that must call a dynamic `import()`. This must return a `Promise` which resolves to a module with a `default` export containing a React component.

The lazy component should then be rendered inside a `Suspense` component, which allows us to show some fallback content (such as a loading indicator) while we're waiting for the lazy component to load.
```jsx
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  )
}
```

### Route-based code splitting
A good place to start code splitting is with routes.
```jsx
// route-based code splitting using libraries like `React Router` with `React.lazy`
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}>
      </Switch>
    </Suspense>
  </Router>
)
```

### Context

Context is primarily used when some data needs to be accessible by many components at different nesting levels.

The `defaultValue` argument is **only** used when a component does not have a matching Provider above it in the tree.

The `contextType` property on a class can be assigned a Context object created by `React.createContext()`. 
```javascript
// 1. 
MyClass.contextType = MyContext;

// 2. 
static contextType = MyContext;
```

Context object accepts a `displayName` string property. React DevTools uses this string to determine what to display for the context.



### Error Boundaries

Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI**.

> Error boundaries do not catch errors for: 
> - Event handlers
> - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks); what about `async`?
> Server side rendering
> Errors thrown in the error boundary itself.

Only class components can be error boundaries.

### Integrating with Other Libraries

`ReactDOM.unmountComponentAtNode()`: React will unregister event handlers and other resources with the component tree when it is detached.

You can use React with any model library by subscribing to its changes in the lifecycle methods and, optionally, copying the data into the local React state.


### JSX In Depth

`false`, `null`, `undefined`, and `true` are valid children. They simply don't render.

One caveat is that some [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) still rendered by React.
> **falsy values**: false, 0 , -0, 0n, "", null, undefined, NaN

If you want a value `false`, `true`, `null`, or `undefined` to appear in the output , convert it to string.

### Optimizing Performance

#### Profiling Components with the Chrome Performance Tab.
These tags(`<Foo />`) get compiled into a direct reference to the named variable, So the component(`Foo`) must be in scope


### JSX In Depth

#### Choosing the Type at Runtime
``` javascript
function render() {
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />
}
```

The string props passed into a component is **HTML-unescaped**, So these two JSX expressions are equivalent:
``` javascript
<MyComp message="&lt;3" /> 
<MyComp message={'<3'} />
```

JSX removes whitespace at the beginning and ending of a line. 
It also removes blank lines.


### Portals

A typical use case for portals is when a parent component has an `overflow: hidden` or `z-index` style, but you need the child to visually "break out" of its container.

The portal still exists in the React tree regardless of position in the DOM tree. An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree.

> TODO: How DOM Event System works inside react? React simulate all the DOM events?

E.g.: The parent can capture its events regardless of whether it's implemented using portals

### Profiler API

The `Profiler` measures how often a React application renders and what the "cost" of rendering is.

### Reconciliation

> `conciliation`: 抚慰、调节、说服

### Refs and the DOM

> `escape hatch`: 安全舱口
> `playback`: 录音重放
> `inclination`: 爱好、癖好、意向；倾向、趋向、趋势

Avoid using refs for anything that can be done declaratively. For example, instead of exposing `open()` and `close()` methods on a `Dialog` component, pass an `isOpen` prop to it.

`React.createRef()` is introduced in React 16.3 
You may not use the ref attribute on function components because they don't have instance.

Access to a child's DOM node from a parent component is generally not recommended because it breaks component encapsulation, **But is can occasionally be useful for triggering focus or measuring the size or position of a child DOM node.**
Add a ref to the child component, you would only get a component instance rather than a DOM node.

Ref forwarding lets components opt into exposing any child component's ref as their own.

`findDOMNode()` is discouraged and deprecated in `StrictMode`

Refs are guaranteed to be up-to-date before `componentDidMount` or `componentDidUpdate` fires.

You can pass callback refs between components like you can with object refs that were created with `React.createRef()`
``` javascript

function CustomTextInput(props){
  return (
    <div>
      <input ref={props.inputRef}>
    </div>
  )
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput inputRef={el => this.inputElement = el}>
    )
  }
}

```

**string refs** have some issues:
React will call the `ref` callback with the DOM element when the component mounts, and call it with `null` when it unmounts. Also, react call ref callback twice for ever render: with `null` for old function instance and with DOM element for new function instance.
> Because the function instance is different on every render. React doesn't know it's the same function "conceptually"

- It requires that React keeps track of currently rendering component (since it can't guess `this`). This makes React a bit slower.
- It doesn't work as most people would expect with the 'render callback' pattern(e.g. `<DataGrid renderRow={ths.renderRow}>`), because the ref would get placed on `DataGrid` for the above reason. 
- It is not composable, i.e. if a library puts a ref on the passed child, the user can't put ahother ref on it. Callback refs are perfectly composable.
``` javascript

class MyComponent extends Component {

  renderRow = index => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent;
    return <input ref={'input-' + index} />;

    // This would work though! Callback refs are awesome.
    return <input ref={ip => this['input-' + index] = input} >
  }

  render() {
    return <DataTable data={this.props.data} renderRow={this.renderRow} />
  }
}

```

