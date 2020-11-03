
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