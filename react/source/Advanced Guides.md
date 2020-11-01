
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






### JSX In Depth

`false`, `null`, `undefined`, and `true` are valid children. They simply don't render.

One caveat is that some [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) still rendered by React.
> **falsy values**: false, 0 , -0, 0n, "", null, undefined, NaN

If you want a value `false`, `true`, `null`, or `undefined` to appear in the output , convert it to string.