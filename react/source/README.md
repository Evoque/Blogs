> 官方源码

​	A **declarative**, **efficient**, and **flexible** JavaScript library for building **user interfaces**.



## 目标

🎯 React核心设计思想

🎯 成为Top级的Reactor



## 如何学习源码

- [ ] 掌握dev环境
  - [ ] build成功
  - [ ] 先熟悉各个toolchain(具体用法可以先不深入)
- [ ] 跟随官网API学习



### 官方README.md

- Declarative: Declarative views make your code more predictable, simpler to understand, and easier to debug.
- Component-Based: Pass rich data through your app and keep state out of the DOM.
- [reactjs.org](https://github.com/reactjs/reactjs.org): The React Documentation website.
- [Facebook Open Source Code of Conduct](https://engineering.fb.com/codeofconduct/)


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

- [ ] How `Context` works
  - How to update the sub component tree.
  - What about `useContext`


## 进阶

- [ ] [Profiling React component performance with Chrome devtools](https://calibreapp.com/blog/react-performance-profiling-optimization) begining introduction: [Profiling Components with the Chrome Performance Tab](https://reactjs.org/docs/optimizing-performance.html)
- [ ] Node SSR
- [ ] React Native
- [ ] [Getting started with react](https://www.taniarascia.com/getting-started-with-react/)  by Tania Rascia
- [ ] [React for designers](https://reactfordesigners.com/)
- [ ] [A re-introduction to JavaScript(JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) MDN 官方介绍
- [ ] [JAVASCRIPT.INFO](https://javascript.info/) 
- [ ] [terser](https://github.com/terser/terser): JavaScript parser, mangler and compressor toolkit for ES6+
- [ ] [JSX online converter](https://babeljs.io/en/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3&externalPlugins=): Babel中实时显示JSX转译为Javascript
- [ ] [UNPKG](https://unpkg.com/): unpkg is a fast, global content delivery network for everything on npm. Use it to quickly and easily load any file from any package using a URL like `unpkg.com/:package@:version/:file`
- [ ] JSX preprocessor: you won't need it for anything else.
  1. babel-cli@6
  2. babel-preset-react-app@3
  > ↑ `npx babel --watch src --out-dir . --presets react-app/prod`
- [ ] Babel
- [ ] Create React App
- [ ] Next.js: lightweight framework for **static and server-rendered applications** built with React; But assumes that you're using Node.js as the server environment.
- [ ] [Gatsby](https://reactjs.org/docs/create-a-new-react-app.html#gatsby): is the best way to create static websites with React. It lets you use React components, but outputs pre-rendered HTML and CSS to guarantee the fastest load time.
- [ ] [More Flexible Toolchains](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains): build a component library or integrating with an existing codebase.
  1. [Neutrino](https://neutrinojs.org/): combines the power of webpack with the simplicity of presets, and includes a preset for React apps and React components.
  2. [Nx](https://nx.dev/react/): is a toolkit for full-stack monorepo development, with built-in support for React, Next.js, Express, and more.
  3. [Parcel](https://parceljs.org/): is a fast, zero configuration web application bundler that works with React.
  4. [Razzle](https://github.com/jaredpalmer/razzle): is a server-rendering framework that doesn't require any configuration, but offers more flexibility than Next.js
- [ ] [Circle CI](https://circleci.com/docs/2.0/triggers/#scheduled-builds) & [Travis CI](https://docs.travis-ci.com/user/cron-jobs/)
- [ ] How VSCode highlight JSX code?
- [ ] DOM Event objects defined in DOM.
- [ ] [Formik](https://formik.org/docs/overview) is one of the popular React forms.
- [ ] How [React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools) & [Redux Dev Tools](https://github.com/reduxjs/redux-devtools) works
- [ ] Really understand `Code Splitting`: how to load dynamically at runtime.
- [ ] [Loadable Components](https://github.com/gregberge/loadable-components) and it's nice [guide for bundle splitting with server-side rendering](https://loadable-components.com/docs/server-side-rendering/)
- [ ] Why `React.lazy` currently only supports default exports.
- [ ] How [algolia](https://www.algolia.com/) works: Search inside the web.
- [ ] The exciting Chrome Dev Performance Tool: Web page profiling
- [ ] [react-hyperscript](https://github.com/mlmorg/react-hyperscript): Hyperscript syntax for React.js markup.
- [ ] [hyperscript-helpers](https://github.com/ohanhi/hyperscript-helpers) Terse syntax for hyperscript.
- [ ] React核心diff算法的深入理解, 简介: [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [ ] [react-motion](https://github.com/chenglou/react-motion): A spring that solves your animation problems.
- [ ] [Reason](https://reasonml.github.io/): Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems.
- [ ] [Reason-React](https://reasonml.github.io/reason-react/en/): All your ReactJS knowledge, codified.
- [ ] [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
- [ ] [https://developer.mozilla.org/en-US/docs/Web/Web_Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

##  QA

- [ ] declarative: how
- [ ] efficient: how
- [ ] flexible:
- [ ] user interfaces:



## Conclusion
> 作为之后深入理解React源码体系的框架
1. React 中事件是怎么工作的？
  1.1 全部DOM事件的模拟
  1.2 [Portals](https://reactjs.org/docs/portals.html)中事件冒泡的处理(Event Bubbling)