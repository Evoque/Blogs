
1. Almost no funciton in Node.js directly performs I/O, so the process never blocks.

A Node.js app is run in a single process, without creating a new thread for every request. 

You can also enable specific experimental features by running Node.js with flags.

Node.js uses the CommonJS module system, while in the browser we are starting to see the ES Modules standard being implemented.

In practice, this means that for the time being you use `require()` in Node.js and `import` in the browser.