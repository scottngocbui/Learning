# ***Node.JS***

## ***Global Object*** 

```js
console.log(); //global

setTimeOut();
clearTimeOut();

setInterval();
clearInterval();

//In node:

global.console.log();

var message = '';

```

## ***Modules***
Every file is a module. Variables and functions defined in those files are scope of those modules; they are not available outside of those modules.

Best Practice: When loading a module using the require function, it is better to store the result in a `const` so we do not override it.