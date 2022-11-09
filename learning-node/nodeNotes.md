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

    GLOBALS - NO WINDOW

    __dirname    - path to current directory
    __filename   - file name
    require      - function to use modules (CommonJS)
    module       - info about current module (file)
    process      - info about env where the program is being executed

```js
setInterval(() =>{
    console.log('hello world')
} , 1000)

// This command will console.log the string 'hello world' every second
```

## ***Modules***
Every file is a module. Variables and functions defined in those files are scope of those modules; they are not available outside of those modules.

Best Practice: When loading a module using the require function, it is better to store the result in a `const` so we do not override it.

