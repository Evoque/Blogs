
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

